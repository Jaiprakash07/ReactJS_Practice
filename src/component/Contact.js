import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {

    const navigate = useNavigate();
    const num = 42;

    const about = () => {
        // console.log(navigate)
        // navigate(-1)
        navigate('/About', { state: { id: num } })
    }

    return (
        <>
            <h2>Contact</h2>
            <button onClick={() => about()}>Go to About Page</button>
        </>
    )
}

export { Contact };