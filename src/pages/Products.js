import React, { Component } from "react";
import axios from "axios";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

import { CartContext } from "../contexts/Cart";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  async componentDidMount() {
    await axios
      .get("https://3i7ib.sse.codesandbox.io/products")
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  render() {
    const { products } = this.state;
    return (
      <Container>
        <h2>Products</h2>
        <Row>
          {products.map((products, index) => (
            <Col sm="4" key={index}>
              <Card>
                <CardImg top width="100%" src={products.imageUrl} />
                <CardBody>
                  <CardTitle>{products.name}</CardTitle>
                  <CardText>{products.descriptions}</CardText>
                  <CartContext.Consumer>
                    {({ addToCart }) => (
                      <Button onClick={() => addToCart(products)}>
                        Add to card
                      </Button>
                    )}
                  </CartContext.Consumer>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default Products;
