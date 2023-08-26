//localStorage option color
let minColor = localStorage.getItem("color-option");

let backgroundOption = true;
let backgroundsetInteval;

if (minColor !== null) {
    document.documentElement.style.setProperty("--main-color", minColor);
    document.querySelectorAll(".list-color li ").forEach((el) => {
        el.classList.remove("active");
        if (el.dataset.color === minColor) {
            el.classList.add("active");
        }
    });
}
let backgroundlocalStorage = localStorage.getItem("option-background");
//local Storage background
if (backgroundlocalStorage !== null) {
    // document.querySelectorAll(".rondom-background span").forEach((el) => {
    //     el.classList.remove("active");
    // });
    if (backgroundlocalStorage == "true") {
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }
    document.querySelectorAll(".rondom-background span").forEach((elment) => {
        elment.classList.remove("active");
    });
    if ((backgroundlocalStorage = "true")) {
        document.querySelector(".rondom-background .yes").classList.add("active");
    } else {
        document.querySelector(".rondom-background .no").classList.add("active");
    }
}
// End local Storage background

let listColor = document.querySelectorAll(".list-color li");

listColor.forEach((li) => {
    li.addEventListener("click", (li) => {
        document.documentElement.style.setProperty("--main-color", li.target.dataset.color);
        localStorage.setItem("color-option", li.target.dataset.color);
        handleCtive(li);
    });
});
// background Rondom
let backgroundEls = document.querySelectorAll(".rondom-background span ");

backgroundEls.forEach((span) => {
    span.addEventListener("click", (span) => {
        span.target.parentElement.querySelectorAll(".active").forEach((el) => {
            el.classList.remove("active");
        });
        span.target.classList.add("active");
        //ckicked background
        if (span.target.dataset.background === "yes") {
            backgroundOption = true;
            backgroundIamges();
            // backgroundlocalStorage.
            localStorage.setItem("option-background", true);
        } else {
            backgroundOption = false;
            localStorage.setItem("option-background", false);
            clearInterval(backgroundsetInteval);
        }
    });
});
//setting
document.querySelector(".setting-fa-gear > i").onclick = function () {
    this.classList.toggle("fa-spin");
    document.querySelector(".setting-box").classList.toggle("open");
};

let landingpage = document.querySelector(".landing-page");

let arryImages = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

function backgroundIamges() {
    if (backgroundOption === true) {
        backgroundsetInteval = setInterval(() => {
            let randomImaes = Math.floor(Math.random() * arryImages.length);
            landingpage.style.backgroundImage = `url("../images/${arryImages[randomImaes]}")`;
        }, 10000);
    }
}
//progess skills
let skillsContainer = document.querySelector(".container-skiles");
let progressSpans = document.querySelectorAll(".container-skiles span");
window.onscroll = function () {
    if (window.scrollY >= skillsContainer.offsetTop) {
        // console.log("hosa");
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
};
//popup
let containerImagesBox = document.querySelectorAll(".box-gallery img");
// console.log(containerImagesBox);
containerImagesBox.forEach((img) => {
    img.addEventListener("click", (e) => {
        //Create overly
        let overly = document.createElement("div");
        overly.className = "overlay-popup";
        document.body.appendChild(overly);
        ///create div
        let popupBox = document.createElement("div");
        popupBox.className = "box-popup";
        overly.appendChild(popupBox);
        //Create HeaderIame
        if (img.alt !== null) {
            let headerImge = document.createElement("h3");
            let textHeaderImge = document.createTextNode(img.alt);
            headerImge.appendChild(textHeaderImge);
            popupBox.appendChild(headerImge);
        }
        //Create img
        let popupimg = document.createElement("img");
        popupimg.src = img.src;
        // console.log(imgpopup);
        popupBox.appendChild(popupimg);
        ///Create  Butten Close box
        let buttenClose = document.createElement("span");
        buttenClose.className = "butten-close";
        let textButten = document.createTextNode("x");
        buttenClose.appendChild(textButten);
        popupBox.appendChild(buttenClose);
    });
});

document.addEventListener("click", (e) => {
    if (e.target.className == "butten-close") {
        e.target.parentNode.remove();
        document.querySelector(".overlay-popup").remove();
    }
});
//Scorll
let allBulttes = document.querySelectorAll(".bultte");
let links = document.querySelectorAll(".links");

function mainSecroll(elments) {
    elments.forEach((el) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth",
            });
        });
    });
}
mainSecroll(allBulttes);
mainSecroll(links);

//Handle active butten
function handleCtive(el) {
    el.target.parentElement.querySelectorAll(".active").forEach((e) => {
        e.classList.remove("active");
    });
    el.target.classList.add("active");
}

//Show Bulttes
let containerBulttes = document.querySelector(".nav-bulttes");
let bulttesSpan = document.querySelectorAll(".bulttes-option span ");

let bultteslacolStorage = localStorage.getItem("option_bulttes");

if (bultteslacolStorage !== null) {
    bulttesSpan.forEach((span) => {
        span.classList.remove("active");
    });
    if (bultteslacolStorage === "block") {
        containerBulttes.style.display = "block";
        document.querySelector(".bulttes-option .yes").classList.add("active");
    } else {
        containerBulttes.style.display = "none";
        document.querySelector(".bulttes-option .no").classList.add("active");
    }
}

bulttesSpan.forEach((span) => {
    span.addEventListener("click", (span) => {
        if (span.target.dataset.display === "show") {
            containerBulttes.style.display = "block";
            localStorage.setItem("option_bulttes", "block");
        } else {
            containerBulttes.style.display = "none";
            localStorage.setItem("option_bulttes", "none");
        }
        handleCtive(span);
    });
});
//Reseat
document.querySelector(".reseat").onclick = function () {
    localStorage.clear();

    // localStorage.removeItem("color-option");
    // localStorage.removeItem("color-option");
    window.location.reload();
};

// Open Toggle Menu
let thelinks = document.querySelector(".links");
let toggleBtn = document.querySelector(".toggle-menu");

toggleBtn.onclick = function (e) {
    e.stopPropagation();
    this.classList.toggle("open");
    thelinks.classList.toggle("open");
};

document.addEventListener("click", (e) => {
    if (e.target !== toggleBtn && e.target !== thelinks) {
        if (thelinks.classList.contains("open")) {
            this.classList.toggle("open");
            thelinks.classList.toggle("open");
        }
    }
});

thelinks.onclick = function (e) {
    e.stopPropagation();
};
