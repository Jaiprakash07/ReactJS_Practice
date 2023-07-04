import React from 'react';

function Nopage() {
    const stylee = {
        height: '700px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: "url('https://cdn.pixabay.com/photo/2021/02/26/16/29/error-404-6052476_960_720.png')",
        backgroundRepeat: 'repeat',
        backgroundPosition: 'left'
    }

    return (
        <>
            <div class='stt' style={stylee}>
                <h2 >404 Not Found</h2>
                <p>Sorry, an unexpected error has occurred.</p>
            </div>
        </>
    )
}

export { Nopage };              