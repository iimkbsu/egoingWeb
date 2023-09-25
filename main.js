var vv = document.getElementById("moonSun");
var va = document.getElementById("NightDay");
var count = 1;

vv.onclick = changeColor;
va.onclick = changeColor;

function changeColor() {
   if(count == 1) {
      document.querySelector("body").style.color='white';
      document.querySelector("body").style.backgroundColor='black';
      count = 0;
   }else {
      document.querySelector("body").style.color='black';
      document.querySelector("body").style.backgroundColor='white';
      count = 1;
   }

}
