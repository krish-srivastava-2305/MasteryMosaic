const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

const fixedImage = document.querySelector(".fixed-image");
const elemCon = document.querySelector(".elem-con")
elemCon.addEventListener("mouseenter",()=>{
    fixedImage.style.display = 'block';
})
elemCon.addEventListener("mouseleave",()=>{
    fixedImage.style.display = 'none';
})
const elems = document.querySelectorAll(".elem")
elems.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        let src = e.getAttribute("data-image")
        fixedImage.style.backgroundImage = `url("${src}")`   
    })
})
const imgCon = document.querySelector('.right-pics')
const exec = document.querySelector("#exec")
const selector3 = document.querySelector("#s3")
const project = document.querySelector("#project")
const selector2 = document.querySelector("#s2")
const design = document.querySelector("#design")
const selector1 = document.querySelector("#s1")
const desc = document.querySelector("#desc")

design.addEventListener("click",()=>{
    design.style.color = 'white'
    selector1.style.visibility = 'visible'
    desc.innerHTML = 'Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.'
    imgCon.style.backgroundImage = `url('https://i.pinimg.com/564x/e0/99/46/e0994695995dbce87d7befac44339649.jpg')`

    exec.style.color = '#5151513c'
    selector3.style.visibility = 'hidden'

    project.style.color = '#5151513c'
    selector2.style.visibility = 'hidden'
})

project.addEventListener("click",()=>{
    project.style.color = 'white'
    selector2.style.visibility = 'visible'
    desc.innerHTML = 'Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.'
    imgCon.style.backgroundImage = `url('https://i.pinimg.com/564x/07/a5/3b/07a53b6f08051d5413dd4a96772ae837.jpg')`

    design.style.color = '#5151513c'
    selector1.style.visibility = 'hidden'

    exec.style.color = '#5151513c'
    selector3.style.visibility = 'hidden'
})

exec.addEventListener("click",()=>{
    exec.style.color = 'white'
    selector3.style.visibility = 'visible'
    desc.innerHTML = 'We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.'
    imgCon.style.backgroundImage = `url('https://i.pinimg.com/564x/b0/f3/c9/b0f3c9247b03a4388051dd369958613c.jpg')`

    project.style.color = '#5151513c'
    selector2.style.visibility = 'hidden'

    design.style.color = '#5151513c'
    selector1.style.visibility = 'hidden'
})

const pg4 = document.querySelector(".page4")
const pg5 = document.querySelector(".page5")
pg4.addEventListener("scroll",()=>{
    pg5.style.top = "600vh"
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
  });