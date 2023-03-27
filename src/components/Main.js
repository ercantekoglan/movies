import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setsearchQuery] = useState("");
  useEffect(() => {
    const myMovies = [
      {
        id: 1,
        name: "The Flash",
        rating: 8.3,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg",
      },

      {
        id: 2,
        name: "Interstellar",
        rating: 6.8,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      },

      {
        id: 3,
        name: "Arrow",
        rating: 7.9,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg",
      },
      {
        id: 4,
        name: "Rogue",
        rating: 7.4,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
      },

      {
        id: 5,
        name: "Project Power",
        rating: 6.7,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/TnOeov4w0sTtV2gqICqIxVi74V.jpg",
      },

      {
        id: 6,
        name: "Superman",
        rating: 7.6,
        overview:
          "This is a wider card with supporting text below as a natural lead-in to additional content.",
        imageURL:
          "https://image.tmdb.org/t/p/w220_and_h330_face/6Bbq8qQWpoApLZYWFFAuZ1r2gFw.jpg",
      },
    ];

    setMovies(myMovies);
  }, []);

  const deleteMovie = (movie) => {
    const newMovieList = movies.filter((mov) => mov.id !== movie.id);
    setMovies(newMovieList);
  };

  function searchMovie(value) {
    setsearchQuery(value);
  }

  let filteredMovies = movies.filter((movie) => {
    return movie.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
  });
  return (
    <Container>
      <Row>
        <Col sm={11}>
          <SearchBar searchMovieProp={searchMovie} searchQuery={searchQuery} />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <MovieList
            propmovies={filteredMovies}
            deleteMovieProp={deleteMovie}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
