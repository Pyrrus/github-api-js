var Github = require("./../js/github.js").githubModule;

$(document).ready(function() {

  var github = new Github();

  $('#find').click(function() {
  	$('#content').html('');
  	var found = true;
  	var userName = $('#userName').val();
  	$("#loader").show();
  	github.getUser(userName, function(data) {
	  	if (data.message === "Not Found" || userName === '') {
	  		found = false;
	  		$('#content').html("<h1>Not found any user :(</h1>");
	  	} else {
	  		var name = data.name;
	  		var email = data.email;
	  		var followers = data.followers;
	  		var login = data.login;
	  		var location = data.location;
	  		var public_repos = data.public_repos; 
	  		var updated_at = data.updated_at;
	  		var private_repos = data.total_private_repos;

	  		if (name === undefined) {
	  		  name = login;
	  		}

	  		

	  	}

	  	//github.getRepos(userName);

	  	$('#content').show();
	  	$("#loader").hide();
  	});
	

  });

});

