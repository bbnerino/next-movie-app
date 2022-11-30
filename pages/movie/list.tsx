import React, { useEffect } from "react";

const MovieList = () => {
  useEffect(() => {
    console.log(process.env);
  }, []);
  return <div>MovieList</div>;
};

export default MovieList;
