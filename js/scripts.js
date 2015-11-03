
var movieSearch = "";

$(document).ready(function() {

	$('#movie-search-form').submit(function() {
		var mediaType = $('#search-filter').val();
	 	
		var movieName = $('#movieInput').val();
	if(mediaType == 'one'){


		//build url for search query from users input:
		// var searchUrl = "http://api.themoviedb.org/3/search/movie" + "?query=" + movieName + "&api_key=" + apiKey;
		var searchUrl = "http://api.themoviedb.org/3/search/movie" + "?query=" + movieName + "&api_key=" + apiKey;
		$.getJSON(searchUrl, function(data){
			
			var movieSearchArray = data.results;
			var x = 0;
			var html = "";

			for (i = 0; i < movieSearchArray.length; i++) {
				
				x++;

					var title = movieSearchArray[i].title;
					var overview = movieSearchArray[i].overview;
					var posterPath = movieSearchArray[i].poster_path;

					var title = movieSearchArray[i].title;
					console.log(movieSearchArray);

				if(i==0){
						html += '<div class="movie-row">';
					}

					if(x==5){
						html += '</div>';
						html += '<div class="movie-row">';
						x=1;
					}
					html += '<div class="now-playing-movie">';
					html += '<img title="'+overview+'" alt="'+title+'" src="'+basePath+'w300'+posterPath+'">';
					html += '</div>';
					
					if(i == (movieSearchArray.length-1)){
						html += '</html>';
						$('#now-playing-wrapper').empty();
						$(html).appendTo('#now-playing-wrapper');
					}

			}
			
		});
		
		
		}else if((mediaType == 'two') || (mediaType == "four")){
			var person = $('#movieInput').val();
			//build url for search query from users input:
			// var searchUrl = "http://api.themoviedb.org/3/search/movie" + "?query=" + movieName + "&api_key=" + apiKey;
			var searchUrl = "http://api.themoviedb.org/3/search/person" + "?query=" + person + "&api_key=" + apiKey;
			$.getJSON(searchUrl, function(data){
				
				var personSearchArray = data.results;
				var x = 0;
				var html = "";

				for (i = 0; i < personSearchArray.length; i++) {
					
					x++;

						var personName = personSearchArray[i].name;
						var personId = personSearchArray[i].id;
						var profilePath = personSearchArray[i].profile_path;
						var knownFor = personSearchArray[i].known_for.title;

						console.log(personSearchArray);

					if(i==0){
							html += '<div class="movie-row">';
						}

						if(x==5){
							html += '</div>';
							html += '<div class="movie-row">';
							x=1;
						}
						html += '<div class="now-playing-movie">';
						html += '<img title="'+person+'" alt="VIP" src="'+basePath+'w300'+profilePath+'">';
						html += '</div>';
						
						if(i == (personSearchArray.length-1)){
							html += '</html>';
							$('#now-playing-wrapper').empty();
							$(html).appendTo('#now-playing-wrapper');
						}

				}		
			});
		}else if(mediaType == 'three'){
			//build url for search query from users input:
			// var searchUrl = "http://api.themoviedb.org/3/search/movie" + "?query=" + movieName + "&api_key=" + apiKey;
			var tvSearch = "";
			var tvName = $('#movieInput').val();			
			var searchUrl = "http://api.themoviedb.org/3/search/tv" + "?query=" + tvName + "&api_key=" + apiKey;
			console.log(searchUrl);
			$.getJSON(searchUrl, function(data){
				
				var tvSearchArray = data.results;
				var x = 0;
				var html = "";

				for (i = 0; i < tvSearchArray.length; i++) {
					
					x++;

						var title = tvSearchArray[i].name;
						var overview = tvSearchArray[i].overview;
						var posterPath = tvSearchArray[i].poster_path;

						console.log(tvSearchArray);

					if(i==0){
						html += '<div class="movie-row">';
					}

					if(x==5){
						html += '</div>';
						html += '<div class="movie-row">';
						x=1;
					}
					html += '<div class="now-playing-movie">';
					html += '<img title="'+overview+'" alt="'+name+'" src="'+basePath+'w300'+posterPath+'">';
					html += '</div>';
						
					if(i == (tvSearchArray.length-1)){
						html += '</html>';
						$('#now-playing-wrapper').empty();
						$(html).appendTo('#now-playing-wrapper');
					}

				}		
			});
		}else if(mediaType == 'five'){
			//User selected "All"
			var allSearch = "";
			var allName = $('#movieInput').val();			
			var searchUrl = "http://api.themoviedb.org/3/search/multi" + "?query=" + tvName + "&api_key=" + apiKey;
			console.log(searchUrl);
			$.getJSON(searchUrl, function(data){
				
				var allSearchArray = data.results;
				var x = 0;
				var html = "";

				for (i = 0; i < allSearchArray.length; i++) {
					//if person
					if(allSearchArray[i].media_type == "person"){
						//WE HAVE A PERSON!!!!
					}else{
						//WE HAVE A MOVIE OR TV SHOW!!
					
					}

				}
			});		
		}



			
		event.preventDefault();
		

	});

});


var url = 'http://api.themoviedb.org/3/';
var apiKey = 'f696832aa47313e20685912e932479af';
var basePath = '';
var sizeOptions = '';
var logo_sizes = '';	
var poster_sizes = '';
var profile_sizes = '';

var siteConfig = 'https://api.themoviedb.org/3/configuration?api_key='+apiKey;

$.getJSON(siteConfig, function(data){
	// console.log(data);
	basePath = data.images.base_url;
	sizeOptions = data.images.poster_sizes;
	//0: "w300" 1: "w780" 2: "w1280" 3: "original"
	posterSize = 'w300';
	logo_sizes = logo_sizes['original'];
	profileSizes = profile_sizes['original'];

	var nowPlaying = 'http://api.themoviedb.org/3/movie/now_playing?api_key='+apiKey;

	$.getJSON(nowPlaying, function(data){
		// console.log(data);
		var html = "";
		var x = 0;
		movieArray = data.results;
		// movieArray = objectArray;
		// for(i=0; i<data.results.length; i++){
		for(i=0; i<movieArray.length; i++){
			x++;
			var isAdult = movieArray[i].adult;
			var backdrop_path = movieArray[i].backdrop_path;
			var genre_ids = movieArray[i].genre_ids;
			var movieId = movieArray[i].id;
			var title = movieArray[i].title;
			var overview = movieArray[i].overview;
			var popularity = movieArray[i].popularity;
			var posterPath = movieArray[i].poster_path;
			var releaseDate = movieArray[i].release_date;
			var voteAverage = movieArray[i].vote_average;
			var voteCount = movieArray[i].vote_count;	

			if(i==0){
				html += '<div class="movie-row">';
			}

			if(x==5){
				html += '</div>';
				html += '<div class="movie-row">';
				x=1;
			}
			html += '<div class="now-playing-movie">';
			html += '<img title="'+overview+'" alt="'+title+'" src="'+basePath+'w300'+posterPath+'">';
			html += '</div>';
			
			if(i == (movieArray.length-1)){
				html += '</html>';
				$(html).appendTo('#now-playing-wrapper');
			}
		}
	}); // End get json - popular movies

});





	



