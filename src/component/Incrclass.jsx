import React from "react";

class Incr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    updateCount = () => {                          // normal function doesn't work why?work only arrow func
        this.setState({count: this.state.count + 1})
    }

    render() {
        return (
            <>
            <h2>State change by Class component</h2>
            <h2>{this.state.count}</h2>
            <button onClick={this.updateCount}>Counting</button>
            </>
        )
    }
}

export {Incr};