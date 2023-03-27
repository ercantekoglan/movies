import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
  return (
    <Container>
      <Row style={{ marginTop: "7%" }}>
        <Col md={10}>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                onChange={(e) => props.searchMovieProp(e.target.value)}
                value={props.searchQuery}
                placeholder="Search movie..."
              />
            </Form.Group>
          </Form>
        </Col>
        <Col md={2}>
          <Link
            to="/add"
            type="button"
            className="btn btn-md btn-danger"
            style={{ float: "right" }}
          >
            Add Movie
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
