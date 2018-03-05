function renderHTML(data){
	console.log('data inside renderHTML', data);
	var result = "";
	for(var i=0;i<data.length;i+=1){
		result+=`<div class="row">
					<div class="col-sm-3">
					
					<div class="card" style="width: 18rem;">
  						<img src="https://image.tmdb.org/t/p/w500/${data[i].poster_path}" height="200px">
						  <div class="card-body">
						    <h5 class="card-title" >${data[i].title}</h5>
    							<p class="card-text">${data[i].release_date}</p>
    							<button type="button" data-toggle="modal" id="${data[i].title}" data-target="#myModal" onclick="collectionList('${data[i].title}')" class="btn btn-primary">Add to MyCollection</button>
						  </div>
						 </div>
				</div>
			</div>`
			}	
	movieContainer.innerHTML = result;
}
