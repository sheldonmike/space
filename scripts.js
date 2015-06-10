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

var noOrbit = "false";

$(document).ready(function(){
  $('.static-orbit').click(function(){
    noOrbit = "true";
    $('.sun').removeClass('sun-hover');
    $('.galaxy').css('left','0');
    $('.mercury').css('left','125%');
    $('.venus').css('left','193%');
    $('.earth').css('left','250%');
    $('.moon').css('left','165%');
    $('.mars').css('left','353%');
    $('.jupiter').css('left','1090%');
    $('.saturn').css('left','2030%');
    $('.uranus').css('left','3890%');
    $('.neptune').css('left','6070%');
    $('.pluto').css('left','7950%');
    $('.mercury').addClass("no-orbit");
    $('.venus').addClass("no-orbit");
    $('.earth').addClass("no-orbit");
    $('.moon').addClass("no-orbit");
    $('.mars').addClass("no-orbit");
    $('.jupiter').addClass("no-orbit");
    $('.saturn').addClass("no-orbit");
    $('.uranus').addClass("no-orbit");
    $('.neptune').addClass("no-orbit");
    $('.pluto').addClass("no-orbit");
    $(".mercury-orbit").addClass("orbit-rings");
    $(".venus-orbit").addClass("orbit-rings");
    $(".earth-orbit").addClass("orbit-rings");
    $(".mars-orbit").addClass("orbit-rings");
    $(".jupiter-orbit").addClass("orbit-rings");
    $(".saturn-orbit").addClass("orbit-rings");
    $(".uranus-orbit").addClass("orbit-rings");
    $(".neptune-orbit").addClass("orbit-rings");
    $(".pluto-orbit").addClass("orbit-rings");
  });
});
    
$(document).ready(function(){
  $('.active-orbit').click(function(){
    noOrbit = "false";
    $('.galaxy').css('left','50%');
    $('.mercury').css('left','50%');
    $('.venus').css('left','50%');
    $('.earth').css('left','50%');
    $('.moon').css('left','50%');
    $('.mars').css('left','50%');
    $('.jupiter').css('left','50%');
    $('.saturn').css('left','50%');
    $('.uranus').css('left','50%');
    $('.neptune').css('left','50%');
    $('.pluto').css('left','50%');
    $('.mercury').removeClass("no-orbit");
    $('.venus').removeClass("no-orbit");
    $('.earth').removeClass("no-orbit");
    $('.moon').removeClass("no-orbit");
    $('.mars').removeClass("no-orbit");
    $('.jupiter').removeClass("no-orbit");
    $('.saturn').removeClass("no-orbit");
    $('.uranus').removeClass("no-orbit");
    $('.neptune').removeClass("no-orbit");
    $('.pluto').removeClass("no-orbit");
    $(".mercury-orbit").removeClass("orbit-rings");
    $(".venus-orbit").removeClass("orbit-rings");
    $(".earth-orbit").removeClass("orbit-rings");
    $(".mars-orbit").removeClass("orbit-rings");
    $(".jupiter-orbit").removeClass("orbit-rings");
    $(".saturn-orbit").removeClass("orbit-rings");
    $(".uranus-orbit").removeClass("orbit-rings");
    $(".neptune-orbit").removeClass("orbit-rings");
    $(".pluto-orbit").removeClass("orbit-rings");
  });
});

// $(document).ready(function(){
//   $('.mercury-button').on('click',function(){
//     if ('.inactive'){
//       $('.mercury').css("-webkit-animation-play-state", "paused");
//       $('.mercury-info').removeClass("no-info");
//       $('.mercury-button').removeClass('inactive');
//     } else {
//       $('.mercury').css("-webkit-animation-play-state", "running");
//       $('.mercury-info').addClass("no-info");
//       $('.mercury-button').addClass('inactive');
//     }
//   });
// });

// $(document).ready(function(){
//     $(".venus-button").hover(function(){
//         $('.venus').css("-webkit-animation-play-state", "paused");
//         $('.venus-info').removeClass("no-info");
//     }, function(){
//         $('.venus').css("-webkit-animation-play-state", "running");
//         $('.venus-info').addClass("no-info");
//     });
// });

// $(document).ready(function(){
//     $(".earth-button").hover(function(){
//         $('.earth').css("-webkit-animation-play-state", "paused");
//         $('.earth').css("box-shadow", "0px 0px 50px 1px white");
//         $('.earth-info').removeClass("no-info");
//     }, function(){
//         $('.earth').css("-webkit-animation-play-state", "running");
//         $('.earth').css("box-shadow", "none");
//         $('.earth-info').addClass("no-info");
//     });
// });

// $(document).ready(function(){
//     $(".mars-button").hover(function(){
//         $('.mars').css("-webkit-animation-play-state", "paused");
//         $(".mars-orbit").addClass("orbit-rings");
//         $('.mars-info').removeClass("no-info");
//     }, function(){
//         $('.mars').css("-webkit-animation-play-state", "running");
//         $(".mars-orbit").removeClass("orbit-rings");
//         $('.mars-info').addClass("no-info");
//     });
// });




$(document).ready(function(){
    $(".rings").hover(function(){
        $(".mercury-orbit").addClass("orbit-rings");
        $(".venus-orbit").addClass("orbit-rings");
        $(".earth-orbit").addClass("orbit-rings");
        $(".mars-orbit").addClass("orbit-rings");
        $(".jupiter-orbit").addClass("orbit-rings");
        $(".saturn-orbit").addClass("orbit-rings");
        $(".uranus-orbit").addClass("orbit-rings");
        $(".neptune-orbit").addClass("orbit-rings");
        $(".pluto-orbit").addClass("orbit-rings");
    }, function() {
        $(".mercury-orbit").removeClass("orbit-rings");
        $(".venus-orbit").removeClass("orbit-rings");
        $(".earth-orbit").removeClass("orbit-rings");
        $(".mars-orbit").removeClass("orbit-rings");
        $(".jupiter-orbit").removeClass("orbit-rings");
        $(".saturn-orbit").removeClass("orbit-rings");
        $(".uranus-orbit").removeClass("orbit-rings");
        $(".neptune-orbit").removeClass("orbit-rings");
        $(".pluto-orbit").removeClass("orbit-rings");
    });
});

$(document).ready(function(){
  if (noOrbit == "false"){
    $(".sun-hover").hover(function(){
        $(".mercury-orbit").addClass("orbit-rings");
        $(".venus-orbit").addClass("orbit-rings");
        $(".earth-orbit").addClass("orbit-rings");
        $(".mars-orbit").addClass("orbit-rings");
        $(".jupiter-orbit").addClass("orbit-rings");
        $(".saturn-orbit").addClass("orbit-rings");
        $(".uranus-orbit").addClass("orbit-rings");
        $(".neptune-orbit").addClass("orbit-rings");
        $(".pluto-orbit").addClass("orbit-rings");
    }, function() {
        $(".mercury-orbit").removeClass("orbit-rings");
        $(".venus-orbit").removeClass("orbit-rings");
        $(".earth-orbit").removeClass("orbit-rings");
        $(".mars-orbit").removeClass("orbit-rings");
        $(".jupiter-orbit").removeClass("orbit-rings");
        $(".saturn-orbit").removeClass("orbit-rings");
        $(".uranus-orbit").removeClass("orbit-rings");
        $(".neptune-orbit").removeClass("orbit-rings");
        $(".pluto-orbit").removeClass("orbit-rings");
    });
  }
});


$(document).ready(function(){
  $('.clear-info').click(function(){
    $('.mercury-info').addClass("no-info");
    $('.venus-info').addClass("no-info");
    $('.earth-info').addClass("no-info");
    $('.mars-info').addClass("no-info");
  });
});

$(document).ready(function(){
  $('.mercury').click(function(){
      $('.mercury-info').removeClass("no-info");
      $('.venus-info').addClass("no-info");
      $('.earth-info').addClass("no-info");
      $('.mars-info').addClass("no-info");
  });
});

$(document).ready(function(){
  $('.venus').click(function(){
      $('.venus-info').removeClass("no-info");
      $('.mercury-info').addClass("no-info");
      $('.earth-info').addClass("no-info");
      $('.mars-info').addClass("no-info");
  });
});

$(document).ready(function(){
  $('.earth').click(function(){
      $('.earth-info').removeClass("no-info");
      $('.mercury-info').addClass("no-info");
      $('.venus-info').addClass("no-info");
      $('.mars-info').addClass("no-info");
  });
});

$(document).ready(function(){
  $('.mars').click(function(){
      $('.mars-info').removeClass("no-info");
      $('.mercury-info').addClass("no-info");
      $('.venus-info').addClass("no-info");
      $('.earth-info').addClass("no-info");
  });
});