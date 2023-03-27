import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

const MovieList = (props) => {
  return (
    <Container>
      <Row style={{ width: "95%" }}>
        {props.propmovies.map((movie) => (
          <Col sm={4} key={movie.id}>
            <Card style={{ marginTop: "5%" }}>
              <Card.Img variant="top" src={movie.imageURL} />
              <Card.Body>
                <Card.Title>{movie.name}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <Button
                    variant="btn btn-md btn-outline-danger"
                    onClick={() => props.deleteMovieProp(movie)}
                  >
                    Delete
                  </Button>
                  <h3>
                    <Badge bg="warning">{movie.rating}</Badge>
                  </h3>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieList;
