var ms = document.getElementById("moonSun");
var nd = document.getElementById("NightDay");

if(localStorage.getItem('mod') == 'night') {
   document.querySelector('body').setAttribute('name', 'nightMod');
}else if(localStorage.getItem('mod') == 'day') {
   document.querySelector('body').setAttribute('name', 'dayMod');
}


function changeMod() {

   if(localStorage.getItem('mod') == 'day') {
      localStorage.setItem('mod', 'night');
      document.querySelector('body').setAttribute('name', 'nightMod');
   }else if(localStorage.getItem('mod') == 'night') {
      localStorage.setItem('mod', 'day');
      document.querySelector('body').setAttribute('name', 'dayMod');
   }

}

ms.onclick=changeMod;
nd.onclick=changeMod;