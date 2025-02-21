



import { getMovies,showMovies } from "./components/movies.js"
import { showGenres, changeGenres } from "./components/geners.js"
import { showPagination } from "./components/pagination.js"

let page = JSON.parse(localStorage.getItem("page")) || 1;

let api_key = `?api_key=2254f6a103ea45b2d2965212918395da`
let b_url = `https://api.themoviedb.org/3/`
let end_point = `discover/movie`
let img_endPoint = `https://image.tmdb.org/t/p/w500/`
let url = `https://api.themoviedb.org/3/discover/movie?api_key=2254f6a103ea45b2d2965212918395da`

let genarr = JSON.parse(localStorage.getItem("genarr")) || []

let genre_end_point = `genre/movie/list`;
let genre_api_url = b_url+genre_end_point+api_key;

let api_url = b_url+end_point+api_key+`&page=`+page+`&with_genres=${genarr.join(",")}&append_to_response=videos`


// =========== all movies start=================

const allMovies = await getMovies(api_url)
showMovies(allMovies)

//=========================   all movies end=========================





//==================  geners list start=================

const gener_list = await getMovies(genre_api_url)
showGenres(gener_list, genarr, changeGenres)


// ================== geners list end===================






//==================  pagination list start=================

showPagination(allMovies)


// ================== pagination list end===================







    









