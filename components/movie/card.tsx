import React from "react";
import styled from "styled-components";
import { Movie } from "../../@types/movie";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Wrapper>
      <div className="title">
        <span>제목 : </span>
        <span >{movie.title}</span>
      </div>
      <div>
        <span>평점 : </span>
        <span>{movie.vote_average}</span>
      </div>
      <div>
        <span> id: </span>
        <span>{movie.id}</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 20px;
  .title{
    font-size: 2em;
  }
`;

export default MovieCard;
