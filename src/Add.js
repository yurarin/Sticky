import React, { useState } from "react";
import "./styles/Add.css";

const Add = () => {
    const [stickyText, setStickyText] = useState("");

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
                        />
                        <p>{ stickyText.length } / 150</p>
                        <button className="addBtn">新規作成</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add;