
// ===============================
// SCROLL REVEAL ANIMATION
// ===============================


const revealElements = document.querySelectorAll(
    ".project-card, .research-card, .timeline-item, .small-card, .skill-box"
);



const revealOnScroll = () => {


    const windowHeight = window.innerHeight;


    revealElements.forEach(element => {


        const elementTop = element.getBoundingClientRect().top;


        if(elementTop < windowHeight - 100){

            element.classList.add("show");

        }


    });


};



window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();






// ===============================
// NAVBAR BACKGROUND EFFECT
// ===============================



const navbar = document.querySelector(".navbar");



window.addEventListener("scroll", ()=>{


    if(window.scrollY > 50){


        navbar.style.background =
        "rgba(10,10,15,0.98)";


    }

    else{


        navbar.style.background =
        "rgba(10,10,15,0.9)";


    }



});







// ===============================
// ACTIVE NAV LINK
// ===============================


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(
    ".nav-links a"
);



window.addEventListener("scroll",()=>{


    let current = "";


    sections.forEach(section=>{


        const sectionTop =
        section.offsetTop - 150;


        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }


    });



    navLinks.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }


    });



});