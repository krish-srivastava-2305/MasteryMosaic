let cursor = document.querySelector(".cursor");
let main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        left:dets.x,
        top:dets.y
    })
})

// let first = document.querySelector(".first");
// let second = document.querySelector(".second");
// let third = document.querySelector(".third");
// form.addEventListener("mouseenter",function(){
//     gsap.to([first,second,third],{
//         scale:6,
//         duration:1
//     })
// })

gsap.from(".nav",{
    y:100,
    opacity:0,
    duration:1
})
gsap.from([".first",".second",".third"],{
    y:100,
    opacity:0,
    duration:1,
    delay:1
})