import React, { Component } from 'react'

class GreetUser extends Component {
  constructor(){
    super();
    this.state = { name: "", greet: "Hello" }
  }
  render() {
    return (
        <div>
           <label>Enter the name</label><br/>
           <input type='text' onChange={(event)=> {
            this.setState({name:event.target.value})
           }}/>
           <h1>{this.state.name}</h1>
           <h1>{this.state.greet}</h1>
           <button onClick={()=>this.setState({greet:this.state.name})}> Click </button><br/>
        </div>
    )
  }
}
export default GreetUser;
