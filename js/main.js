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
const setCSSVariable = (cssVar, newVal) => {
    rootNode.style.setProperty(cssVar, `${newVal}px`);
}

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
    minimizeIconImgNode.src = "images/jumpstart-section/folder-minimize-icon.svg";
    minimizeIconImgNode.alt = "Minimize Icon";

    const shrinkIconImgNode = document.createElement("img");
    shrinkIconImgNode.src = "images/jumpstart-section/folder-shrink-icon.svg";
    shrinkIconImgNode.alt = "Shrink Icon";

    const closeIconImgNode = document.createElement("img");
    closeIconImgNode.src = "images/jumpstart-section/folder-close-icon.svg";
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


const addCommaToNum = (value) => {
    let finalString = "";
    const valueString = value.toString();

    for (let i = valueString.length - 1; i >= 0; i--) {
        if ((valueString.length - 1 - i) % 3 === 0) {
            finalString = ',' + finalString;
        }
        finalString = valueString.charAt(i) + finalString;
    }

    return finalString.substring(0, finalString.length - 1);
};

const jsCounter = (parentElement) => {
    const allCounterSpans = parentElement.querySelectorAll(".js-counter");

    allCounterSpans.forEach(span => {
        const targetValue = parseInt(span.dataset.targetValue);
        const time = parseInt(span.dataset.time);
        const counted = span.dataset.counted;

        const totalCallAmt = time / 5;
        const increment = Math.round(targetValue / totalCallAmt);

        if (counted === "true") {
            return;
        }

        span.dataset.counted = "true";
        setInterval(() => {
            const curAmt = parseInt(span.innerHTML.replaceAll(',', ''));

            if (curAmt >= targetValue) {
                // span.innerHTML = targetValue.toString();
                span.innerHTML = addCommaToNum(targetValue);
                clearInterval();
            }
            else {
                // span.innerHTML = (curAmt + increment).toString();
                span.innerHTML = addCommaToNum(curAmt + increment);
            }
        }, 5);
    });
};

const bgShapesImgNodes = document.querySelectorAll("#bg-shapes img");
const randomMovement = () => {
    bgShapesImgNodes.forEach((bgShapesImgNode) => {
        const randomX = -100 + Math.random() * 200;
        const randomY = -100 + Math.random() * 200;
        bgShapesImgNode.style.setProperty("transform", `translate(${randomX}%, ${randomY}%)`);
    });
};


const calcShapePaddingConstant = () => {
    rootNode.style.setProperty("--bg-img-padding-constant", `calc(var(--bg-row-height) / ${$(window).height() / 85}) + 37px`);
};



const updateCSSVariable = () => {
    setCSSVariable("--folder-width", $(".folder").width());
    setCSSVariable("--window-width", $(window).width());
    setCSSVariable("--window-height", $(window).height());
    setCSSVariable("--body-height", $("body").height() - $("footer").height() - $("#hero").height());

    setCSSVariable("--hero-height", $("#hero").height());
    setCSSVariable("--about-height", $("#about").height());
    setCSSVariable("--faq-height", $("#faq").height());
    setCSSVariable("--jumpstart-height", $("#jumpstart").height());
    setCSSVariable("--sponsors-height", $("#sponsors").height());
};

// Window Events
window.onload = () => {
    initFolderBtn();
    updateCSSVariable();
    calcShapePaddingConstant();
};

window.addEventListener("resize", (evt) => {
    updateCSSVariable();
    calcShapePaddingConstant();
}, true);



const isScrolledIntoView = (elem, padding) => {
    const docViewTop = $(window).scrollTop();
    const docViewBottom = docViewTop + $(window).height();
    const elemTop = $(elem).offset().top;
    const elemBottom = elemTop + $(elem).height();

    return docViewBottom > elemTop + padding;
};

const aboutSectionNode = document.querySelector("#about");

$(window).scroll(() => {
    if (isScrolledIntoView($("#about"), 30)) {
        jsCounter(aboutSectionNode);
    }
});

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