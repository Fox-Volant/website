import React from "react";
import * as styles from "./TextFrame.module.scss";

const TextFrame = (props) => {
    return (
        <div
            className={`${styles.textframe || ""} ${
                props.className || ""
            } p-4 bg-white shadow rounded`}>
            {props.children}
        </div>
    );
};

export default TextFrame;
