// $(document).ready(function() {

// 	$("#tbUser").on('click','.removeBtn',function () {
//     $(this).closest('tr').remove();
//     alert("delete function called");

// });
// 	});

function removeMovie(k,n){
	
var x = document.getElementById('showMovies');

var movieList = `<table class="table table-dark" id="tbUser">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Movie</th>
      </tr>
  </thead>
  <tbody>`;
  list[n].movies.splice(k,1);
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
	x.innerHTML = movieList ;
}