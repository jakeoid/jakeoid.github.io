 setupPage();

 function setupPage() {
     setInterval(updateValue, 1);
 }

 function updateValue() {
 	if(document.getElementById('width') !== null){
    	document.getElementById('width').innerHTML = window.innerWidth;
    	document.getElementById('height').innerHTML = window.innerHeight;
    }
 }