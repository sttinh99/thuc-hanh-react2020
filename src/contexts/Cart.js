import React, { Component } from "react";

export const CartContext = React.createContext();

export class CartProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItem: []
    };
    this.addToCart = this.addToCart.bind(this);
  }
  addToCart(product) {
    console.log("Add to cart", product);
    this.setState({ cartItem: this.state.cartItem.concat(product) });
  }
  render() {
    return (
      <div>
        <CartContext.Provider
          value={{
            CartItem: this.state.cartItem,
            addToCart: this.addToCart
          }}
        >
          {this.props.children}
        </CartContext.Provider>
      </div>
    );
  }
}
