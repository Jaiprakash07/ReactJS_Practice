import React,{ useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navs = useNavigate();
    
    function log() {
        navs('/')
    }

    const login = () => {
        localStorage.setItem('login', true)
        navs('/')
    }

    useEffect(() => {
        let login = localStorage.getItem('login');
        if (!login) {
            navs('/Login')
        }
    })
    return (
        <>
            <div>
                <h2>Login</h2>
                <button onClick={() => log()}>Go to Home Page</button><br/><br/>
                <input type='text' placeholder="JohnDoe" /><br />
                <button onClick={login}>Submit</button>
            </div>
        </>
    )
}

export { Login };