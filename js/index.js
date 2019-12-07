// Your code goes here

// mouseenter and mouseleave

let navLink = document.querySelectorAll(".nav-link");
navLink.forEach(
    function(link){
        link.addEventListener('mouseenter', () => {
            console.log(navLink);
            console.log("Mouse has entered a nav link");
        });
        
        // mouseleaves
        link.addEventListener('mouseleave', () => {
           console.log(navLink);
           console.log("Mouse has left a nav link");
        });
    }
);



// mouseleaves
navLink.addEventListener('mouseleave', () => {
   console.log(navLink);
   console.log("Mouse has left a nav link");
});

// transform - scale images onmouseover
 let image = document.querySelectorAll(".image-content img");
  image.forEach(
      function(image){
        image.addEventListener('onmouseover', () => {
            console.log("image");
       
       });

      }
  );
 image.addEventListener('onmouseover', () => {
     console.log("image");

});

