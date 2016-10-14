var Github = require("./../js/github.js").githubModule;

$(document).ready(function() {

  var github = new Github();

  $('#find').click(function() {
  	var userName = $('#userName').val();

  	github.getUser(userName, function(data) {
	  	console.log(data);
  	});

	//github.getRepos(userName);

  });

});

