function readyCheck(){


  function enbiggen(portrait){
    portrait.visible = false;

  }

document.getElementById("portrait").onMouseOver = function(){enbiggen(this);};

}
document.addEventListener("DOMContentLoaded", readyCheck);
