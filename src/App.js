/* eslint-disable */
import "./index.css";
import React from "react";
import {Route,Switch} from "react-router-dom";
import Home from "./Home";
import ListPage from "./ListPage";


const App = ()=>{
    return(
        <>
            {/* 若此處直接寫  <Home/>  畫面不會有問題，但換成 <Switch>後就會爆炸*/}

            <Switch>
                <Route path="/" component={Home}/>
                <Route path="/ListPage" component={ListPage}/>
            </Switch> 
        </>
    );
}

export default App;