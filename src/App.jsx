import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DarkMode from "./components/darkMode/DarkMode";
import RactSwitch from "react-switch";
import Header from "./components/header/Header";
import reconstructionJPEG from "./assets/images/reconstructionJPEG.jpg";
import Reconstruction from "./RECONSTRUCTION/Reconstruction";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <>
     {/* <Reconstruction/> */}
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
     
    </>
  );
}

export default App;
