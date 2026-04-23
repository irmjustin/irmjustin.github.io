const avatar = document.getElementById("avatar");

avatar.addEventListener("mouseover",function(){
    avatar.classList.add("jump-animation")
});

avatar.addEventListener("animationend",function(){
   avatar.classList.remove("jump-animation")
});

var instaIcon = document.getElementById("insta_icon");

var xIcon = document.getElementById("x_icon");

var ghIcon = document.getElementById("github_icon");

function iconMovement(element){

    element.addEventListener("mouseover",function(){
        element.classList.add("moveIcon-animation");
    });
    element.addEventListener("animationend",function(){
        element.classList.remove("moveIcon-animation")
    });
}
iconMovement(instaIcon);
iconMovement(xIcon);
iconMovement(ghIcon);


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