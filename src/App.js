/* eslint-disable */
import "./index.css";
import React from "react";
import {HashRouter,Routes, Route } from "react-router-dom";
import Home from "./Home";
import ListPage from "./ListPage";


const App = ()=>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/ListPage" element={<ListPage />}/>
            </Routes>
        </>
    );
}

export default App;