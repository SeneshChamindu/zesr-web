// Typing Effect

const text = [
    "Web Developer",
    "UI Designer",
    "HTML • CSS • JavaScript",
    "Welcome To ZESR"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function type(){

    current = text[i];

    if(!isDeleting){
        typing.textContent = current.substring(0,j++);
        if(j > current.length){
            isDeleting = true;
            setTimeout(type,1200);
            return;
        }
    }else{
        typing.textContent = current.substring(0,j--);
        if(j == 0){
            isDeleting = false;
            i++;
            if(i >= text.length) i = 0;
        }
    }

    setTimeout(type,isDeleting ? 60 : 120);

}

type();


// Dark Mode

const modeBtn = document.getElementById("mode");

modeBtn.onclick = () =>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
modeBtn.innerHTML="🌙";
}else{
modeBtn.innerHTML="☀";
}

};


// Mobile Menu

const menuBtn = document.getElementById("menu");
const nav = document.querySelector("nav");

menuBtn.onclick = ()=>{

nav.classList.toggle("show");

};


// Scroll Reveal

const reveal=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

let height=window.innerHeight;

reveal.forEach(box=>{

let top=box.getBoundingClientRect().top;

if(top<height-120){
box.classList.add("active");
}

});

});


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "🔇";
    } else {
        music.pause();
        musicBtn.innerHTML = "🔊";
    }
});
