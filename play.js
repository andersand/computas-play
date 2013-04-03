(function() {
  var play = function() {
    console.log('Velkommen til konsollet. Skriv play.spin() og se hva som skjer! Skriv play.help() for hjelp og play.about() for bakgrunnsinfo ');
  };
  var spin_offset = 0;
  play.spin = function () {
    spin_offset = (spin_offset > 3) ? 1 : spin_offset + 1;
    $("body").css("-webkit-transform", "rotate3d(0,0,1," + (spin_offset * 90) + "deg)");
  };
  play.help = function () { console.log("Skriv play.spin() og trykk enter") };
  play.about = function () { console.log("Sjekk ut http://blog.bjartwolf.com/?p=552") };
  window.play = play;
})();
