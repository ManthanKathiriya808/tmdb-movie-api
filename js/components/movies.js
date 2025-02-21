

let showMovies_id =document.getElementById("showMovies")



export async function getMovies(api){    
   const res = await fetch(api)
   const data = await res.json()
   return data
}




export function showMovies(data){

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
                  <a href="#" class="btn btn-primary vd">View Details</a>
                </div>
              </div>
        </div>
        `
    })


    let vds = showMovies_id.querySelectorAll(".vd")
    vds.forEach((vd, index)=>{
        vd.addEventListener("click", function(){
            localStorage.setItem("mov_id", JSON.stringify(data.results[index].id));
            location.href =""
        })
    })

    
    // showPagination(data)

}