
function checkTest(){
  var shipAdd = document.getElementById('shippingAddress');
  if (shipAdd.className === 'invisible'){
    shipAdd.className = 'visible';
  } else{
    shipAdd.className = 'invisible';
  }
};
