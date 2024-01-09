let cursor = document.querySelector(".cursor");
let main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        left:dets.x,
        top:dets.y
    })
})

let form = document.querySelector("form");
function cursorAnimation(){
    form.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:10,
            opacity:0.3
        })
    })
    form.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })
}
cursorAnimation()

let icon = document.querySelector(".fas");
let button = document.querySelector(".submit")
button.addEventListener("mouseenter",function(){
    gsap.to(icon,{
        color:"white"
    })
})
button.addEventListener("mouseleave",function(){
    gsap.to(icon,{
        color:"black"
    })
})

let tl = gsap.timeline()
tl
  .from(".nav",{
    opacity:0,
    y:300,
    duration:1
  })
  .from(".main",{
    opacity:0,
    y:300,
    duration:1
  })