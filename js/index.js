
let showMovies_id =document.getElementById("showMovies")
let pagination_id =document.getElementById("pagination")
let showGenres_id =document.getElementById("showGenres")

let api_key = `?api_key=2254f6a103ea45b2d2965212918395da`
let b_url = `https://api.themoviedb.org/3/`
let end_point = `discover/movie`
let img_endPoint = `https://image.tmdb.org/t/p/w500/`
let url = `https://api.themoviedb.org/3/discover/movie?api_key=2254f6a103ea45b2d2965212918395da`

let genarr = JSON.parse(localStorage.getItem("genarr")) || []

let genre_end_point = `genre/movie/list`;
let genre_api_url = b_url+genre_end_point+api_key;


let page =1
let api_url = b_url+end_point+api_key+`&page=`+page+`&with_genres=${genarr.join(",")}`

getMovies(genre_api_url)
getMovies(api_url)
showPagination(data)

function getMovies(api){
    
    fetch(api)
    .then((res) => res.json())
    .then((data) =>{

        if(data.genres){
            // console.log(data)
            showGenres(data)
            showPagination(data)
            // changeGenres(data.id)
        }

        else if(data.results){
        showMovies(data)
        showPagination(data)
        }
        // console.log(data)
    
        else{
            console.log("this is for lang")
        }
    })
}


function changeGenres(id){


    if(genarr.includes(id)){
        genarr.splice(genarr.indexOf(id) , 1)
    }
    else{
        genarr.push(id)
    }

    localStorage.setItem("genarr",JSON.stringify(genarr))

    console.log(genarr)

    let genres_movei_api_url = b_url+end_point+api_key+`&page=`+page+`&with_genres=`+genarr.join("|")

    getMovies(genre_api_url)
    getMovies(genres_movei_api_url);
}

function changePage(page_changed){
    console.log(page_changed)
    let api_url_1 = b_url+end_point+api_key+`&page=`+page_changed
    getMovies(api_url_1);
}


function showMovies(data){

    showMovies_id.innerHTML = ""

    data.results.map((ele) => {

        showMovies_id.innerHTML += `
           <div class="col-2 ">
            <div class="card h-100 p-3" >
                <img src="https://image.tmdb.org/t/p/w500${ele.poster_path}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${ele.original_name
                     || ele.original_title}</h5>
                  <p class="card-text">${ele.release_date
                  }</p>
                  <a href="#" class="btn btn-primary">View Details</a>
                </div>
              </div>
        </div>
        `
    })

    getMovies(genre_api_url)


}


function showPagination(data){
    pagination_id.innerHTML = ""
    pagination_id.innerHTML = `
        <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" onclick="changePage(${data.page-1})">Previous</a></li>
    <li class="page-item"><a class="page-link" >${data.page}</a></li>
    
    <li class="page-item"><a class="page-link" onclick="changePage(${data.page+1})" >Next</a></li>
  </ul>
</nav>
    `
}

function showGenres(data)
{
    showGenres_id.innerHTML = "";

    data.genres.map((ele) => {
        showGenres_id.innerHTML +=
         `
         <div class="col"><button class="btn ${genarr.includes(ele.id) ?`btn-warning ` : `btn-outline-warning`}" onclick="changeGenres(${ele.id})">${ele.name}</button></div>
         `
    })

    
}

