// // query string from the URL that begins with a question mark
// const queryString = window.location.search;

// // use query string to create a URLSearchParams object:
// const params = new URLSearchParams(queryString);

// // access the parameter we want using the "get" method:
// const rollType = params.get("roll")

// /* ------------------------------------------------------------------------- */
// // use the URL parameter to update our page.

// // Update the header text
// const headerElement = document.querySelector("#rollsHeader");
// headerElement.innerText = rollType + " Cinnamon Roll";

// // Update the image
// const rollImage = document.querySelector(".productThumbnail");
// const rollImageFile = rolls[rollType]["imageFile"];
// rollImage.src = "./assets/products/" + rollImageFile;

/* ------------------------------------------------------------------------- */

// logo title hover
function mouseOver(element) {
    element.innerText = "코니";
}

function mouseOut(element) {
    element.innerText = "cone";
}

function onClick(element) {
    const titles = document.querySelector(".show");
    titles.style.display = block;
}

// scrolling
$(window).on("scroll", function () {
    var parallax = $(".parallax");
    var scrollPosition = $(this).scrollTop();
    parallax.css("transform", "translateY("+scrollPosition*.05 +"px"+")");
    console.log(scrollPosition);
});

var typed = new Typed(".autoType", {
    strings: ["Connie Kim!", "an Artist!", "a Designer!", "a Coder!"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
  })


