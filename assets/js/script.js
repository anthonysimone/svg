

/**
 * Initialize all snap.svg toggles
 */

// remove and add SMIL animted file to rerun animation
$('.rerun-smil').on("click", function() {
  $('.smil-box').find('svg').remove();
  $('.smil-box').load('assets/svg/smil-example-3.svg');
});

// rerun line animation, only in webkit
var $animatedLine = $('.e3-path');
$('.rerun-line-animation').on("click", function() {
  $animatedLine.css('webkitAnimationName', 'none');
  setTimeout(function() {
    $animatedLine.css('webkitAnimationName', '');
  }, 10);
});

function timer(time) {
  setTimeout(function() {
    alert('Your time is up!');
  }, time);
}

(function() {
    // initialize all

    [].slice.call( document.querySelectorAll( '.si-icons-default > .si-icon' ) ).forEach( function( el ) {
        var svgicon = new svgIcon( el, svgIconConfig );
    } );

    new svgIcon( document.querySelector( '.si-icons-easing .si-icon-nav-left-arrow' ), svgIconConfig, { easing : mina.backin } );
    new svgIcon( document.querySelector( '.si-icons-easing .si-icon-hamburger' ), svgIconConfig, { easing : mina.backin } );
    new svgIcon( document.querySelector( '.si-icons-easing .si-icon-plus' ), svgIconConfig, { easing : mina.backin } );
    new svgIcon( document.querySelector( '.si-icons-easing .si-icon-volume' ), svgIconConfig, { easing : mina.backin } );
    new svgIcon( document.querySelector( '.si-icons-easing .si-icon-hourglass' ), svgIconConfig, { easing : mina.backin } );
    new svgIcon( document.querySelector( '.si-icons-easing .si-icon-equalizer' ), svgIconConfig, { easing : mina.backin } );
    new svgIcon( document.querySelector( '.si-icons-easing .si-icon-hamburger-cross' ), svgIconConfig, { easing : mina.elastic, speed: 600 } );
    new svgIcon( document.querySelector( '.si-icons-easing .si-icon-trash' ), svgIconConfig, { easing : mina.elastic, speed: 600 } );
    new svgIcon( document.querySelector( '.si-icons-easing .si-icon-clock' ), svgIconConfig, { easing : mina.elastic, speed: 600 } );
    new svgIcon( document.querySelector( '.si-icons-easing .si-icon-maximize' ), svgIconConfig, { easing : mina.elastic, speed: 600 } );
    new svgIcon( document.querySelector( '.si-icons-easing .si-icon-contract' ), svgIconConfig, { easing : mina.elastic, speed: 600 } );
    new svgIcon( document.querySelector( '.si-icons-easing .si-icon-glass-empty' ), svgIconConfig, { easing : mina.elastic, speed: 600 } );
    //
    new svgIcon( document.querySelector( '.si-icons-hover .si-icon-clock' ), svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 128, h : 128 } } );
    new svgIcon( document.querySelector( '.si-icons-hover .si-icon-hamburger' ), svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 128, h : 128 } } );
    new svgIcon( document.querySelector( '.si-icons-hover .si-icon-flag' ), svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 128, h : 128 } } );
    new svgIcon( document.querySelector( '.si-icons-hover .si-icon-zoom' ), svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 128, h : 128 } } );
    new svgIcon( document.querySelector( '.si-icons-hover .si-icon-maximize' ), svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 128, h : 128 } } );
    new svgIcon( document.querySelector( '.si-icons-hover .si-icon-equalizer' ), svgIconConfig, { easing : mina.backin, evtoggle : 'mouseover', size : { w : 128, h : 128 } } );


    new svgIcon( document.querySelector( '.e3-icons .si-icon-maximize-rotate' ), svgIconConfig, {
      speed : 3000,
      easing : mina.backin,
      evtoggle : 'click', // or 'mouseover'
      size : { w : 128, h : 128 },
      onLoad : function() {}, // callback on svg load
      onToggle : function() {} // callback on toggle (click or mouseover/mouseout)
    } );

    new svgIcon( document.querySelector( '.e3-icons .si-icon-nav-left-arrow-2' ), svgIconConfig, {
      speed : 1500,
      size : { w : 200, h : 200 }
    } );

    new svgIcon( document.querySelector( '.e3-icons .si-icon-glass-2' ), svgIconConfig, {
      speed : 1000,
      size : { w : 200, h : 200 }
    } );

  new svgIcon( document.querySelector( '.e3-icons .si-icon-hourglass' ), svgIconConfig, {
    speed : 2500,
    size : { w : 200, h : 200 },
    onToggle : function() { timer(5000) }
  } );

})();



/**
 * Add class to elements on click
 */
$('svg.shrink-click path, svg.shrink-click polygon, svg.shrink-click circle').on("click", function() {
  $(this).attr("class", "shrink").delay(1000).queue(function() {
    $(this).remove().dequeue();
  });
});



/**
 * Stroke-dash array
 */
//var path = document.querySelector('.e3-path');
//var pathLength = path.getTotalLength(); // 988.0062255859375
//alert(pathLength);


/**
 * Green Sock
 */
var $gsapIcon = $('.sun-icon-gsap');
var $gsapSun = $('.sun-icon-gsap .whole-sun');
var $gsapRays = $('.sun-icon-gsap .sunrays');
var sunTween = TweenMax.to($gsapRays, 8, {
  rotation: 360,
  ease: 'linear',
  transformOrigin: "50% 50%",
  repeat: -1,
  paused: true
});
var sunRays = TweenMax.to($gsapSun, 0.400, {
  scale: 1.1,
  ease: 'linear',
  transformOrigin: "50% 50%",
  repeat: -1,
  yoyo: true,
  paused: true
})
function toggle() {
  sunTween.paused(!sunTween.paused());
}
$gsapIcon.hover(function() {
  sunTween.resume();
  sunRays.resume();
}, function() {
  sunTween.pause();
  sunRays.pause();
});



/**
 * JS for snap.js weather icons
 */
$(document).ready(function(){
  // Sun vars
  // Idealy, load sun via external file to keep HTML clean
  var sun = Snap.select('#sun');
  var sunCircle = sun.select('#circle');
  var sunRays = sun.select('#rays');

  // Sun events
  raysAnimation();

  // Infinite animation for the sun rays
  function raysAnimation(){
    sunRays.stop().animate(
      { transform: 'r90,256,256'}, // Basic rotation around a point. No frills.
      10000, // Nice slow turning rays
      function(){
        sunRays.attr({ transform: 'rotate(0 256 256)'}); // Reset the position of the rays.
        raysAnimation(); // Repeat this animation so it appears infinite.
      }
    );

  }

  var cloud_snow = Snap.select('#cloud_snow');
  var flakes = ['flake-1','flake-2','flake-3']; // Setup our snow. Matches IDs in SVG.

  snow();

  function snow(){
    for (var i=0; i<flakes.length; i++){
      var flakeId = flakes[i];
      var flake = cloud_snow.select('#'+flakeId); // Select each individual flake from our list
      var cx = flake.getBBox().cx; // Get its initial coordinates
      var cy = flake.getBBox().cy;

      animateFlake(flake, cx, cy); // Send it to be infinitely animated
    }
  }

  function animateFlake(flake, cx, cy){
    flake.attr({ transform: 't0 -200'}); // Reset the flake's position to behind the cloud
    var timing = getRandomArbitrary(2000,10000); // Random transition time between times we specify
    var deg = getRandomArbitrary(-360,360); // Random rotation (allows it to go either direction)
    // Animate the flake and do a new animation for it when it's done (repeat this function)
    flake.stop().animate({ transform: 't0 200 r'+deg+' '+cx+' '+cy}, timing, function(){ animateFlake(flake, cx, cy);});
  }


  var cloud_lightning = Snap.select('#cloud_lightning');

  var strikeCount = 0;

  function strike(){
    var bolt = cloud_lightning.select('#lightning-bolt');
    if (strikeCount < 4){
      var opacity = parseInt(bolt.attr('opacity'));
      var newOpacity = (opacity === 1) ? 0 : 1;
      bolt.stop().animate({ opacity: newOpacity}, 100, strike);
      strikeCount++;
    }
    else {
      strikeCount = 0;
      setTimeout(strike, getRandomArbitrary(1000,5000));
      var x = getRandomArbitrary(-200,200);
      bolt.attr({ transform: 't'+x+',0'});
    }

  }

  strike();

  // Lets us get random numbers from within a range we specify. From MDN docs.
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
})




/**
 * JS for text masking snap.js
 */
var s = Snap('#mask'), circles = [],
  bg = s.rect(0, 0, 800, 200);

bg.attr({
  'fill': '#fff'
});

var circleGroup = s.group(bg);

// create 200 circles
for(var i=0; i<80; i++) {
  var size = Math.random()*10 + 3,
    cx = Math.random()*800,
    cy = Math.random()*200,
    opacity = Math.random(),
    fill = '#9d77da',
    counter = Math.random()*360;
  circ = s.circle(cx, cy, size);
  circ.attr({
    'fill': fill,
    'fill-opacity': opacity
  });
  circ.data('xOffset', cx);
  circ.data('cx', cx);
  circ.data('yOffset', cy);
  circ.data('cy', cy);
  circ.data('counter', counter);
  circles.push(circ);
  circleGroup.add(circ);

}

var increase = Math.PI * 2 /40,
  text = s.text(10, 130, "SNAPSVG");

text.attr({
  'font-size': 120,
  'fill': '#fff'
});

circleGroup.attr({
  mask: text
});

function draw() {
  for(var i=0, l=circles.length; i<l; i++) {
    var circ = circles[i];

    if(circ.data('cy') < 0) {
      circ.data('cy', 200);
    } else {
      circ.data('cy', (circ.data('cy')-2));
    }
    circ.data('cx', (circ.data('xOffset') + (50*(Math.sin( circ.data('counter')) / 5))));
    circ.attr({
      cx: circ.data('cx'),
      cy: circ.data('cy')
    });

    circ.data('counter',      circ.data('counter')+increase);
  }

}

function animate() {
  draw();
  window.requestAnimationFrame(animate);
}

animate();