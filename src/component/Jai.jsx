import React from 'react'
import "./componentcss/Jai.css"                                           // import [link] the css file

//function component
export function Jai(props) {
  const obj1 = {
    id: '078',
    tech: 'Mern'
  }
  return (
    <div>
      {/* <Car humanoid='terminator'/> */}
      <h1>hello {props.name}</h1>
      <p>learn reactjs as soon as possible</p>
      <p>complete tech is {obj1.tech} stack.</p>
    </div>
  )
}

//class component
export class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: 'john',
      lname: 'conner'
    }
  }
  render() {
    // let humanoid = 'terminator';
    return (
      <>
        <h1>{this.props.humanoid},In cybernatics era</h1>
        <h3>{this.state.names + this.state.lname} is a last warrior.</h3>
      </>
    );
  }
}

//set default props values
Car.defaultProps = {
  humanoid: 'terminator'
}
