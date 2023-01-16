import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/index";
import Signup from "../pages/Signup/index";
import EditUser from "../pages/Edit/index";

const RouteBuild = () => (
  <Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/edit" element={<EditUser/>} />
  </Routes>
);

export default RouteBuild;
