import React from "react";

export default function Image(props) {
    return (
    <div>
        <img src={props.image} className="meme--image" />
    </div>);
}