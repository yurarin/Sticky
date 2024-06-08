import React from "react";
import "../styles/StickyNote.css";

const StickyNote = (props) => {
    return (
        <div className="sticky">
            <p>{props.text}</p>
        </div>
    )
};

export default StickyNote;