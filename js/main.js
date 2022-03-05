//Navbar Functions
const navLinksNode = document.querySelector(".nav-links");
const navBurgerNode = document.querySelector(".nav-burger");
const navNode = document.querySelector("nav");

const toggleNavLinks = () => {
    navLinksNode.classList.toggle("nav-links-active");
    navBurgerNode.classList.toggle("nav-burger-active");
    navNode.classList.toggle("nav-active");
};

// Updating folder-width css variable
const rootNode = document.querySelector(":root");
const folderNode = document.querySelector(".folder");
const updateFolderWidth = () => {
    const curFolderWidth = folderNode.getBoundingClientRect().width;
    rootNode.style.setProperty("--folder-width", `${curFolderWidth}px`);
};

// Initialization of Folder
const initFolderBtn = () => {
    const weekOneBtnNode = document.querySelector(".folder-tabs > span:nth-child(1)");
    const weekTwoBtnNode = document.querySelector(".folder-tabs > span:nth-child(2)");
    const weekThreeBtnNode = document.querySelector(".folder-tabs > span:nth-child(3)");
    const weekFiveBtnNode = document.querySelector(".folder-tabs > span:nth-child(4)");

    weekOneBtnNode.innerHTML = "WEEK 1";
    weekTwoBtnNode.innerHTML = "WEEK 2";
    weekThreeBtnNode.innerHTML = "WEEK 3/4";
    weekFiveBtnNode.innerHTML = "WEEK 5";


    const folderTabsNode = document.querySelector(".folder-tabs");
    const applicationTabNode = document.createElement("span");

    const minimizeIconImgNode = document.createElement("img");
    minimizeIconImgNode.src = "../images/jumpstart-section/folder-minimize-icon.svg";
    minimizeIconImgNode.alt = "Minimize Icon";

    const shrinkIconImgNode = document.createElement("img");
    shrinkIconImgNode.src = "../images/jumpstart-section/folder-shrink-icon.svg";
    shrinkIconImgNode.alt = "Shrink Icon";

    const closeIconImgNode = document.createElement("img");
    closeIconImgNode.src = "../images/jumpstart-section/folder-close-icon.svg";
    closeIconImgNode.alt = "Close Icon";

    applicationTabNode.appendChild(minimizeIconImgNode);
    applicationTabNode.appendChild(shrinkIconImgNode);
    applicationTabNode.appendChild(closeIconImgNode);

    folderTabsNode.appendChild(applicationTabNode);
};


// Swiper.js Functions
const swiper = new Swiper('.folder-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // spaceBetween: 30,
    // effect: "fade",

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


// Window Events
window.onload = () => {
    initFolderBtn();
    updateFolderWidth();
};

window.addEventListener("resize", (evt) => {
    updateFolderWidth();
}, true);

$(document).ready(function() {
    $("a").on('click', function(event){
        if (this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            $('html,body').animate({
                scrollTop: $(hash).offset().top,
            }, 600, 'swing').promise().then(function(){
                window.location.hash = "";
                location.hash.replace('#', '');
                location.hash = '';
                window.history.replaceState({}, "", "");
            });
        }
    });
});