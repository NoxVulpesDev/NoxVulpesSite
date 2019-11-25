function readyCheck(){


  function enbiggen(portrait){
    portrait.visible = false;

  }

document.getElementByID("portrait").onMouseOver = function(){enbiggen(this);};

}
document.addEventListener("DOMContentLoaded", readyCheck);
