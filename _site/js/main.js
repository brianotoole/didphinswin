/* Get Data from NFL LiveUpdate */
$(function() {

var loader = $(".loading-result");
$(loader).show();

//var apiUrl = "/js/sample-data.json";
var apiUrl = "http://www.nfl.com/liveupdate/scorestrip/ss.json";
$.getJSON(apiUrl, function(data) {
  $.each(data.gms, function(index, obj) {
    //console.log(obj);
    var htmlEl = $(".js-result");
    var teamName = "Buccaneers"; //change depending on team
    var homeTeam = obj.hnn;
    var awayTeam = obj.vnn;
    var scoreHome = obj.hs;
    var scoreAway = obj.vs;
    var winnerHome = (scoreHome > scoreAway);
    var isCurrentWeek = (scoreHome == scoreAway);
 
    // Set home or away team
    if (homeTeam == teamName) {
      var isHome = true;
      var opposingTeamName = obj.vnn;
    } else if (awayTeam == teamName) {
      var isHome = false;
      var opposingTeamName = obj.hnn;
    } else {}
    // Check scores & assign results
    var htmlResult;
    if (isHome == true && isCurrentWeek == true || isHome == false && isCurrentWeek == true) {
      htmlResult = "We'll find out this week vs. the " + opposingTeamName + ".";
    } else if (isHome == true && winnerHome == true) {
      htmlResult = "Yes, it's a miracle. They beat the " + opposingTeamName + ".";
    } else if (isHome == true && winnerHome == false) {
      htmlResult = "LOL, No. Lost to the " + opposingTeamName + ".";
    } else if (isHome == false && winnerHome == true) {
      htmlResult = "Of course not. Lost to the " + opposingTeamName + ".";
    } else if (isHome == false && winnerHome == false) {
      htmlResult = "Well, I don't believe it. They won on the road vs. the " + opposingTeamName + ".";
    } else {
      //
    }
    setTimeout(function () {
      $(loader).hide();
      $(htmlEl).html(htmlResult);
    }, 2500);
  })
});

});
/* End */

/* Share button popup */
(function(){
  
  var shareButtons = document.querySelectorAll(".share-btn");

  if (shareButtons) {
      [].forEach.call(shareButtons, function(button) {
      button.addEventListener("click", function(event) {
 				var width = 650,
            height = 450;

        event.preventDefault();

        window.open(this.href, 'Share Dialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width='+width+',height='+height+',top='+(screen.height/2-height/2)+',left='+(screen.width/2-width/2));
      });
    });
  }

})();
/* End */

/* Full-screen nav toggle */
$(document).ready(function() {
  var trigger = $('.i-menu a'),
    isClosed = false;
  trigger.click(function() {
    hamburger_cross();
  });

  function hamburger_cross() {
    if (isClosed == true) {
      trigger.removeClass('active');
      isClosed = false;
    } else {
      trigger.addClass('active');
      isClosed = true;
    }
  }
  $(trigger).click(function() {
    $('.menu-wrapper').toggleClass('open');
  });
});
/* End */