import { Component, React} from "react";

class MyComponent extends Component {
    constructor() {
        super();
        this.state = { name: "sonu", city: "bangaluru"}

    }
    render() {
        return(
            <div>
                <h1>This is amazing {this.state.name}</h1>
                <h2>that all students are present at {this.state.city} </h2>
                <button onClick={()=> this.setState({name: "sarita", city: "mumbai"})}>Click here</button>
            </div>
        )
    }
}
export default MyComponent;