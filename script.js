document.querySelector('.container').style.width='97%';
document.querySelector('#articlesWrapper').style.marginTop='-20%';
document.querySelector('.godinataIcon').style.color='#ce1d2e';
document.querySelector('body').overflowX='hidden';
// document.querySelector('.container').style.border='none';
document.querySelector('.menu-link').style.border='none';
document.querySelector('.menu-link').style.border='none';
document.querySelector('.logoIMG').style.border='none';


document.querySelector('.nav-section').style.marginTop='5%';
document.querySelector('#articlesWrapper').style.marginTop='-20%';





document.querySelector('.menu-link').addEventListener('click',
function(event){
    
    
    document.querySelector('.menuBox').style.width='65%';
    document.querySelector('.menuBox').style.top='28%';

    document.querySelector('.menuBox').style.position='absolute';


    document.querySelector('.menuBox').style.visibility='visible';
    

},false);



function MouseOver(){
    document.querySelector('.menuBox').style.visibility='visible';
}

function MouseOut(){
    document.querySelector('.menuBox').style.visibility='hidden';
}


function MouseOver1(){
    document.querySelector('.profileBox').style.visibility='visible';
}

function MouseOut1(){
    document.querySelector('.profileBox').style.visibility='hidden';
}

// document.querySelector('#registerButton').addEventListener('click',
// function(event){

//     document.querySelector('#loginForm').style.visibility='hidden';
// },false);


document.querySelector('.loginIcon').addEventListener('click', function(){

    document.querySelector('#loginForm').style.visibility='visible';
    document.querySelector('#successful').style.display='none';
    document.querySelector('.formRegister').style.display='block';


},false);


document.querySelector('.closing').addEventListener('click', function(){

    document.querySelector('#loginForm').style.visibility='hidden';
},false);





document.querySelector('#photo6').addEventListener('mouseover',
function(event){
 
   
  document.querySelector('#id6').style.visibility='visible';
    

},false);

document.querySelector('#photo6').addEventListener('mouseout',
function(event){
  
   
  document.querySelector('#id6').style.visibility='hidden';
    

},false);







document.querySelector('#photo5').addEventListener('mouseover',
function(event){
 
   
  document.querySelector('#id5').style.visibility='visible';
    

},false);

document.querySelector('#photo5').addEventListener('mouseout',
function(event){
  
   
  document.querySelector('#id5').style.visibility='hidden';
    

},false);





document.querySelector('#photo4').addEventListener('mouseover',
function(event){
 
   
  document.querySelector('#id4').style.visibility='visible';
    

},false);

document.querySelector('#photo4').addEventListener('mouseout',
function(event){
  
   
  document.querySelector('#id4').style.visibility='hidden';
    

},false);





document.querySelector('#photo3').addEventListener('mouseover',
function(event){
 
   
  document.querySelector('#id3').style.visibility='visible';
    

},false);

document.querySelector('#photo3').addEventListener('mouseout',
function(event){
  
   
  document.querySelector('#id3').style.visibility='hidden';
    

},false);





document.querySelector('#photo2').addEventListener('mouseover',
function(event){
 
   
  document.querySelector('#id2').style.visibility='visible';
    

},false);

document.querySelector('#photo2').addEventListener('mouseout',
function(event){
  
   
  document.querySelector('#id2').style.visibility='hidden';
    

},false);




document.querySelector('#photo1').addEventListener('mouseover',
function(event){
 
   
  document.querySelector('#id1').style.visibility='visible';
    

},false);

document.querySelector('#photo1').addEventListener('mouseout',
function(event){
  
   
  document.querySelector('#id1').style.visibility='hidden';
    

},false);


document.querySelector(".logoIMG").addEventListener('click', function(event){
  window.location.replace("dnevnikbg.html");
},false)

