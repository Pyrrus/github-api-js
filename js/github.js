var apiKey = require('./../.env').apiKey;

function Github() {
	
}

//test

Github.prototype.getUser = function(userName, userDisplay) {
	var user = 'https://api.github.com/users/'+userName + '?access_token=' + apiKey;
    $.ajax({
      url: user,
      complete: function(data) {
        userDisplay.call(null, data.responseJSON);
      }
    });
};

Github.prototype.getRepos = function(userName, reposDisplay) {
	var userRepos  = 'https://api.github.com/users/'+userName+'/repos?access_token=' + apiKey;
	$.ajax({
      url: userRepos,
      complete: function(data) {
        reposDisplay.call(null, data.responseJSON);
      }
    });
}

exports.githubModule = Github;