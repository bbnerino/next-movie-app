export interface Movie{
  title:string
  adult : boolean
  poster_path:string
  backdrop_path:string
  genre_ids:number[]
  id:number
  original_language:string
  original_title:string
  overview:string
  popularity:number
  release_date:string
  video:boolean
  vote_average:number
  vote_count:number
}