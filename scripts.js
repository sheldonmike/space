$(function () {
    $(window).scroll(function () {
        var currentScrollTop = $(window).scrollTop();
        $('#flare').css('opacity',currentScrollTop/($('#flare').height()+900));

    });
});

// $(function () {
//     $(window).scroll(function () {
//         var currentScrollTop = $(window).scrollTop();
//         $('#flare').css('opacity',currentScrollTop/($('#flare').height()+500));

//     });
// });


// Twitter Tweets

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));






$(document).ready(function(){
    $(".mercury-button").hover(function(){
        $('.mercury').css("-webkit-animation-play-state", "paused");
        $('.mercury-info').removeClass("no-info");
    }, function(){
        $('.mercury').css("-webkit-animation-play-state", "running");
        $('.mercury-info').addClass("no-info");
    });
});

$(document).ready(function(){
    $(".venus-button").hover(function(){
        $('.venus').css("-webkit-animation-play-state", "paused");
        $('.venus-info').removeClass("no-info");
    }, function(){
        $('.venus').css("-webkit-animation-play-state", "running");
        $('.venus-info').addClass("no-info");
    });
});

$(document).ready(function(){
    $(".earth-button").hover(function(){
        $('.earth').css("-webkit-animation-play-state", "paused");
        $('.earth').css("box-shadow", "0px 0px 50px 1px white");
        $('.earth-info').removeClass("no-info");
    }, function(){
        $('.earth').css("-webkit-animation-play-state", "running");
        $('.earth').css("box-shadow", "none");
        $('.earth-info').addClass("no-info");
    });
});

$(document).ready(function(){
    $(".mars-button").hover(function(){
        $('.mars').css("-webkit-animation-play-state", "paused");
        $(".mars-orbit").css("border", "1px solid rgba(255,255,255,.3)");
        $('.mars-info').removeClass("no-info");
    }, function(){
        $('.mars').css("-webkit-animation-play-state", "running");
        $(".mars-orbit").css("border", "none");
        $('.mars-info').addClass("no-info");
    });
});




$(document).ready(function(){
    $(".rings").hover(function(){
        $(".mercury-orbit").css("border", "1px solid rgba(255,255,255,.3)");
        $(".venus-orbit").css("border", "1px solid rgba(255,255,255,.3)");
        $(".earth-orbit").css("border", "1px solid rgba(255,255,255,.3)");
        $(".mars-orbit").css("border", "1px solid rgba(255,255,255,.3)");
    }, function() {
        $(".mercury-orbit").css("border", "none");
        $(".venus-orbit").css("border", "none");
        $(".earth-orbit").css("border", "none");
        $(".mars-orbit").css("border", "none");
    });
});