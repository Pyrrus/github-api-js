var Github = require("./../js/github.js").githubModule;

$(document).ready(function() {

  var github = new Github();

  $('#find').click(function() {
  	$('#content').html('');
  	var found = true;
  	var userName = $('#userName').val();
  	$("#loader").show();
  	github.getUser(userName, function(data) {
  		console.log(data);
	  	if (data.message === "Not Found" || userName === '') {
	  		found = false;
	  		$('#content').html("<h1>Not found any user :(</h1>");
	  	} else {
	  		
	  		var email = "<h3>" + data.email + "</h3>";
	  		var followers = "<h3>Followers: " + data.followers + "</h3>";
	  		var following =  "<h3>Following: " + data.following + "</h3>";
	  		var login = "<h2>Username: " + data.login + "</h2>";
	  		var location = "<h3>Location: " + data.location + "</h3>";
	  		var public_repos = "<h3>Public repos: " + data.public_repos + "</h3>"; 
	  		var updated_at = "<h3>Last update: " + data.updated_at + "</h3>";
	  		var image = "<img src='" + data.avatar_url + "' alt='" + data.name + "' class='img-responsive' />";
	  		var madeAt = "<h3>Created at: " + data.created_at + "</h3>";

	  		if (data.name === undefined) {
	  		  var name = "<h1>Name: " + data.login + "</h1>";
	  		} else {
	  		  var name = "<h1>Name: " + data.name + "</h1>";
	  		}

	  		$('#content').append("<div class='row'>");
	  		  $('#content').append("<div class='col-md-6' class='box'>" + image + "</div>");
	  		  $('#content').append("<div class='col-md-6' class='box'>" + name + login + email + location + followers + following + public_repos + updated_at + madeAt + "</div>");
	  		$('#content').append("</div>"); // end the first row

	  		$('#content').append("<div class='row'>");
	  		  $('#content').append("<div class='col-md-12' class='box'>" + image + "</div>");
	  		$('#content').append("</div>"); // end the row
	  	}

	  	//github.getRepos(userName);

	  	$('#content').show();
	  	$("#loader").hide();
  	});
	

  });

});

