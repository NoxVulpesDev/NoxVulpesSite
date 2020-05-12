
function checkTest(){
  var shipAdd = document.getElementById('shippingAddress');
  if (shipAdd.className === 'invisible'){
    shipAdd.className = 'visible';
  } else{
    shipAdd.className = 'invisible';
  }
};

pca.on("options", function(type, key, options){
if(type == "capture+"){
options.suppressAutocomplete = false;
}
});

pca.on("load", function(type, id, control){
var isChrome = !!window.chrome;
if (isChrome == true){
for (i=0; control.fields.length > i; i++){
document.getElementById(control.fields[i].element).autocomplete = "PCATEST";
};
};
});
