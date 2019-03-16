
setTimeout(function(){
var pathObj = {
    "contacto": {
        "strokepath": [
            {
                "path": "M 10 94.4 L 290 94.4",
                "duration": 400
            },
            {
                "path": "M 10 447.9 L 10 94.9",
                "duration": 400
            },
            {
                "path": "M 290 447.9 L 290 94.9",
                "duration":400
            },
            {
                "path": "M 10.5 447.4 L 290.5 447.4",
                "duration": 400
            },
            {
                "path": "M 73 520.4 L 233 10.4",
                "duration": 400
            }
        ],
        "dimensions": {
            "width": 307,
            "height": 537
        }
    }
};
$('.img').tilt({
  maxTilt:        20,
  perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
  easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
  speed:          300,    // Speed of the enter/exit transition.
  transition:     true,   // Set a transition on enter/exit.
  disableAxis:    null,   // What axis should be disabled. Can be X or Y.
  reset:          true,   // If the tilt effect has to be reset on exit.
  glare:          false,  // Enables glare effect
  maxGlare:       1       // From 0 - 1.
})
/*
 Setup and Paint your lazyline!
 */

 $(document).ready(function(){
 $('#contacto').lazylinepainter({
        "svgData": pathObj,
        "strokeWidth": 2,
        "strokeColor": "#27305a"
        }).lazylinepainter('paint');
    });
 }, 3000);

 setTimeout(function(){
   $( ".img" ).show( "slow" );
 }, 2500);
