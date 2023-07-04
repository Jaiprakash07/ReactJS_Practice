import React from "react";
import {  useNavigate, NavLink, Outlet } from "react-router-dom";



function About() {
    const navv = useNavigate();
    // const loc = useLocation();
    const home = () => {
        navv('/Login')
        // console.log(loc.state.id)
    }
    // console.log(useLocation());
    // console.log(useNavigate());
    // console.log(useHref())
    return (
        <>
            <div>
                <h2>About</h2>
                {/* <h3>Data comes from contact page by usenavigate hook and get thr useLocation {loc.state.id}</h3> */}
                <button onClick={() => home()}>Go to Login Page</button>
                {/* <h2>hii</h2> */}
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/About/Userparams/jai/prakash'>User jai</NavLink>
                        </li>
                        <li>
                            <NavLink to='/About/Userparams/ajay/malviya'>User ajay</NavLink>
                        </li>
                        <li>
                            <NavLink to='/About/Usersearchparams'>Usersearchparams</NavLink>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </>
    )
}

export { About };