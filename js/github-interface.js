var Github = require("./../js/github.js").githubModule;

$(document).ready(function() {

  var github = new Github();

  $('#find').click(function() {
    $('#content').html('');
    $('#content').hide();
    var found = true;
    var userName = $('#userName').val();
    $("#loader").show();
    github.getUser(userName, function(data) {

      if (data.message === "Not Found" || userName === '') {
        found = false;
        $('#content').html("<h1>Not found any user :(</h1>");
      } else {
        var email = "<h3>Email: " + data.email + "</h3>";
        var followers = "<h3>Followers: " + data.followers + "</h3>";
        var following = "<h3>Following: " + data.following + "</h3>";
        var login = "<h2>Username: " + data.login + "</h2>";
        var location = "<h3>Location: " + data.location + "</h3>";
        var public_repos = "<h3>Public repos: " + data.public_repos + "</h3>";
        var updated_at = "<h3>Last update: " + moment(data.updated_at).format('MMM DD YYYY') + "</h3>";
        var image = "<img src='" + data.avatar_url + "' alt='" + data.name + "' class='img-responsive' />";
        var madeAt = "<h3>Created at: " + moment(data.created_at).format('MMM DD YYYY') + "</h3>";
        var name = "";
        if (data.name === undefined) {
          name = "<h1>Name: " + data.login + "</h1>";
        } else {
          name = "<h1>Name: " + data.name + "</h1>";
        }
        $('#content').append("<div class='row' id='first'></div>");
        $('#first').append("<div class='col-md-4'>" + image + "</div>");
        $('#first').append("<div class='col-md-6'>" + name + login + email + location + followers + following + public_repos + updated_at + madeAt + "</div>");
      }

      if (found) {
        github.getRepos(userName, data.public_repos, function(data) {
          $('#content').append("<div class='row'><h1>" + userName + "\'s Repos</h1><div class='col-md-12' id='next'></div></div>");
          for (var i = 0; i < data.length; i++) {
            var link = "<a href='" + data[i].html_url + "' class='btn btn-primary links' target='_blank'>" + data[i].name + "</a>";
            $('#next').append(link);
          }
        });
      }

      $('#content').show();
      $("#loader").hide();
    });
  });
});