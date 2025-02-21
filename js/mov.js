import { getMovies } from "./components/movies.js";

let api_key = `?api_key=2254f6a103ea45b2d2965212918395da`
let show_movies = document.getElementById("movies")
let mov_id = JSON.parse(localStorage.getItem("mov_id"))
let vid_url = `https://api.themoviedb.org/3/movie/${mov_id}${api_key}&append_to_response=videos,credits,reviews,images`



const mov = await getMovies(vid_url);

console.log(mov)

showData(mov)
function showData(data){
    show_movies.innerHTML = ""

   
    show_movies.innerHTML +=`
    <div class="col ">
            <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="">
         
        </div>
    <div class="col d-flex flex-column h-100 my-auto p-5  ">
            <h1>Title: ${data.title}</h1>
            <h4>Overviews 👉🏻: ${data.overview}</h4>
            <h4>Genres 👉🏻: ${data.genres.map((ele) => ele.name )}</h4>
        </div>
`

}