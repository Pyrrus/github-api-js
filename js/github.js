var apiKey = require('./../.env').apiKey;

function Github() {
	
}

Github.prototype.getUser = function(userName) {
	var user = 'https://api.github.com/users/'+userName + '?access_token=' + apiKey;
	$.get(user).then(function(response) { 
		console.log(response);
	});
    
};

Github.prototype.getRepos = function(userName) {
	var userRepos  = 'https://api.github.com/users/'+userName+'/repos?access_token=' + apiKey;
	$.get(userRepos).then(function(response) { 
		console.log(response);
	});
}

exports.githubModule = Github;