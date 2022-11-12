import React from "react";

const TextFrame = (props) => {
    return (
        <div
            className={`${
                props.className || ""
            } p-4 bg-white border shadow rounded`}>
            {props.children}
        </div>
    );
};

export default TextFrame;
