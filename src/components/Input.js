import React from "react";

export default function Value(props) {
    return (
        <input type="text" value={props.value} readOnly />
    )
}