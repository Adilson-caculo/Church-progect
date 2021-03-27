//Menu Resonsive
let show = true ;

const menuSection = document.querySelector(".menu-section")
const menuToggle = menuSection.querySelector(".menu-toggle")
const link = document.getElementById("link")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")

menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)
    show = !show
    
})
link.addEventListener( "click",() =>{
    menuSection.classList.toggle("on", show)
    document.body.style.overflow="initial"
} )
link2.addEventListener( "click",() =>{
    menuSection.classList.toggle("on", show)
    document.body.style.overflow="initial"
} )
link3.addEventListener( "click",() =>{
    menuSection.classList.toggle("on", show)
    document.body.style.overflow="initial"
} )

//slider auto 
let images = ['Imagens/download.jpg','Imagens/images.jpg','Imagens/horizonte.jpg',]
let i = 0
document.getElementById("image").style.transitionDuration="0.5s"
function slideShow(){
    document.getElementById("image").src=images[i]

    if(i<images.length-1){
        i++
    }
    else{
        i=0
    } 
    setTimeout("slideShow()" , 5000)
}
window.onload = slideShow;

document.getElementById("image").style.width="100%"

document.getElementById("image").style.height="300px"
