import React from 'react';

class Fourth extends React.Component {
    constructor(props, named, lnamed) {
        super(props);
        this.state = {
            name: 'jai',
            mname: 'prakash',
            lname: 'nagar',
            id: 7
        };

    }

    changeId = () => {
        this.setState({ name:'jay',
        mname:'prakash',
        lname:'dhakad',
        id: 10 })
    }

    render() {
        return (
            <>
                <h2>Hello {this.props.title}</h2>
                <p onClick={this.changeId}>this is {this.state.name} {this.state.mname} {this.state.lname}. Id is {this.state.id}</p> 
            </>
        )
    }
}

export { Fourth };