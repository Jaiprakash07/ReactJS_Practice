import React from "react";

export function Dates() {
    const date = new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString()
    // console.log(time);
    return (
        <>
        <h2>Showing Date</h2>
        <p>Today date is = {date}</p>
        <p>Current time is = {time}</p>
        </>
    );
}
