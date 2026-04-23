var avatar = document.getElementById("avatar");

var instaIcon = document.getElementById("insta_icon");

var xIcon = document.getElementById("x_icon");

var ghIcon = document.getElementById("github_icon");

function elementsAnimation(element,animationName){

    element.addEventListener("mouseover",function(){
        element.classList.add(animationName);
    });
    element.addEventListener("animationend",function(){
        element.classList.remove(animationName)
    });
}
elementsAnimation(instaIcon,"moveIcon-animation");
elementsAnimation(xIcon,"moveIcon-animation");
elementsAnimation(ghIcon,"moveIcon-animation");
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