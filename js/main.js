//Navbar Functions
const navLinksNode = document.querySelector(".nav-links");
const navBurgerNode = document.querySelector(".nav-burger");
const navNode = document.querySelector("nav");

const toggleNavLinks = () => {
    navLinksNode.classList.toggle("nav-links-active");
    navBurgerNode.classList.toggle("nav-burger-active");
    navNode.classList.toggle("nav-active");
};

//Startup Folder Functions
const weekTwoCoverNode = document.querySelector(".folder-cover-slide:nth-child(1)");
const weekThreeCoverNode = document.querySelector(".folder-cover-slide:nth-child(2)");
const weekFiveCoverNode = document.querySelector(".folder-cover-slide:nth-child(3)");

const openTab = (tabID) => {
    switch (tabID) {
        case 1:
            weekTwoCoverNode.classList.add("d-none");
            weekThreeCoverNode.classList.add("d-none");
            weekFiveCoverNode.classList.add("d-none");
            break;
        case 2:
            weekTwoCoverNode.classList.remove("d-none");
            weekThreeCoverNode.classList.add("d-none");
            weekFiveCoverNode.classList.add("d-none");
            break;
        case 3:
            weekTwoCoverNode.classList.add("d-none");
            weekThreeCoverNode.classList.remove("d-none");
            weekFiveCoverNode.classList.add("d-none");
            break;
        case 4:
            weekTwoCoverNode.classList.add("d-none");
            weekThreeCoverNode.classList.add("d-none");
            weekFiveCoverNode.classList.remove("d-none");
            break;
    }
};

const initFolderBtn = () => {
    const weekOneBtnNode = document.querySelector(".startup-folder-buttons > span:nth-child(1)");
    const weekTwoBtnNode = document.querySelector(".startup-folder-buttons > span:nth-child(2)");
    const weekThreeBtnNode = document.querySelector(".startup-folder-buttons > span:nth-child(3)");
    const weekFiveBtnNode = document.querySelector(".startup-folder-buttons > span:nth-child(4)");

    weekOneBtnNode.innerHTML = "WEEK 1";
    weekTwoBtnNode.innerHTML = "WEEK 2";
    weekThreeBtnNode.innerHTML = "WEEK 3/4";
    weekFiveBtnNode.innerHTML = "WEEK 5";


    weekOneBtnNode.addEventListener("click", () => {
        openTab(1);
    });

    weekTwoBtnNode.addEventListener("click", () => {
        openTab(2);
    });

    weekThreeBtnNode.addEventListener("click", () => {
        openTab(3);
    });

    weekFiveBtnNode.addEventListener("click", () => {
        openTab(4);
    });
};

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

swiper.on('slideChange', function () {
    // openTab(swiper.realIndex + 1);
});

window.onload = () => {
    initFolderBtn();
};
