/* import { gsap } from "gsap"; */

// Your code goes here
document.querySelector("header").style.zIndex = "2"; // for aesthetic purposes (so the images don't cover the navbar when enlarged as a consecuence of the mouseover)

// mouseover and mouseout

let navLink = document.querySelectorAll("a.nav-link");
navLink.forEach(
    function (link) {
        // mouseover
        link.addEventListener('mouseover', () => {
            //console.log("Mouse has entered a nav link");
            link.style.textDecoration = "underline orange 2px";
        });

        // mouseout
        link.addEventListener('mouseout', () => {
            //console.log("Mouse has left a nav link");
            link.style.textDecoration = "none";

        });
    }
);



// transform - scale images onmouseenter onmouseleave


let images = document.querySelectorAll(".img-content img");
images.forEach(
    function (image) {
        image.addEventListener('mouseenter', () => {
            //console.log("onmouseenter");
            image.style.transform = "scale(1.1)";
            image.style.transition = "transform 0.3s";


        });
        image.addEventListener('mouseleave', () => {
            //console.log("onmouseleave");
            image.style.transform = "scale(1)";
            image.style.transition = "transform 0.3s";

        });

    }
);

//onclick
let destination = document.querySelectorAll("div.destination");
destination.forEach(function (div) {
    div.addEventListener('click', (e) => {
        div.style.backgroundColor = "yellow";
        div.style.borderRadius = "20px";
        div.style.padding = "1em 2em";

    });

});

let btns = document.querySelectorAll(".btn");
btns.forEach(
    function (btn) {

        btn.addEventListener('click', (e) => {

            btn.style.backgroundColor = "orange";
            e.stopPropagation(); //demostrating how to counter the "bubbling" and how stop propagation works 
        });


    }
);

// dblclick
let imgs = document.querySelectorAll("img");
imgs.forEach(function (image) {
    image.addEventListener('dblclick', () => {
        image.style.border = "2px dashed orange";
        image.style.padding = "1em";
        image.style.borderRadius = "50%";
    });
});


// auxclick

let pars = document.querySelectorAll("p");
pars.forEach(function (par) {
    par.addEventListener('auxclick', () => {
        par.style.color = "dodgerblue";
    });
});

// wheel



const parrs = document.querySelectorAll('p');



parrs.forEach(function (par) {
    let scale = 1;
    par.addEventListener('wheel', (e) => {

        e.preventDefault();

        scale += event.deltaY * 0.01;
        scale = Math.min(Math.max(0.2, scale), 5);
        par.style.transform = `scale(${scale})`;

    });

});

// keydown - logs to the console pressed keys

document.addEventListener('keydown', (e) => {
    console.log(` ${e.code}`);
});



//stop navigation items from refreshing the page
navLink.forEach(function (link) {
    link.addEventListener('click', (e) => {
        e.preventDefault();

    });
});


let bus = document.querySelector(".bus");

bus.zIndex = -1;
gsap.to(bus, {duration: 20, x: 1000});