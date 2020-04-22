let bgpage = chrome.extension.getBackgroundPage();
let word = bgpage.word;
const pada = document.querySelector('.pada');
const balake = document.querySelector('.balake');
let url = 'http://localhost:3000/padas/';
url+=word;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    pada.innerHTML = myObj.kannadaPada;
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();


let url2 = 'http://localhost:3000/padas/';
url2+=word;
url2+='/balakes';
var xmlhttp2 = new XMLHttpRequest();
xmlhttp2.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myObj = JSON.parse(this.responseText);
    balake.innerHTML = myObj[0].kannadaBalake;
  }
};
xmlhttp2.open("GET", url2, true);
xmlhttp2.send();