let boxes = document.getElementsByClassName('box').length;

function save() {	
  for(let i = 1; i <= boxes; i++){
	  var checkbox = document.getElementById(String(i));
    sessionStorage.setItem("checkbox" + String(i), checkbox.checked);	
  }
}

//for loading
for(let i = 1; i <= boxes; i++){
  if(sessionStorage.length > 0){
    var checked = JSON.parse(sessionStorage.getItem("checkbox" + String(i)));
    document.getElementById(String(i)).checked = checked;
  }
}
window.addEventListener('change', save);
