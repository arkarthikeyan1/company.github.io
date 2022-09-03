let i=document.querySelector(".toggle");
let show=document.querySelector(".navlist");
i.addEventListener("click",()=>{
    // let change = document.getElementsByClassName("navlink_bar");
    i.classList.toggle("active");
    show.classList.toggle("active");
})
