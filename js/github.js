var apiKey = require('./../.env').apiKey;

function Github() {
	
}

Github.prototype.getName = function(userName) {
	var user   = 'https://api.github.com/users/'+username + '?access_token=' + apiKey;
    
};

Github.prototype.getRepos = function(username) {
	var userRepos  = 'https://api.github.com/users/'+username+'/repos?access_token=' + apiKey;
}

exports.githubModule = Github;