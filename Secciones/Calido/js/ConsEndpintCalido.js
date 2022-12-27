
		async function fetchMoviesJSON() {
				const response = await fetch('https://api.chucknorris.io/jokes/random');
				const jsonResponse = await response.json();
				return jsonResponse;
			}
			fetchMoviesJSON().then(json => {
				console.log(json);
				console.log(json.value);
				document.getElementById("hola").innerHTML = json.value;
			});
