import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Login from "../components/forms/Login";
import Registor from "../components/forms/Registor";
import AddFirm from "../components/forms/AddFirm";
import AddProduct from "../components/forms/AddProduct";
import Welcome from "../components/Welcome";
import AllProducts from "../components/AllProducts";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRefister] = useState(false);
  const [showFirm, setShowFirm] = useState(false);
  const [showProduct, setShowProduct] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showAllProduct, setShowAllProduct] = useState(false);
  const [showLogOut, setShowLogOut] = useState(false);
  const [showFirmTitle, setShowFirmTitle] = useState(true);

  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");
    if (loginToken) {
      setShowLogOut(true);
    }
  }, []);

  useEffect(() => {
    const firmName = localStorage.getItem("firmName");
    if (firmName) {
      setShowFirmTitle(false);
    }
  }, []);
  const logOutHandler = () => {
    alert("are you sure logout ?");
    localStorage.removeItem("loginToken");
    localStorage.removeItem("firmId");
    localStorage.removeItem("firmName");
    setShowLogOut(false);
    setShowFirmTitle(true);
  };

  const showLoginHandler = () => {
    setShowLogin(true);
    setShowRefister(false);
    setShowFirm(false);
    setShowProduct(false);
    setShowWelcome(false);
    setShowAllProduct(false);
  };
  const showRegisterHandler = () => {
    setShowRefister(true);
    setShowLogin(false);
    setShowFirm(false);
    setShowProduct(false);
    setShowWelcome(false);
    setShowAllProduct(false);
  };
  const showFirmHandler = () => {
    setShowFirm(true);
    setShowRefister(false);
    setShowLogin(false);
    setShowProduct(false);
    setShowWelcome(false);
    setShowAllProduct(false);
  };
  const showProductHandler = () => {
    setShowProduct(true);
    setShowRefister(false);
    setShowLogin(false);
    setShowFirm(false);
    setShowWelcome(false);
    setShowAllProduct(false);
  };
  const showWelcomeHandler = () => {
    setShowProduct(false);
    setShowRefister(false);
    setShowLogin(false);
    setShowFirm(false);
    setShowWelcome(true);
    setShowAllProduct(false);
  };
  const showAppProductHandler = () => {
    setShowProduct(false);
    setShowRefister(false);
    setShowLogin(false);
    setShowFirm(false);
    setShowWelcome(true);
    setShowAllProduct(true);
  };

  return (
    <>
      <section className="landingSection">
        <NavBar
          showLoginHandler={showLoginHandler}
          showRegisterHandler={showRegisterHandler}
          showLogOut={showLogOut}
          logOutHandler={logOutHandler}
        />
        <div className="collectionSection">
          <SideBar
            showFirmHandler={showFirmHandler}
            showProductHandler={showProductHandler}
            showAppProductHandler={showAppProductHandler}
            showFirmTitle={showFirmTitle}
          />
          {showLogin && <Login showWelcomeHandler={showWelcomeHandler} />}
          {showRegister && <Registor showLoginHandler={showLoginHandler} />}
          {showFirm && <AddFirm />}
          {showProduct && <AddProduct />}
          {showWelcome && <Welcome />}
          {showAllProduct && <AllProducts />}
        </div>
      </section>
    </>
  );
};

export default LandingPage;
