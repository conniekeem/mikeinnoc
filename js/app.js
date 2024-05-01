// logo title hover change to korean text
function mouseOver(element) {
    element.innerText = "코니";
}

// logo title nohover change to english text
function mouseOut(element) {
    element.innerText = "cone";
}

//search for those elements
let showText1 = document.querySelector(".projectNames1");
let showText2 = document.querySelector(".projectNames2");
let showText3 = document.querySelector(".projectNames3");

//toggles the titles of the projects
function showProjects1(element) {
    showText1.classList.toggle("projectNames1");
}

function showProjects2(element) {
    showText2.classList.toggle("projectNames2");
}

function showProjects3(element) {
    showText3.classList.toggle("projectNames3");
}

/* ------------------------------------------------------------------------- */

// scrolling
// $(window).on("scroll", function () {
//     var parallax = $(".parallax");
//     var scrollPosition = $(this).scrollTop();
//     parallax.css("transform", "translateY("+scrollPosition*.05 +"px"+")");
//     // console.log(scrollPosition);
// });

// keep track of previous scroll position
// let prevScrollPos = window.scrollY;

// window.addEventListener('scroll', function() {
//   // current scroll position
//   const currentScrollPos = window.scrollY;

//   if (prevScrollPos > currentScrollPos) {
//     // user has scrolled up
//     document.querySelector('.menu').classList.add('show');
//   } else {
//     // user has scrolled down
//     document.querySelector('.menu').classList.remove('show');
//   }

//   // update previous scroll position
//   prevScrollPos = currentScrollPos;
// });


//auto typing feature
var typed = new Typed(".typing", {
    strings: ["Connie Kim!", "an Artist!", "a Designer!", "a Coder!"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  })


