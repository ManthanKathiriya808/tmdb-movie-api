
let pagination_id =document.getElementById("pagination")



 export function showPagination(data){
    pagination_id.innerHTML = ""
    pagination_id.innerHTML = `
        <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" id="changePprev" >Previous</a></li>
    <li class="page-item"><a class="page-link" >${data.page}</a></li>
    
    <li class="page-item"><a class="page-link" id="changePnext" >Next</a></li>
  </ul>
</nav>
    `


    let changePnext = document.getElementById("changePnext")

   let changePprev = document.getElementById("changePprev")

    const chaning = ()=>{
        localStorage.setItem("page", JSON.stringify(data.page+1))
        location.reload();
  }

  const prevChanging = ()=> {
     localStorage.setItem("page",JSON.stringify(data.page-1))
     location.reload();
  }

  changePprev.onclick = prevChanging;
//   changePprev.onclick = console.log(Number(chaning.value));
  changePnext.onclick = chaning;


}

