import collectionList from './collection.js';
export default function renderHTML(data){
	console.log('data inside renderHTML', data);
	var result = "";
	for(let i=0;i<data.length;i+=1){
		result+=`<div class="row">
					<div class="col-sm-3">
					
					<div class="card" style="width: 18rem;height:420px;padding:30px;">
  						<img src="https://image.tmdb.org/t/p/w500/${data[i].poster_path}" height="200px">
						  <div class="card-body">
						    <h5 class="card-title" >${data[i].title}</h5>
    							<p class="card-text">${data[i].release_date}</p>
    							<button type="button" data-toggle="modal" id="${data[i].title}" name="${data[i].title}" data-target="#myModal"
    							  class="btn btn-primary">Add to MyCollection
    							 </button>
						  </div>
						 </div>
				</div>
			</div>`;

			}	
	$("#movieContainer").html(result);


	for(let i=0;i<data.length;i++){
		let addToMyCollection = document.getElementById(data[i].title);
		addToMyCollection.onclick = function(){
			console.log(data[i].title);
			collectionList(data[i].title);
		}
		// $("button").click(function(){
		// 	var x = $(this).attr("name");
		// 	collectionList(x);
		// 	console.log("hello u r here!")
		// });
	}
}
