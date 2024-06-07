import React from "react";
import { TakingNotes, Login } from "./assets/index";
import "./styles/Hello.css";
import { Link } from "react-router-dom";

const Hello = () => {
    return (
        <>
            <div className="helloView">
                <div className="helloItem">
                    <img src={TakingNotes} alt="img" />
                </div>
                <div className="helloItem">
                    <h1>Hello, Sticky!</h1>
                    <p><span>アイディアが浮かんだ</span><span>瞬間をそのままに</span></p>
                </div>

            </div>
            <hr />
            <div className="helloMenuView">
                <div className="helloMenuItem">
                    <h2><span>さあ、</span><span>はじめよう。</span></h2>
                    <p><span>クリエイティブを</span><span>もっと簡単に</span><span>管理しよう</span></p>
                </div>
                <div className="helloMenuItem">
                    <Link to="/login">
                        <img src={Login} alt="img" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Hello;