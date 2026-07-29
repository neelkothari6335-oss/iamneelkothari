// ================================
// Neel Kothari Luxury Travel Website
// ================================

// Smooth Fade Animation

const elements = document.querySelectorAll(
".card, .reel-card, .service, .about, .contact"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

elements.forEach((el)=>{

el.classList.add("fade");

observer.observe(el);

});

// Header Background on Scroll

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="rgba(0,0,0,.90)";

}else{

header.style.background="rgba(5,5,5,.65)";

}

});

// Smooth Navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Console Message

console.log("Welcome to Neel Kothari | Luxury Travel Storyteller");