import React, { Component } from "react";

 class Product extends Component {
    constructor(){
        super();
        this.state ={
            product:[
                {name : "watermelon", price: "1000"}, 
                {name : "melon", price: "4000"}, 
                {name : "car", price: "5000"}, 
                {name : "van", price: "6000"}, 
                {name : "truck", price: "600"}, 
                {name : "house", price: "630"}, 
            ]
        } 
    }

  render() {
    return (
      <div>
        {this.state.product.map(
            (item)=>(
                <h1>{item.name} : {item.price}</h1>
            )
        )}
        </div>
    )
  }
}
export default Product;