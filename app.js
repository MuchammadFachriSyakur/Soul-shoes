const button = document.getElementById('button');
const span1 = document.querySelector(".container nav button span:nth-child(1)");
const span2 = document.querySelector(".container nav button span:nth-child(2)");
const span3 = document.querySelector(".container nav button span:nth-child(3)");
const list = document.querySelector(".container nav .logo-link");
button.addEventListener("click", (e)=>{
  button.classList.toggle('bAk');
  span1.classList.toggle('akti');
  span2.classList.toggle('akti2');
  span3.classList.toggle('akti1');
  list.classList.toggle('muncul');
});

let indexGambar = 0;
const images = [];
images[0] = "bg-slide1.jpeg";
images[1] = "bg-slide2.jpg";
images[2] = "bg-slide3.jpg";
images[3] = "bg-slide4.jpg";

function slideGambar(){
  document.slideproduk.src = images[indexGambar];
  if(indexGambar < images.length - 1){
    indexGambar++;
  }else{
    indexGambar = 0;
  }
  setTimeout(slideGambar, 1500);
}
window.onload = slideGambar;