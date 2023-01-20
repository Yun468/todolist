/* eslint-disable */
import "./index.css";
import React,{useEffect} from "react";
import useState from "react-usestateref";
import {NavLink} from "react-router-dom";
import {db} from "./firebaseConfig"
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";

const colRef = collection(db,'list');

//List頁的組件
function ListPage(){
    // state hook  --useSate
    const [newItem,setNewItem] = useState("");
    const [items,setItems] = useState([]);
    const [newId,setNewId,ref] = useState(0);

    //取得db的document
    useEffect(() =>{
        const getData = async() => {
            const data = await getDocs(colRef);
            const contents = data.docs.map((doc) => ({...doc.data(), docId:doc.id}));
            contents.map(content => {
                content = Object.keys(content).map((i) => content[i]);
                const item = {
                    id: ref.current+1,
                    value: content[0],
                };
                setItems(oldList => [...oldList, item]);
                setNewId(item.id);
            })
        };
        getData();
    },[]);


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
        // addDoc(collection(db, "list"), {content:newItem});
        const now = new Date()
        let documentId = now.getFullYear().toString() + now.getMonth().toString() + now.getDate().toString() + now.getHours().toString() + now.getMinutes().toString() + now.getSeconds().toString()
        setDoc(doc(db, "list", documentId), {content:newItem}, { merge: true })
    };

    function deleteItem(id){
        const newArray = items.filter(item => item.id !== id);
        setItems(newArray);
        let delContent = items.filter(item => item.id === id)[0].value;
        //取得欲刪除content的documentID
        const getOldData = async() => {
            const data = await getDocs(colRef);
            const oldContents = data.docs.map((doc) => ({...doc.data(), docId:doc.id}));
            delContent = oldContents.filter(item => item.content === delContent )[0]
            deleteDoc(doc(db, "list", delContent.docId));
        };
       getOldData();
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