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

const updateFolderBtnTxt = () => {
    const weekOneBtnNode = document.querySelector(".folder-tabs > span:nth-child(1)");
    const weekTwoBtnNode = document.querySelector(".folder-tabs > span:nth-child(2)");
    const weekThreeBtnNode = document.querySelector(".folder-tabs > span:nth-child(3)");
    const weekFiveBtnNode = document.querySelector(".folder-tabs > span:nth-child(4)");
    const weekMHBtnNode = document.querySelector(".folder-tabs > span:nth-child(5)");

    if($(window).width() <= 576) {
        weekOneBtnNode.innerHTML = "W1";
        weekTwoBtnNode.innerHTML = "W2";
        weekThreeBtnNode.innerHTML = "W3";
        weekFiveBtnNode.innerHTML = "W4/5";
        weekMHBtnNode.innerHTML = "MH VIII";
    } else {
        weekOneBtnNode.innerHTML = "Week 1";
        weekTwoBtnNode.innerHTML = "Week 2";
        weekThreeBtnNode.innerHTML = "Week 3";
        weekFiveBtnNode.innerHTML = "Week 4/5";
        weekMHBtnNode.innerHTML = "MasseyHacks";
    }
}

// Initialization of Folder
const initFolderBtn = () => {
    updateFolderBtnTxt();

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
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
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


const heroJquery = $("#hero");
const windowJquery = $(window);
const folderJquery = $(".folder");
const bodyJquery = $("body");
const footerJquery = $("footer");


const updateCSSVariable = () => {
    setCSSVariable("--hero-height", heroJquery.height());
    setCSSVariable("--folder-width", folderJquery.width());
    setCSSVariable("--window-width", windowJquery.width());
    setCSSVariable("--window-height", windowJquery.height());
    setCSSVariable("--body-height", bodyJquery.height() - footerJquery.height() - heroJquery.height());
    setCSSVariable("--mentor-btn-width", $(".mentor-btn").width() + 20);
};

const calcShapePaddingConstant = () => {
    if ($(window).width() < 1024) {
        rootNode.style.setProperty("--bg-img-padding-constant", `calc(var(--bg-row-height) / ${windowJquery.height() / 10}) + 60px`);
    }
    else {
        rootNode.style.setProperty("--bg-img-padding-constant", `calc(var(--bg-row-height) / ${windowJquery.height() / 20}) + 45px`);
    }
};


// new ResizeObserver(() => {
//     updateCSSVariable();
//     calcShapePaddingConstant();
// }).observe(document.querySelector("body"));


const bgImgNodes = document.querySelectorAll("#bg-shapes img");
const bgImgTargetPos = new Map();
const bgImgRandomPos = new Map();

const lerp = (v0, v1, t) => {
    return v0 * (1 - t) + v1 * t;
};

const initRandomBgPos = () => {
    bgImgNodes.forEach(bgImgNode => {
        bgImgTargetPos.set(bgImgNode, getTargetTranslate(bgImgNode.style.transform));

        const randomPosX = -10 + Math.random() * 20;
        const randomPosY = -100 + Math.random() * 200;
        bgImgRandomPos.set(bgImgNode, [randomPosX, randomPosY]);
    });
};

const bgShapeDivs = document.querySelectorAll("#bg-shapes > div");

const getTargetTranslate = (translate) => {
    const [targetPosX, targetPosY] = translate.split(",");
    return [parseFloat(targetPosX.replace(/[^\d.-]/g, '')), (targetPosY) ? parseFloat(targetPosY.replace(/[^\d.-]/g, '')) : 0];
};

const updateBgImgPosition = () => {
    bgShapeDivs.forEach(bgShapeDiv => {
        const docHeight = $(window).height();
        const docViewTop = $(window).scrollTop();
        const docViewBottom = docViewTop + docHeight;
        const elemHeight = $(bgShapeDiv).height();
        const elemTop = $(bgShapeDiv).offset().top;
        const elemBottom = elemTop + elemHeight;


        if (docViewTop >= elemTop) {
            const percentInView = (docViewTop - elemTop) / docHeight;
            const bgImgNodes = bgShapeDiv.querySelectorAll("img");

            bgImgNodes.forEach(bgImgNode => {
                const [randomPosX, randomPosY] = bgImgRandomPos.get(bgImgNode);
                const [targetPosX, targetPosY] = bgImgTargetPos.get(bgImgNode);
                const curRandomPosX = lerp(targetPosX, randomPosX, percentInView);
                const curRandomPosY = lerp(targetPosY, randomPosY, percentInView);
                bgImgNode.style.transform = `translate(${curRandomPosX}vw, ${curRandomPosY}%)`;
            });
        }
    });
};

const isScrolledIntoView = (elem, padding) => {
    const docViewTop = $(window).scrollTop();
    const docViewBottom = docViewTop + $(window).height();
    const elemTop = $(elem).offset().top;
    const elemBottom = elemTop + $(elem).height();

    return docViewBottom > elemTop + padding;
};

const aboutSectionNode = document.querySelector("#about");

$(document).ready(function() {
    initRandomBgPos();
    updateBgImgPosition();
    initFolderBtn();
    updateCSSVariable();
    calcShapePaddingConstant();

    $("a").on('click', function(event){
        if (this.hash !== ""){
            event.preventDefault();
            var hash = this.hash;
            $('html,body').animate({
                scrollTop: $(hash).offset().top,
            }, 600, 'swing').promise().then(function(){
                /*window.location.hash = "";
                location.hash.replace('#', '');
                location.hash = '';
                window.history.replaceState({}, "", "");*/
            });
        }
    });

    if (isScrolledIntoView($("#about"), 30)) {
        jsCounter(aboutSectionNode);
    }
});

$(window).resize(() => {
    updateCSSVariable();
    calcShapePaddingConstant();
    updateFolderBtnTxt();
});

$(window).scroll(() => {
    if (isScrolledIntoView($("#about"), 30)) {
        jsCounter(aboutSectionNode);
    }
    updateBgImgPosition();
});
