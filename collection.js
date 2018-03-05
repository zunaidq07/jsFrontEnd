 function addToList(id,movieName,listName){
	for(i=0;i<list.length;i++){

		if(list[i].title == listName){

			list[i].movies.push(movieName);
			}

	}

	$(`#cid${id}`).html("Added...");
}




function collectionList(str){
	// var lists = document.getElementById('lists');
	var htmlString = `<ul>`;
	if(list.length != 0){
		htmlString += `<li><button type="button" class="btn btn-primary" data-toggle="modal" 
		data-target="#myModal2" data-dismiss="modal">Create New Watchlist</button></li>`;
	for(i=0;i<list.length;i++){
		htmlString += `<li><button type="button" id="cid${i}" class="btn btn-primary"
		onclick="addToList('${i}','${str}','${list[i].title}')">add to ${list[i].title}</button></li>`;
	}
}
	

	if(list.length === 0){
		console.log(str);
		htmlString += `<p>you have not created any watchlist</p>`;
		htmlString += `<button type="button" class="btn btn-primary" data-toggle="modal" 
		data-target="#myModal2" data-dismiss="modal">Create New Watchlist</button>`;
		
	}
	htmlString += `</ul>`;

	
	$("#lists").html(htmlString);
}

function addNewList(str){
	var newWatchlist = $("#newWatchList").val();
	
	console.log(str);

	$("#hideModal").html("<p>Watchlist Created</p>");
	count++;
	var dict = {};

	dict["id"] = count;
	dict["title"] = newWatchlist;
	dict["movies"] = [];

	list.push(dict);

}
function view(){
	

	var htmlString = `<label>Enter Name of Your collection:</label>

    				  <input type="text" id="newWatchList"/>

    				  <button id="newCollectionbtn" type="button" 
    				  class="btn btn-default" onclick="addNewList()">Submit</button>`


    $("#hideModal").html(htmlString);
   
}
function displayList(){
	console.log("name of list is here");
	
	var totalLists = `<ol>`;
	for(i=0;i<list.length;i++){
		 totalLists += `<li><button type="button" class="btn btn-danger" data-toggle="modal" 
		data-target="#myModal4" data-dismiss="modal" onclick="displayCollection('${i}')">${list[i].title}</button></li>`;
	}
	totalLists += `</li>`;
	$("#show").html(totalLists);
	

}

function displayCollection(n){
	
	var movieList = `<table class="table table-dark" id="tbUser">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Movie</th>
      <th></th>
    </tr>
  </thead>
  <tbody>`;
	for(i=0;i<list[n].movies.length;i++){

		console.log("hello");
		movieList += `<tr>
      <td>${i+1}</td>
      <td>${list[n].movies[i]}</td>
      <td><button onclick="removeMovie('${i}','${n}')">Remove</button></td>
    </tr>`;
      
	} 
	movieList += `</tbody>
</table>`;
	$("#showMovies").html(movieList);
	
}






















