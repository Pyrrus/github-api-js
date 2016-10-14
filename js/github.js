var apiKey = require('./../.env').apiKey;

function Github() {
}

Github.prototype.getUser = function(userName, userDisplay) {
  var user = "";
  if (apiKey === undefined) {
  	user = 'https://api.github.com/users/' + userName;
  } else {
  	user = 'https://api.github.com/users/' + userName + '?access_token=' + apiKey;
  }
  $.ajax({
    url: user,
    complete: function(data) {
      userDisplay.call(null, data.responseJSON);
    }
  });
};

Github.prototype.getRepos = function(userName, howMany, reposDisplay) {
  var userRepos = 'https://api.github.com/users/' + userName + '/repos?page=1&per_page=' + howMany;
  
  $.ajax({
    url: userRepos,
    complete: function(data) {
      reposDisplay.call(null, data.responseJSON);
      // reposDisplay.call(null, null, data.responseJSON); will not work need
    }
  });
};

exports.githubModule = Github;