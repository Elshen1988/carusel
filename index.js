let box = document.querySelector(".box")
let slaid = document.querySelector(".slaid")
let righr = document.querySelector(".right")
let left = document.querySelector(".left")
let i = 0

let images = []

images[0] = "./imges/1.avif";
images[1] = "./imges/2.avif";
images[2] = "./imges/3.avif";
images[3] = "./imges/4.avif";
images[4] = "./imges/5.avif";
images[5] = "./imges/6.jpg";
images[6] = "./imges/7.jpg";
images[7] = "./imges/8.jpg";




setInterval(() => {

    if (i <= images.length - 1) {
        slaid.src = images[i]
        i++
    } else {
        i = 0
    }
}, 1500)


righr.addEventListener("click", () => {
    slaid.src = images[i]
    i++
    if (i > images.length - 1) {
        i = 0
    }
})
left.addEventListener("click", () => {
    slaid.src = images[i]
    i--
    if (i < 0) {
        i = 7
    }
})

