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
const weekTwoImgNode = document.querySelector("#week-2-img");
const weekThreeImgNode = document.querySelector("#week-3-img");
const weekFiveImgNode = document.querySelector("#week-5-img");

const openTab = (tabID) => {
    switch (tabID) {
        case 1:
            weekTwoImgNode.classList.add("d-none");
            weekThreeImgNode.classList.add("d-none");
            weekFiveImgNode.classList.add("d-none");
            break;
        case 2:
            weekTwoImgNode.classList.remove("d-none");
            weekThreeImgNode.classList.add("d-none");
            weekFiveImgNode.classList.add("d-none");
            break;
        case 3:
            weekTwoImgNode.classList.add("d-none");
            weekThreeImgNode.classList.remove("d-none");
            weekFiveImgNode.classList.add("d-none");
            break;
        case 4:
            weekTwoImgNode.classList.add("d-none");
            weekThreeImgNode.classList.add("d-none");
            weekFiveImgNode.classList.remove("d-none");
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

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

swiper.on('slideChange', function () {
    openTab(swiper.realIndex + 1);
});

window.onload = () => {
    initFolderBtn();
};
