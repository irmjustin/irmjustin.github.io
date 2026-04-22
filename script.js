const avatar = document.getElementById("avatar");

avatar.addEventListener("mouseover",function(){
    avatar.classList.add("jump-animation")
});

avatar.addEventListener("animationend",function(){
   avatar.classList.remove("jump-animation")
});

const instaIcon = document.getElementById("insta_icon");

instaIcon.addEventListener("mouseover",function(){
    instaIcon.classList.add("moveIcon-animation");
});

instaIcon.addEventListener("animationend",function(){
    instaIcon.classList.remove("moveIcon-animation");
});

const xIcon = document.getElementById("x_icon");

xIcon.addEventListener("mouseover",function(){
    xIcon.classList.add("moveIcon-animation");
});

xIcon.addEventListener("animationend",function(){
    xIcon.classList.remove("moveIcon-animation");
});

const ghIcon = document.getElementById("github_icon");

ghIcon.addEventListener("mouseover",function(){
    ghIcon.classList.add("moveIcon-animation");
});

ghIcon.addEventListener("animationend",function(){
    ghIcon.classList.remove("moveIcon-animation");
});

const toggle = document.getElementById("modeToggle");

toggle.addEventListener("click",function(){
    document.body.classList.toggle("light-mode");
    if(document.body.classList.contains("light-mode")){
        toggle.src = "Images/light-mode.png"
    }
    else {
        toggle.src = "Images/moon.png"
    }
});