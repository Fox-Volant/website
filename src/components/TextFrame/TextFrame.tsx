import React from "react";
import * as styles from "./TextFrame.module.scss";

const TextFrame = (props) => {
    return (
        <div
            className={`${styles.textframe || ""} ${
                props.className || ""
            } bg-white shadow`}
        >
            {props.children}
        </div>
    );
};

export default TextFrame;
