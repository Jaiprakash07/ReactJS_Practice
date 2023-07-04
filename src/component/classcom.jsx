import React from 'react';

class Bio extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <>
            <h2>{this.props.title}-Component</h2>
            <p>this class component used props.</p>
            </>
        )
    }
}

export {Bio};