let boxes = document.getElementsByClassName('box').length;

function save() {	
  for(let i = 1; i <= boxes; i++){
	  var checkbox = document.getElementById(String(i));
    localStorage.setItem("checkbox" + String(i), checkbox.checked);	
  }
}

//for loading
for(let i = 1; i <= boxes; i++){
  if(localStorage.length > 0){
    var checked = JSON.parse(localStorage.getItem("checkbox" + String(i)));
    document.getElementById(String(i)).checked = checked;
  }
}
window.addEventListener('change', save);

function save(){
  var checkbox = document.getElementById('checkbox1zaal1');
  localStorage.setItem('checkbox1zaal1', checkbox.checked);
}

function load(){    
  var checked = JSON.parse(localStorage.getItem('checkbox1zaal1'));
  document.getElementById("checkbox1zaal1").checked = checked;
}

function wis(){
  location.reload();
  localStorage.clear()

}

load();
