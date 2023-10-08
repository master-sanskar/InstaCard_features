var btn = document.querySelector("button")
var h4 = document.querySelector("h4")

var flag = 0
btn.addEventListener("click", function () {
    if (flag == 0) {
        h4.innerHTML = "FRIENDS"
        h4.style.color = "green"
        console.log("clicked")
        btn.innerHTML = "Remove Friend"
        flag = 1
    } 
    else {
        h4.innerHTML = "STRANGER"
        h4.style.color = "red"
        console.log("clicked again")
        btn.innerHTML = "Add friend"
        flag = 0
    }
})

var tl = gsap.timeline()

tl.from("#card img",{
   scale:0,
   duration:1,
   opacity:0,
   rotateY:360,
})