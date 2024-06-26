import React from "react";

const Greetings = (props) => {
    return (
        <>
            <h2>{props.text}</h2>
            <h3>{props.number}</h3>
        </>
    )
}

export default Greetings;