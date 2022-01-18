
// const btn = document.querySelector('.switch');
const btn = document.getElementById('btn');
const heading = document.getElementById('heading');
const lightDarkBtn = document.getElementById('light-dark-btn');
const topBtn = document.getElementById('top-btn');
const nav = document.getElementById('nav');
const ul = document.getElementById('ul');
const logo = document.getElementById('logo');
const toggleBtn = document.getElementById('toggle-btn');

const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const a4 = document.getElementById('a4');
const a5 = document.getElementById('a5');







var i =0;
btn.addEventListener('click',()=>{
  
    i++;

  if(i==1){
    
    //background
  document.body.style.backgroundColor='white';
  //logo
  logo.style.color='black';
   //heading
   heading.style.color='black';
 //toggle-btn
   toggleBtn.style.color='black';
   //nav
    nav.style.backgroundColor='white';
    //ul
    ul.style.backgroundColor='white';
    //lightDrak-btn
  lightDarkBtn.style.color='black';
  // a
  a1.style.color='black';
  a2.style.color='black';
  a3.style.color='black';
  a4.style.color='black';
  a5.style.color='black';


  }if(i>=2){
      i=0;
      //background
  document.body.style.backgroundColor='black';

    lightDarkBtn.style.color='white';
    //heading
    heading.style.color='white';
       //logo
    logo.style.color='white';
  //toggle-btn
    toggleBtn.style.color='white';
     //nav
     nav.style.backgroundColor='black';
     //ul
     ul.style.backgroundColor='black';
    // a
    a1.style.color='white';
    a2.style.color='white';
    a3.style.color='white';
    a4.style.color='white';
    a5.style.color='white';

  
  }
console.log(i)
  
})


































// var shoe1 = document.getElementById("shoe1")
// var shoe2 = document.getElementById("shoe2")
// var shoe3 = document.getElementById("shoe3")
// var shoe4 = document.getElementById("shoe4")
// var shoe5 = document.getElementById("shoe5")

// var x= document.getElementById("view")



// function show1(){
//    x.src="s1.png"
// }

// function show2(){
//   x.src="s2.png"
// }

// function show3(){
//   x.src="s-shoe3.png"
// }

// function show4(){
//   x.src="s4.png"
// }

// function show5(){
//   x.src="s5.png"
// }
