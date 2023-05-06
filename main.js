function makeItRain(){
    var drops = '';
    var increment = 0;

    while (increment < 100) {
        increment += 2;
        var delay = Math.floor(Math.random() * (98-1+1)+1);
        drops += ' <div class="drop" style="left:' + increment + '%; animation-delay:0.' +delay+'s; animation-duration:0.8'+ delay+'s;"><div class="stem" style="left:' + increment + '%; animation-delay:0.' +delay+'s; animation-duration:0.8'+ delay+'s;"></div><div class="splash" style="left:' + increment + '%; animation-delay:0.' +delay+'s; animation-duration:0.8'+ delay+'s;"></div></div>';
    }

    document.getElementById('rain-container').innerHTML += drops;
    
}

//for audio onOff
var x = document.getElementById('myAudio');

function autoPlayAudio(){
    x.autoplay;
    x.play();
}
document.getElementById("rain-container").innerHTML = x;
function enableMute() { 
  x.muted = false;
  document.getElementById("imageon").style.display = "block";
  document.getElementById("imageoff").style.display = "none";
  autoPlayAudio();  
} 

function disableMute() { 
  x.muted = true;
  document.getElementById("imageon").style.display = "none";
  document.getElementById("imageoff").style.display = "block";
}
 
makeItRain();