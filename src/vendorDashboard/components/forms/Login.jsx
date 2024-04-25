import React, { useState } from "react";
import { API_URL } from "../../data/apiPath";

function Login({ showWelcomeHandler }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/vendor/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        setEmail("");
        setPassword("");
        alert("Login successful");
        localStorage.setItem("loginToken", data.token);
        showWelcomeHandler();
      }
      const vendorId = data.vendorId;
      console.log(" checking for vendorId", vendorId);

      const VendorResponse = await fetch(
        `${API_URL}/vendor/single-vendor/${vendorId}`
      );
      console.log("haii..........",VendorResponse)
      const vendorData = await VendorResponse.json();
      if (VendorResponse.ok) {
        const vendorFirmId = vendorData.vendorFirmId;
        // console.log("checking for frimId", vendorFirmId);

        const vendorFirmName = vendorData.vendor.firm[0].firmName;
        // console.log("vendor  firm name:", vendorFirmName);
        localStorage.setItem("firmId", vendorFirmId);
        localStorage.setItem("firmName", vendorFirmName);
        window.location.reload();
      }
    } catch (error) {
      alert("Login fail");
      console.error(error);
    }
  };

  return (
    <div className="loginSection">
      <form className="authForm" onSubmit={loginHandler}>
        <h3>Vendor Login</h3>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="enter your email"
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter your password"
        />
        <br />
        <div className="btnSubmit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
