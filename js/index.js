// Your code goes here
document.querySelector("header").style.zIndex = "2";

// mouseenter and mouseleave

let navLink = document.querySelectorAll("a.nav-link");
navLink.forEach(
    function (link) {
        link.addEventListener('mouseover', () => {
            //console.log("Mouse has entered a nav link");
            link.style.textDecoration = "underline orange 2px";
        });

        // mouseleaves
        link.addEventListener('mouseout', () => {
            //console.log("Mouse has left a nav link");
            link.style.textDecoration = "none";

        });
    }
);



// transform - scale images onmouseover


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

let btns = document.querySelectorAll(".btn");
btns.forEach(
    function(btn){

        btn.addEventListener('click', (e) => {
            
            btn.parentElement.style.display = "none";
            //e.preventDefault();
        });


    }
);

// dblclick
let imgs = document.querySelectorAll("img");
imgs.forEach(function (image) {
    image.addEventListener('dblclick', function(){
        image.style.border = "2px dashed orange";
        image.style.padding = "1em";
        image.style.borderRadius = "50%";
    });
});

//stop navigation items from refreshing the page
navLink.forEach(function(link){
    link.addEventListener('click', (e) => {
        e.preventDefault();

    });
});

