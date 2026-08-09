// ================================
// MOBILE MENU
// ================================

const menuButton = document.getElementById("menuButton");
const navMenu = document.querySelector(".nav-menu");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            menuButton.textContent = "✕";
        } else {
            menuButton.textContent = "☰";
        }
    });
}


// ================================
// CLOSE MOBILE MENU AFTER CLICK
// ================================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");

        if (menuButton) {
            menuButton.textContent = "☰";
        }
    });
});


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all the fields.");
            return;
        }

        alert("Thank you, " + name + "! Your message is ready to send.");

        contactForm.reset();
    });
}


// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .detail-box, .timeline-item"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);
});


// ================================
// ACTIVE NAVIGATION LINK
// ================================

const sections = document.querySelectorAll("section[id]");

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    '.nav-menu a[href="#' + entry.target.id + '"]'
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }
            }
        });

    },
    {
        threshold: 0.35
    }
);


sections.forEach((section) => {
    sectionObserver.observe(section);
});


// ================================
// MOUSE PARALLAX EFFECT
// ================================

const heroImage = document.querySelector(".hero-image-wrapper");

if (heroImage && window.innerWidth > 900) {

    document.addEventListener("mousemove", (event) => {

        const x = (window.innerWidth / 2 - event.clientX) / 70;
        const y = (window.innerHeight / 2 - event.clientY) / 70;

        heroImage.style.transform =
            `translate(${x}px, ${y}px)`;
    });
}


// ================================
// CURRENT YEAR
// ================================

const yearElement = document.querySelector(".footer-bottom p");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.innerHTML =
        `© ${currentYear} MyPortfolio. All Rights Reserved.`;
}