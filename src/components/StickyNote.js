import React from "react";
import "../styles/StickyNote.css";

const StickyNote = (props) => {
    return (
        <div className="sticky">
            <div className="inStickyItem">
                <p>{ props.text }</p>
            </div>
        </div>
    )
};

export default StickyNote;