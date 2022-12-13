let slide = document.querySelector(".slide");
let next = document.getElementById("next")
let last = document.getElementById("last")
let container = document.querySelector(".list-content")

let btnOne = document.getElementById("one")
let btnTwo = document.getElementById("two")
let btnThree = document.getElementById("three")

let carousel = document.querySelectorAll(".point")


btnOne.addEventListener("click", function (){
    console.log("cliquer")
    carousel = btnOne.dataset.slideTo = "0"
})
btnTwo.addEventListener("click", function (){
    console.log("cliquer")
    carousel = slide.data.slideTo = "2"
    carousel = btnThree.dataset.next = "2"
    console.log(carousel)
})
btnThree.addEventListener("click", function (){
    console.log("cliquer")
    carousel = btnThree.dataset.slideTo = "2"
})

next.addEventListener("click", function (){
    const slideWidth = slide.clientWidth
    container.scrollLeft -= slideWidth;
})
last.addEventListener("click", function (){
    const slideWidth = slide.clientWidth
    container.scrollLeft += slideWidth;
})


