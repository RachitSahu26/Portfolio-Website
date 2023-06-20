//  ..................menu-icon....................
 const MenuIcon=document.querySelector(".menu-icon");

 const Main=document.querySelector(".main");
 const MiddleNav=document.querySelector(".middle-nav");



 
 MenuIcon.addEventListener("click",MenuClick=()=>{
     document.querySelector(".main").style.display= "none"; 

     document.querySelector(".close-icon").style.display= "block"; 

     document.querySelector(".menu-icon").style.display= "none"; 
     document.querySelector(".middle-nav").style.display= "block"; 
     MiddleNav.classList.replace("middle-nav","middle-Nav");
})

//  ..................close-icon....................


//  ..................menu-icon....................
const CloseICon=document.querySelector(".close-icon");

CloseICon.addEventListener("click",CloseClick=()=>{
 
    document.querySelector(".menu-icon").style.display="block";
    document.querySelector(".close-icon").style.display="none"; 
    document.querySelector(".middle-Nav").style.display= "none"; 

    MiddleNav.classList.replace("middle-Nav","middle-nav");
    document.querySelector(".main").style.display= "block"; 


})

