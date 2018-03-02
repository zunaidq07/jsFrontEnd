list = [];
count=0;
'use strict'
 const my_key = "b982c5ef8a7545b6ccba6c2434cf582c";
 let movieContainer = document.getElementById('movieContainer');
 document.getElementById('getData').addEventListener('click', getData);
function getData(event){
	event.preventDefault();
	 let userQuery = document.getElementById('userQuery').value;
 	console.log(userQuery);
	fetch('https://api.themoviedb.org/3/search/movie?api_key='+my_key+'&language=en-US&query='+userQuery+'&page=1&include_adult=true')
.then((res) => {
	console.log('this is the response', res);
    return res.json();
})
.then((data) => {
    console.log(data);
     renderHTML(data.results);
    });

	}


