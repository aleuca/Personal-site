let root = 'https://jsonplaceholder.typicode.com';

// $.ajax({
//     url: root + '/posts/1',
//     method: 'GET'
// }).then(function(data) {
//     $("h1").html(data.title)
//     console.log(data);
// });

$.get("https://pokeapi.co/api/v2/pokemon/1/")
.then(function(data) {
        console.log(data.forms[0].name)
    })

// $.ajax({
// 	url: "https://swapi.co/api/people/1",
// 	method: 'GET'		})
// .then(function(data) {
// 		console.log(data)
// 	})