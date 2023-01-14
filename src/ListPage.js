/* eslint-disable */
import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Route, NavLink, HashRouter } from "react-router-dom";

//List頁的組件
class ListPage extends React.Component{
    render(){
        return(
            <>
                <div className="text_bar">
                    <input type="text" class="new_text" placeHolder="請在此輸入"/>
                    <input type="button" class="button" value="點此送出"/>
                </div>
                <div className="button_container" style = {{ flexDirection:"column",margin:"20px"}}>
                    <div id = "to_do_list"></div>
                    <NavLink to="/">
                        <input type="button" className="button" value="返回首頁" />
                    </NavLink>
                </div>
            </>
        );
    }
};

export default ListPage;