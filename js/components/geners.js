let showGenres_id =document.getElementById("showGenres")













export function showGenres(data, genarr, changeGenres )
{
    showGenres_id.innerHTML = "";

    data.genres.map((ele) => {
        showGenres_id.innerHTML +=
         `
         <div class="col"><button class="btn ${genarr.includes(ele.id) ?`btn-warning ` : `btn-outline-warning`}"  >${ele.name}</button></div>
         `
    })


    let btns = showGenres_id.querySelectorAll("button")

   btns.forEach((ele, index) => {
    ele.addEventListener("click" , ()=>{
        changeGenres(data.genres[index].id, genarr)
    })
   })

 
}

export function changeGenres(id, genarr){


    console.log(id)

    if(genarr.includes(id)){
        genarr.splice(genarr.indexOf(id) , 1)
    }
    else{
        genarr.push(id)
    }

    localStorage.setItem("genarr",JSON.stringify(genarr))

    location.reload()
    
}





    
// }

