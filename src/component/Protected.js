import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
    const { Component } = props;
    // const Hom = props.Component;
    const navigat = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem('login');
        if (!login) {
            navigat('/Login')
        }
        // console.log(login)
    })
    return (
        <>
        <div>
            <Component />
            {/* <Hom /> */}
        </div>
        </>
    )
}

export { Protected };