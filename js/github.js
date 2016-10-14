var apiKey = require('./../.env').apiKey;

function Github() {
	
}

Github.prototype.getName = function(userName) {
	var user = 'https://api.github.com/users/'+username + '?access_token=' + apiKey;

	$.get(user).then(function(response) { 
		console.log(response);
	});
    
};

Github.prototype.getRepos = function(username) {
	var userRepos  = 'https://api.github.com/users/'+username+'/repos?access_token=' + apiKey;
	$.get(userRepos).then(function(response) { 
		console.log(response);
	});
}

exports.githubModule = Github;