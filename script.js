/* =====================================================
   HEADER
===================================================== */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

    const isOpen = navLinks.classList.toggle("open");

    document.body.classList.toggle("menu-open", isOpen);

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
    );

});

document.addEventListener("keydown", (event) => {

    if (event.key !== "Escape") {
        return;
    }

    if (!navLinks.classList.contains("open")) {
        return;
    }

    navLinks.classList.remove("open");

    document.body.classList.remove("menu-open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menú");
    menuToggle.focus();

});


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

const links = document.querySelectorAll(".nav-link");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        document.body.classList.remove("menu-open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");

    });

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");

const updateActiveNavigation = () => {

    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");

        const link = document.querySelector(
            `.nav-link[href="#${sectionId}"]`
        );

        if (!link) {
            return;
        }

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            links.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        }

    });

};

window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   YEAR
===================================================== */

const yearElement =
    document.getElementById("year");

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}


/* =====================================================
   TERMINAL HOVER EFFECT
===================================================== */

const terminal = document.querySelector(".terminal");

if (terminal) {

    terminal.addEventListener(
        "mouseenter",
        () => {

            terminal.style.transform =
                "translateY(-5px) rotate(0deg)";

            terminal.style.transition =
                "transform 0.4s ease";

        }
    );

    terminal.addEventListener(
        "mouseleave",
        () => {

            terminal.style.transform =
                "translateY(0) rotate(1.5deg)";

        }
    );

}