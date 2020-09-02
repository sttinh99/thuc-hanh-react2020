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

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  async componentDidMount() {
    await axios
      .get("https://0d0se.sse.codesandbox.io/products")
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
            <Col sm="3" key={index}>
              <Card>
                <CardImg top width="100%" src={products.imageUrl} />
                <CardBody>
                  <CardTitle>{products.name}</CardTitle>
                  <CardText>{products.descriptions}</CardText>
                  <Button>Add to card</Button>
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
