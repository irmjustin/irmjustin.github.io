var avatar = document.getElementById("avatar");
var icons = document.querySelectorAll(".social-icon");

function elementsAnimation(element,animationName){

    element.addEventListener("mouseover",function(){
        element.classList.add(animationName);
    });
    element.addEventListener("animationend",function(){
        element.classList.remove(animationName)
    });
}
icons.forEach(function(icon){
    elementsAnimation(icon,"moveIcon-animation");
});
elementsAnimation(avatar,"jump-animation");


const toggle = document.getElementById("modeToggle");

toggle.addEventListener("click",function(){
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
        toggle.src = "assets/Icons/light-mode.png"
    }
    else {
        toggle.src = "assets/Icons/moon.png"
    }
});