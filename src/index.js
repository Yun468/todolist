/* eslint-disable */
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import {HashRouter,Routes, Route } from "react-router-dom";
import App from "./App";



ReactDOM.render(
    <HashRouter><App/></HashRouter>, 
    document.getElementById("root")
);
