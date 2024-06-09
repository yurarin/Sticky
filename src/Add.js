import React, { useRef, useState } from "react";
import "./styles/Add.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";

const Add = (props) => {
    const [stickyText, setStickyText] = useState("");
    const textareaRef = useRef(null);
    let btnCount = true;
    const navigate = useNavigate();

    const addFunction = async () => {
        await addDoc(collection(db, props.user.displayName), {
            sticky: stickyText
        });
        textareaRef.current.value = "";
        setStickyText("");
        navigate("/home");
    }
    if (stickyText.length > 0) {
        btnCount = false;
    }

    return (
        <div className="add">
            <div className="addContainer">
                <div className="addItem">
                    <div className="addStickyPreview">
                        <h2>{ stickyText }</h2>
                    </div>
                </div>
                <div className="addItem">
                    <div className="itemBox">
                        <h2>Stickyを作成</h2>
                        <textarea 
                            className="addTextarea" 
                            placeholder="アイディアを追加" 
                            maxLength={150}
                            onChange={
                                (e) => {
                                    setStickyText(e.target.value);
                                }
                            } 
                            ref={textareaRef}
                        />
                        <p>{ stickyText.length } / 150</p>
                        <button className="addBtn" onClick={addFunction} disabled={btnCount}>新規作成</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add;