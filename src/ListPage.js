/* eslint-disable */
import "./index.css";
import React, { useState } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";



//List頁的組件
function ListPage(){
    // state hook  --useSate
    const [newItem,setNewItem] = useState("");
    const [items,setItems] = useState([]);
    const [newId,setNewId] = useState(0);
    // helper functions
    function addItem(){

        if(!newItem){
            alert("請輸入文字")
            return;
        };

        const item = {
            id: newId+1,
            value: newItem
        };
        setItems(oldList => [...oldList, item])
        setNewItem("");
        setNewId(item.id);
    };
    function deleteItem(id){
        const newArray = items.filter(item => item.id !== id);
        setItems(newArray);
    }

    return(
        <>
            <div className="text_bar">
                <input
                    type="text"
                    class="new_text"
                    placeHolder="請在此輸入"
                    value={newItem}
                    onChange={e =>setNewItem(e.target.value)}/>
                <input type="button" class="button" value="點此送出" onClick={()=>addItem()}/>
            </div>
            <div className="list_container">
                <div>
                    {items.map(item => {
                        return (
                            <div key = {item.id} className="item">
                                <div className="item_text">{item.value}</div>
                                <input type="button" className="button" value="刪除" onClick={()=>deleteItem(item.id)}/>
                            </div>
                        )
                    })}
                </div>
                <div>
                    <NavLink to="/">
                        <input type="button" className="button" value="返回首頁" />
                    </NavLink>
                </div>
            </div>
        </>
    );
} 

export default ListPage;