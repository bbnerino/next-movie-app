export const api_key = "8c060ba9a7cd2b8cbddbebf2d3d0cb8a";
const page = 1;
let a =
  "https://api.themoviedb.org/3/movie/popular?api_key=8c060ba9a7cd2b8cbddbebf2d3d0cb8a";

export const getMovies = async () => {
  const getListApi = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=ko-KR&page=${page}`;
  const response = await fetch(getListApi, { method: "GET" })
  const data = await response.json()

  return(data)
};
