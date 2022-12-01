import React, { useEffect, useState } from "react";
import { Movie } from "../../@types/movie";
import MovieCard from "../../components/movie/card";
import { getMovies } from "../../helpers/movie";

interface Props {
  movies: Movie[];
}

const MovieList = ({ movies }: Props) => {
  if (movies) {
    if (movies.length > 0)
      return (
        <div>
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      );
    else {
      return <div>목록이 없습니다.</div>;
    }
  } else {
    return <div>데이터가 없습니다.</div>;
  }
};
export default MovieList;

export const getStaticProps = async () => {
  let movies: Movie[] = [];
  await getMovies().then((res) => {
    movies = res.results;
  });
  return {
    props: {
      movies: movies,
    },
  };
};
