import React, { Component } from 'react'

export default class Calc extends Component {
  constructor(){
    super();
    this.state = {num1 :"", num2 :"", result :""}
  }
  handleNum1 = (event) =>{
    this.setState({num1:event.target.value}
    )
    // event.preventDefault();
  }
  handleNum2 = (event) =>{
    this.setState({num2:event.target.value}
    )
  }
   add = () =>{
    this.setState({result :parseInt(this.state.num1) + parseInt(this.state.num2)})

  }
   sub = () =>{
    this.setState({result :parseInt(this.state.num1) - parseInt(this.state.num2)})

  }
   mul = () =>{
    this.setState({result :parseInt(this.state.num1) * parseInt(this.state.num2)})

  }
   div = () =>{
    this.setState({result :parseInt(this.state.num1) % parseInt(this.state.num2)})

  }
  render() {
    return (
        <div>
        <label>Enter first no.</label><input type='text' value={this.state.num1} onChange={this.handleNum1}/><br/>
        <label>Enter second no.</label><input type='text' value={this.state.num2} onChange={this.handleNum2}/><br/>
        <button onClick={()=>{this.add()}}>ADD</button>
        <button onClick={()=>{this.sub()}}>SUB</button>
        <button onClick={()=>{this.mul()}}>MUL</button>
        <button onClick={()=>{this.div()}}>DIV</button>
        <h1>{this.state.result}</h1>
    </div>

    )
  }
}
