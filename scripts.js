// JavaScript file for the space pages

// Contrls the radial-gradient colour change on the home page
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





// Sets the Astronomical Unit equal to 150px
// var au = 150;

var earth = 25
var sun = earth*4
var mercury = earth*0.4
var venus = earth*0.96
var moon = earth*0.28
var mars = earth*0.52
var jupiter = earth*11
var saturn = earth*9.12
var saturnRings = saturn*2.19
var uranus = earth*4
var neptune = earth*3.88
var pluto = earth*0.36

var au = 200

var mercuryAU = 0.385
var venusAU = 0.72
var moonAU = 0.15
var marsAU = 1.52
var jupiterAU = 5.2
var saturnAU = 9.9
var uranusAU = 19.2
var neptuneAU = 30.1
var plutoAU = 39.5

var mercuryDistance = au*mercuryAU
var venusDistance = au*venusAU
var earthDistance = au
var moonDistance = au*moonAU
var marsDistance = au*marsAU
var jupiterDistance = au*jupiterAU
var saturnDistance = au*saturnAU
var uranusDistance = au*uranusAU
var neptuneDistance = au*neptuneAU
var plutoDistance = au*plutoAU

var earthSpeed = 12
var mercurySpeed = earthSpeed*0.24
var venusSpeed = earthSpeed*0.617
var moonSpeed = earthSpeed*0.074
var marsSpeed = earthSpeed*1.88
var jupiterSpeed = earthSpeed*11.83
var saturnSpeed = earthSpeed*29.417
var uranusSpeed = earthSpeed*84
var neptuneSpeed = earthSpeed*165
var plutoSpeed = earthSpeed*247.667

// Sets a variable that is used when the orbits are static to prevent the "sun-hover" class from showing/removing the orbit rings
var noOrbit = false;

// Stops the planets from orbiting and arranges them in a static line
$(function(){
  $('.static-orbit').click(function(){
    noOrbit = true;
    $('.active-orbit').removeClass('active');
    $('.static-orbit').addClass('active');
    
    // Mercury - move into place on static
        var mercuryPosition = $('.mercury').position();
        // alert("Top: " + mercuryPosition.top + " Left: " + mercuryPosition.left);
        
        $.keyframe.define([{
        name: 'Mercury',
        from: {
          'left': mercuryPosition.left+'px',
          'top': mercuryPosition.top+'px'
        },
        to: {
          'left': mercuryDistance+(sun/2)+'%',
          'top': '50%'
        }
        }]);
        
        $('.mercury').playKeyframe(
        'Mercury 2s ease'
        );
    
    // Venus - move into place on static
        var venusPosition = $('.venus').position();
        // alert("Top: " + venusPosition.top + " Left: " + venusPosition.left);
        
        $.keyframe.define([{
        name: 'Venus',
        from: {
          'left': venusPosition.left+'px',
          'top': venusPosition.top+'px'
        },
        to: {
          'left': venusDistance+(sun/2)+'%',
          'top': '50%'
        }
        }]);
        
        $('.venus').playKeyframe(
        'Venus 2s ease'
        );
        
    // Earth - move into place on static
    
        var earthPosition = $('.earth').position();
        // alert("Top: " + earthPosition.top + " Left: " + earthPosition.left);
        
        $.keyframe.define([{
        name: 'Earth',
        from: {
          'left': earthPosition.left+'px',
          'top': earthPosition.top+'px'
        },
        to: {
          'left': earthDistance+(sun/2)+'%',
          'top': '50%'
        }
        }]);
        
        $('.earth').playKeyframe(
        'Earth 2s ease'
        );
    // Mars - move into place on static
        var marsPosition = $('.mars').position();
        // alert("Top: " + marsPosition.top + " Left: " + marsPosition.left);
        
        $.keyframe.define([{
        name: 'Mars',
        from: {
          'left': marsPosition.left+'px',
          'top': marsPosition.top+'px'
        },
        to: {
          'left': marsDistance+(sun/2)+'%',
          'top': '50%'
        }
        }]);
        
        $('.mars').playKeyframe(
        'Mars 2s ease'
        );
    
    // Jupiter - move into place on static
        var jupiterPosition = $('.jupiter').position();
        // alert("Top: " + jupiterPosition.top + " Left: " + jupiterPosition.left);
        
        $.keyframe.define([{
        name: 'Jupiter',
        from: {
          'left': jupiterPosition.left+'px',
          'top': jupiterPosition.top+'px'
        },
        to: {
          'left': jupiterDistance+(sun/2)+'%',
          'top': '50%'
        }
        }]);
        
        $('.jupiter').playKeyframe(
        'Jupiter 2s ease'
        );
        
    // Saturn - move into place on static
        var saturnPosition = $('.saturn').position();
        // alert("Top: " + saturnPosition.top + " Left: " + saturnPosition.left);
        
        $.keyframe.define([{
        name: 'Saturn',
        from: {
          'left': saturnPosition.left+'px',
          'top': saturnPosition.top+'px'
        },
        to: {
          'left': saturnDistance+(sun/2)+'%',
          'top': '50%'
        }
        }]);
        
        $('.saturn').playKeyframe(
        'Saturn 2s ease'
        );
        
    // Uranus - move into place on static
        var uranusPosition = $('.uranus').position();
        // alert("Top: " + uranusPosition.top + " Left: " + uranusPosition.left);
        
        $.keyframe.define([{
        name: 'Uranus',
        from: {
          'left': uranusPosition.left+'px',
          'top': uranusPosition.top+'px'
        },
        to: {
          'left': uranusDistance+(sun/2)+'%',
          'top': '50%'
        }
        }]);
        
        $('.ranus').playKeyframe(
        'Uranus 2s ease'
        );
        
    // Neptune - move into place on static
        var neptunePosition = $('.neptune').position();
        // alert("Top: " + neptunePosition.top + " Left: " + neptunePosition.left);
        
        $.keyframe.define([{
        name: 'Neptune',
        from: {
          'left': neptunePosition.left+'px',
          'top': neptunePosition.top+'px'
        },
        to: {
          'left': neptuneDistance+(sun/2)+'%',
          'top': '50%'
        }
        }]);
        
        $('.neptune').playKeyframe(
        'Neptune 2s ease'
        );
        
    // Pluto - move into place on static
        var plutoPosition = $('.pluto').position();
        // alert("Top: " + plutoPosition.top + " Left: " + plutoPosition.left);
        
        $.keyframe.define([{
        name: 'Pluto',
        from: {
          'left': plutoPosition.left+'px',
          'top': plutoPosition.top+'px'
        },
        to: {
          'left': plutoDistance+(sun/2)+'%',
          'top': '50%'
        }
        }]);
        
        $('.pluto').playKeyframe(
        'Pluto 2s ease'
        );
    
    $('body').addClass('no-vertical');
    // $('.galaxy').css('left','0');
    $('.galaxy').removeClass('galaxy-staticOff');
    $('.galaxy').addClass('galaxy-staticOn');
    $('.mercury').css('left',mercuryDistance+(sun/2)+'%');
    $('.venus').css('left',venusDistance+(sun/2)+'%');
    $('.earth').css('left',earthDistance + (sun/2) + '%');
    $('.moon').css('left',earthDistance*0.825 + '%');
    $('.mars').css('left',marsDistance+(sun/2)+'%');
    $('.jupiter').css('left',jupiterDistance+(sun/2)+'%');
    $('.saturn').css('left',saturnDistance+(sun/2)+'%');
    $('.uranus').css('left',uranusDistance+(sun/2)+'%');
    $('.neptune').css('left',neptuneDistance+(sun/2)+'%');
    $('.pluto').css('left',plutoDistance+(sun/2)+'%');
    $('.mercury, .venus, .earth, .moon, .mars, .jupiter, .saturn, .uranus, .neptune, .pluto').addClass("no-orbit");
    $(".mercury-orbit, .venus-orbit, .earth-orbit, .mars-orbit, .jupiter-orbit, .saturn-orbit, .uranus-orbit, .neptune-orbit, .pluto-orbit").addClass("orbit-rings");
  });
});

// Returns the planets to their orbit positions and play-state
$(document).ready(function(){
  $('.active-orbit').click(function(){
    noOrbit = false;
    $('.static-orbit').removeClass('active');
    $('.active-orbit').addClass('active');
    $('body').removeClass('no-vertical');
    $('.galaxy').removeClass('galaxy-staticOn');
    $('.galaxy').addClass('galaxy-staticOff');
    $('.mercury, .venus, .earth, .mars, .jupiter, .saturn, .uranus, .neptune, .pluto').css('animation', '');
    $('.mercury, .venus, .earth, .moon, .mars, .jupiter, .saturn, .uranus, .neptune, .pluto').css('left','50%');
    $('.mercury, .venus, .earth, .moon, .mars, .jupiter, .saturn, .uranus, .neptune, .pluto').removeClass("no-orbit");
    $(".mercury-orbit, .venus-orbit, .earth-orbit, .mars-orbit, .jupiter-orbit, .saturn-orbit, .uranus-orbit, .neptune-orbit, .pluto-orbit").removeClass("orbit-rings");
  });
});

// Adds/removes orbit rings when hovering over the "Orbit Rings" button
$(document).ready(function(){
  if (noOrbit === false){
    $(".rings").hover(function(){
        $(".mercury-orbit, .venus-orbit, .earth-orbit, .mars-orbit, .jupiter-orbit, .saturn-orbit, .uranus-orbit, .neptune-orbit, .pluto-orbit").toggleClass("orbit-rings");
    });
  }
});

// Adds/removes orbit rings when hovering over the sun
  $(function(){
    $(".sun").hover(function(){
      // if (noOrbit == false){
        $(".mercury-orbit, .venus-orbit, .earth-orbit, .mars-orbit, .jupiter-orbit, .saturn-orbit, .uranus-orbit, .neptune-orbit, .pluto-orbit").toggleClass("orbit-rings");
    });
  });


//  Removes the Twitter feed from the page
$(document).ready(function(){
  $('.clear-info').click(function(){
    $('.mercury-info, .venus-info, .earth-info, .mars-info').addClass("no-info");
  });
});

$(function(){
  $('.mercury-info').click(function(){
    $('div').append('<a class="twitter-timeline"href="https://twitter.com/search?q=%23mercury%20%23space"data-widget-id="607736203622768640"data-chrome="noscrollbar">Tweets about #mercury #space</a>');
  });
});

//  Shows the Twitter feed for Mercury
$(document).ready(function(){
  $('.mercury').click(function(){
      $('.mercury-info').removeClass("no-info");
      $('.venus-info, .earth-info, .mars-info').addClass("no-info");
  });
});

//  Shows the Twitter feed for Venus
$(document).ready(function(){
  $('.venus').click(function(){
      $('.venus-info').removeClass("no-info");
      $('.mercury-info, .earth-info, .mars-info').addClass("no-info");
  });
});

//  Shows the Twitter feed for Earth
$(document).ready(function(){
  $('.earth').click(function(){
      $('.earth-info').removeClass("no-info");
      $('.mercury-info, .venus-info, .mars-info').addClass("no-info");
  });
});

//  Shows the Twitter feed for Mars
$(document).ready(function(){
  $('.mars').click(function(){
      $('.mars-info').removeClass("no-info");
      $('.mercury-info, .venus-info, .earth-info').addClass("no-info");
  });
});



// Changes the scale of the planets
$(function(){
  $('.scale').click(function(){
    $('.scale-off').removeClass('active');
    $('.scale').addClass('active');
    
    var earth = 5
    var mercury = earth*0.4
    var venus = earth*0.96
    var moon = earth*0.28
    var mars = earth*0.52
    var jupiter = earth*11
    var saturn = earth*9.12
    var saturnRings = saturn*2.19
    var uranus = earth*4
    var neptune = earth*3.88
    var pluto = earth*0.36
    
    var earthDistance = 772
    var scaleAU = 272
    $('.sun').css('width',sun*5.45+"px");
    $('.sun').css('height',sun*5.45+"px");
    $('.mercury').css('width',mercury+"px");
    $('.mercury').css('height',mercury+"px");
    $('.venus').css('width',venus+"px");
    $('.venus').css('height',venus+"px");
    $('.earth').css('width',earth+"px");
    $('.earth').css('height',earth+"px");
    $('.moon').css('width',moon+"px");
    $('.moon').css('height',moon+"px");
    $('.mars').css('width',mars+"px");
    $('.mars').css('height',mars+"px");
    $('.jupiter').css('width',jupiter+"px");
    $('.jupiter').css('height',jupiter+"px");
    $('.saturn').css('width',saturn+"px");
    $('.saturn').css('height',saturn+"px");
    $('.saturn-rings').css('width',saturnRings+"px");
    $('.saturn-rings').css('height',saturnRings+"px");
    $('.saturn-rings').css('border',earth*4+"px"+" solid rgba(255,255,255,.3)");
    $('.uranus').css('width',uranus+"px");
    $('.uranus').css('height',uranus+"px");
    $('.neptune').css('width',neptune+"px");
    $('.neptune').css('height',neptune+"px");
    $('.pluto').css('width',pluto+"px");
    $('.pluto').css('height',pluto+"px");
    
    $('.mercury').css({
      'left':scaleAU*mercuryAU + 500 + 'px',
      'margin-left':'-' + mercury/2 + 'px',
      'margin-top':'-' + mercury/2 + 'px'
      });
    $('.venus').css({
      'left':scaleAU*venusAU + 500 + 'px',
      'margin-left':'-' + venus/2 + 'px',
      'margin-top':'-' + venus/2 + 'px'
      });
    $('.earth').css({
      'left':scaleAU + 500 + 'px',
      'margin-left':'-' + earth/2 + 'px',
      'margin-top':'-' + earth/2 + 'px'
      });
    $('.moon').css({
      'left':scaleAU*moonAU + 500 + 'px',
      'margin-left':'-' + moon/2 + 'px',
      'margin-top':'-' + moon/2 + 'px'
      });
    $('.mars').css({
      'left':scaleAU*marsAU + 500 + 'px',
      'margin-left':'-' + mars/2 + 'px',
      'margin-top':'-' + mars/2 + 'px'
      });
    $('.jupiter').css({
      'left':scaleAU*jupiterAU + 'px',
      'margin-left':'-' + jupiter/2 + 'px',
      'margin-top':'-' + jupiter/2 + 'px'
      });
    $('.saturn').css({
      'left':scaleAU*saturnAU + 'px',
      'margin-left':'-' + saturn/2 + 'px',
      'margin-top':'-' + saturn/2 + 'px'
      });
    $('.saturn-rings').css({
      'margin-left':'-' + saturnRings/2 + 'px',
      'margin-top':'-' + saturnRings/2 + 'px'
      });
    $('.uranus').css({
      'left':scaleAU*uranusAU + 'px',
      'margin-left':'-' + uranus/2 + 'px',
      'margin-top':'-' + uranus/2 + 'px'
      });
    $('.neptune').css({
      'left':scaleAU*neptuneAU + 'px',
      'margin-left':'-' + neptune/2 + 'px',
      'margin-top':'-' + neptune/2 + 'px'
      });
    $('.pluto').css({
      'left':scaleAU*plutoAU + 'px',
      'margin-left':'-' + pluto/2 + 'px',
      'margin-top':'-' + pluto/2 + 'px'
      });
  });
});


$(function(){
  $('.new-settings').click(function(){
    var humor = prompt('New humor setting');
    var honesty = prompt('New honesty setting');
    var audio = new Audio ('audio/music.mp3');
    
    if (humor == 75 && honesty == 90){
      $('.tars').addClass('animateTars');
      audio.play();
    }
  });
});


// Scale back to normal
$(function(){
  $('.scale-off').click(function(){
    $('.scale').removeClass('active');
    $('.scale-off').addClass('active');
    
    $('.sun, .mercury, .venus, .earth, .moon, .mars, .jupiter, .saturn, .saturn-rings, .uranus, .neptune, .pluto').css('width','');
    $('.sun, .mercury, .venus, .earth, .moon, .mars, .jupiter, .saturn, .saturn-rings, .uranus, .neptune, .pluto').css('height','');
    $('.saturn-rings').css('border','');
    
    $('.mercury, .venus, .earth, .moon, .mars, .jupiter, .saturn, .saturn-rings, .uranus, .neptune, .pluto').css({
      'left':'50%',
      'margin-left':'',
      'margin-top':''
      });
  });
});



// Scale to be similar size
$(function(){
  $('.scale-down').click(function(){
    $('.scale-off').removeClass('active');
    $('.scale').removeClass('active');
    
    var earth = 5
    var mercury = earth*0.4
    var venus = earth*0.96
    var moon = earth*0.28
    var mars = earth*0.52
    var jupiter = earth*11
    var saturn = earth*9.12
    var saturnRings = saturn*2.19
    var uranus = earth*4
    var neptune = earth*3.88
    var pluto = earth*0.36
    
    var earthDistance = 75
    var scaleAU = 50
    $('.sun').css('width',sun/2 + "px");
    $('.sun').css('height',sun/2 + "px");
    $('.mercury').css('width',mercury+"px");
    $('.mercury').css('height',mercury+"px");
    $('.venus').css('width',venus+"px");
    $('.venus').css('height',venus+"px");
    $('.earth').css('width',earth+"px");
    $('.earth').css('height',earth+"px");
    $('.moon').css('width',moon+"px");
    $('.moon').css('height',moon+"px");
    $('.mars').css('width',mars+"px");
    $('.mars').css('height',mars+"px");
    $('.jupiter').css('width',jupiter+"px");
    $('.jupiter').css('height',jupiter+"px");
    $('.saturn').css('width',saturn+"px");
    $('.saturn').css('height',saturn+"px");
    $('.saturn-rings').css('width',saturnRings+"px");
    $('.saturn-rings').css('height',saturnRings+"px");
    $('.saturn-rings').css('border',earth*4+"px"+" solid rgba(255,255,255,.3)");
    $('.uranus').css('width',uranus+"px");
    $('.uranus').css('height',uranus+"px");
    $('.neptune').css('width',neptune+"px");
    $('.neptune').css('height',neptune+"px");
    $('.pluto').css('width',pluto+"px");
    $('.pluto').css('height',pluto+"px");
    
    $('.mercury').css({
      'margin-left':'-' + mercury/2 + 'px',
      'margin-top':'-' + mercury/2 + 'px'
      });
    $('.venus').css({
      'margin-left':'-' + venus/2 + 'px',
      'margin-top':'-' + venus/2 + 'px'
      });
    $('.earth').css({
      'margin-left':'-' + earth/2 + 'px',
      'margin-top':'-' + earth/2 + 'px'
      });
    $('.moon').css({
      'margin-left':'-' + moon/2 + 'px',
      'margin-top':'-' + moon/2 + 'px'
      });
    $('.mars').css({
      'margin-left':'-' + mars/2 + 'px',
      'margin-top':'-' + mars/2 + 'px'
      });
    $('.jupiter').css({
      'margin-left':'-' + jupiter/2 + 'px',
      'margin-top':'-' + jupiter/2 + 'px'
      });
    $('.saturn').css({
      'margin-left':'-' + saturn/2 + 'px',
      'margin-top':'-' + saturn/2 + 'px'
      });
    $('.saturn-rings').css({
      'margin-left':'-' + saturnRings/2 + 'px',
      'margin-top':'-' + saturnRings/2 + 'px'
      });
    $('.uranus').css({
      'margin-left':'-' + uranus/2 + 'px',
      'margin-top':'-' + uranus/2 + 'px'
      });
    $('.neptune').css({
      'margin-left':'-' + neptune/2 + 'px',
      'margin-top':'-' + neptune/2 + 'px'
      });
    $('.pluto').css({
      'margin-left':'-' + pluto/2 + 'px',
      'margin-top':'-' + pluto/2 + 'px'
      });
  });
});
