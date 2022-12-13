let next = document.getElementById("next-button")
let last = document.getElementById("last-button")
let slideContent = document.getElementById("slide-container")
let slide = document.querySelector(".slide")


slideContent.style.width = `30%`;

slideContent.style.height = `calc(30vh - 0rem)`;

next.addEventListener("click", function (){
    const slideWidth = slide.clientWidth;
    slideContent.scrollLeft += slideWidth;
});



last.addEventListener("click", function (){
    const slideWidth = slide.clientWidth;
    slideContent.scrollLeft -= slideWidth;
})