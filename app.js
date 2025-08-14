let pillars = document.getElementById("two-pillars");
let topic = document.getElementById("topics");
let us = document.getElementById("uss");
let road = document.getElementById("roadd");

pillars.addEventListener("click", () => {
    window.scrollTo({
        top: 655,
        behavior: "smooth"
    })
})

topic.addEventListener("click", () => {
    window.scrollTo({
        top: 1330,
        behavior: "smooth"
    })
})

us.addEventListener("click", () => {
    window.scrollTo({
        top: 2200,
        behavior: "smooth"
    })
})

road.addEventListener("click", () => {
    window.scrollTo({
        top: 2700,
        behavior: "smooth"
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const topBtn = document.getElementById("back-btn");

    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    });
});

