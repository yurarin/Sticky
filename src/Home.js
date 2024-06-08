import React from "react";
import "./styles/Home.css";
import { Add } from "./assets/index";
import { StickyNote } from "./components/index";
import { Link } from "react-router-dom";

const Home= () => {
    return (
        <div className="stickyContainer">
            <div className="stickyItem">
                <Link to="/add">
                    <img src={Add} alt="img" />
                </Link>
            </div>
            <div className="stickyItem">
                <StickyNote text="hello" />
            </div>
            <div className="stickyItem">
                <StickyNote text="hello" />
            </div>
            <div className="stickyItem">
                <StickyNote text="hello" />
            </div>
            <div className="stickyItem">
                <StickyNote text="hello" />
            </div>
            <div className="stickyItem">
                <StickyNote text="hello" />
            </div>
            <div className="stickyItem">
                <StickyNote text="hello" />
            </div>
        </div>
    )
}

export default Home;