import React from "react";

function Pro2(props) {
    return (
        <>
            <div className="container mb-3 text-bg-primary p-2">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.occu}</p>
                        <a href="javascript.void(0)" className="btn btn-primary">{props.code}</a>
                    </div>
                </div>
            </div>
        </>
    )
}


function Heading() {
    return (
        <>
            <h2>Creating Cards using Map() method</h2>
        </>
    )
}

export { Pro2, Heading };
