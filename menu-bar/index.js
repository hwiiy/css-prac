let firstUnderline = document.getElementById("first_underline")
let secondUnderline =document.getElementById("second_underline")
let firstMenus = document.querySelectorAll("nav:first-child a")
let secondMenus = document.querySelectorAll("nav:nth-child(2) a")


firstMenus.forEach((menu)=>
    menu.addEventListener("click",(e)=>Indicator(e))
)

secondMenus.forEach((menu)=>menu.addEventListener("click",(e)=>Indicator2(e)))

function Indicator(e){
    firstUnderline.style.left = e.currentTarget.offsetLeft + "px";
    firstUnderline.style.width = e.currentTarget.offsetWidth + "px";
    firstUnderline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight+"px"
}

function Indicator2(e){
    secondUnderline.style.left = e.currentTarget.offsetLeft + "px";
    secondUnderline.style.width = e.currentTarget.offsetWidth + "px";
    secondUnderline.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight+"px"
}



