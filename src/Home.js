/* eslint-disable */
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Route, NavLink, HashRouter } from "react-router-dom";

// 主頁的組件

const Home = ()=>{
    return(
        <>
            <div className="nav">React 練習專案</div>
            <div className="content">歡迎光臨我的頁面</div>
            <div className="button_container">
                <NavLink to="/ListPage">
                    <input type="button" class="button" value="點此開始" />
                </NavLink>
            </div>
        </>
    );
}
export default Home;