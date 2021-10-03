import React from "react";
import './button.css';
Button.defaultProps = {
    cls: ''
};
export default function Button(props) {

    return (
        <div className={"button noselect " + props.cls}>
            <button onClick={props.onClick} >
                {props.children}
            </button>
        </div>
    )
}