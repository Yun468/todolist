/* eslint-disable */
import "./index.css";
import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {

  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const colRef = collection(db,'list');

let listItems = [];

//取得db的document
getDocs(colRef)                              //getDoc()會返回一個promise
    .then((result) => {
        result.docs.forEach((doc) => {
            listItems.push(doc.data())          //拿到全部資料並成為一個object，放入listItems中
        });
    })
    .catch((err) => {
        console.log(err.message)
    });  
//List頁的組件
function ListPage(){
    // state hook  --useSate
    const [newItem,setNewItem] = useState("");
    const [items,setItems] = useState([]);
    const [newId,setNewId] = useState(0);

    //載入db 原有的list
    let contents = Object.keys(listItems[0]).map((i) => listItems[0][i]);       //所有content
    let contentsId = Object.keys(listItems[0]).map((i) => i);                   //所有content 對應的id
    for (let x=0; x<contents.length; x++){
        let item = {
            id: contentsId[x],
            value: contents[x]
        };
        console.log(item)
        setItems(oldList => [...oldList, item]);     //此處出錯!!!!!!!!!!
    }

    console.log("測試次數")

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
        console.log(items)
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