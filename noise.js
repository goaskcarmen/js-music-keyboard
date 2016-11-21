$(document).ready( function() {
  $('.instrument').on('click', 'button', function(event) {
    switch ($(this).html()){
      case 'c':
        document.getElementById('cAudio').play();
        break;
      case 'd':
        document.getElementById('dAudio').play();
        break;
      case 'e':
        document.getElementById('eAudio').play();
        break;
      case 'f':
        document.getElementById('fAudio').play();
        break;
      case 'g':
        document.getElementById('gAudio').play();
        break;
      case 'a':
        document.getElementById('aAudio').play();
        break;
      case 'b':
        document.getElementById('bAudio').play();
        break;
      default:
        //code

    }
  });

  $('body').keydown(function(event){
    switch (event.key)
    {
      case 'c':
        document.getElementById('cAudio').play();
        break;
      case 'd':
        document.getElementById('dAudio').play();
        break;
      case 'e':
        document.getElementById('eAudio').play();
        break;
      case 'f':
        document.getElementById('fAudio').play();
        break;
      case 'g':
        document.getElementById('gAudio').play();
        break;
      case 'a':
        document.getElementById('aAudio').play();
        break;
      case 'b':
        document.getElementById('bAudio').play();
        break;
      default:
        alert("no sound for this key.");
    }

  });
});
