 function addToList(id,movieName,listName){
 	var movie = document.getElementById('movieTitle');
 	console.log("addToList");
 	console.log("new movie is:"+ movieName);
	for(i=0;i<list.length;i++){

		if(list[i].title == listName){

			list[i].movies.push(movieName);
			}

	}
	var btn = document.getElementById(`cid${id}`);

	btn.innerHTML = `<p>Added...</p>`;
}



function collectionList(str){
	var lists = document.getElementById('lists');
	// lists.innerHTML = "jhkjSf";
	var htmlString = `<ul>`;
	for(i=0;i<list.length;i++){

		htmlString += `<li><button type="button" class="btn btn-primary" data-toggle="modal" 
		data-target="#myModal2" data-dismiss="modal">Create New Watchlist</button></li>`;
		htmlString += `<li><button type="button" id="cid${i}" class="btn btn-primary"
		 onclick="addToList('${i}','${str}','${list[i].title}')">add to ${list[i].title}</button></li>`;
	}
	

	if(list.length === 0){
		console.log(str);
		htmlString += `<p>you have not created any watchlist</p>`;
		htmlString += `<button type="button" class="btn btn-primary" data-toggle="modal" 
		data-target="#myModal2" data-dismiss="modal">Create New Watchlist</button>`;
	}
	htmlString += `</ul>`;

	lists.innerHTML = htmlString;
}

function addNewList(){
	var newWatchlist = document.getElementById('newWatchList').value;

	var modalBody = document.getElementById('hideModal');

	modalBody.innerHTML = `<p>Watchlist Created</p>`;
	count++;
	var dict = {};

	dict["id"] = count;
	dict["title"] = newWatchlist ;
	dict["movies"] = [];

	list.push(dict);
}
function view(){
	var modal = document.getElementById('hideModal');

	var htmlString = `<label>Enter Name of Your collection:</label>

    				  <input type="text" id="newWatchList"/>

    				  <button id="newCollectionbtn" type="button" 
    				  class="btn btn-default" onclick="addNewList()">Submit</button>`



    modal.innerHTML = htmlString;
}

function displayCollection(){
	var  modal3 = document.getElementById('show');
	var movieList = `<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Movie</th>
    </tr>
  </thead>
  <tbody>`;
	for(i=0;i<list.length;i++){
		movieList += `<tr>
      <td>${i+1}</td>
      <td>${list[i].movies}</td>
    </tr>`;
      
	} 
	movieList += `</tbody>
</table>`;
	modal3.innerHTML = movieList 
}




















