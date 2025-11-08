document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check for a saved theme in localStorage and apply it on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.classList.add(savedTheme);
    }

    // Add click event listener to the button
    themeToggle.addEventListener('click', () => {
        // Toggle the .dark-mode class on the <html> element
        htmlElement.classList.toggle('dark-mode');

        // Save the user's choice to localStorage
        if (htmlElement.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.removeItem('theme');
        }
    });
});

const sidemenu = document.getElementById("sidemenu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

menuIcon.addEventListener("click", () => {
    sidemenu.style.right = "0";
});

closeIcon.addEventListener("click", () => {
    sidemenu.style.right = "-200px";
});


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", () => {
    const tablinks = document.querySelectorAll(".tab-links");
    const tabcontents = document.querySelectorAll(".tab-contents");

    tablinks.forEach(link => {
        link.addEventListener("click", () => {
            const tabname = link.getAttribute("data-tab");

            tablinks.forEach(t => t.classList.remove("active-link"));
            tabcontents.forEach(c => c.classList.remove("active-tab"));

            link.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        });
    });
});





// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active Nav Item
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.querySelector(".floating-sidebar");
    let isDragging = false;
    let startY;
    let startTop;

    // --- Handle both mouse and touch ---
    const startDrag = (y) => {
        isDragging = true;
        startY = y;
        startTop = sidebar.offsetTop;
        document.body.style.userSelect = "none";
    };

    const duringDrag = (y) => {
        if (!isDragging) return;
        const dy = y - startY;
        let newTop = startTop + dy;

        // Keep inside viewport bounds
        const maxTop = window.innerHeight - sidebar.offsetHeight;
        newTop = Math.max(0, Math.min(newTop, maxTop));

        sidebar.style.top = `${newTop}px`;
    };

    const stopDrag = () => {
        isDragging = false;
        document.body.style.userSelect = "auto";
    };

    // Mouse events
    sidebar.addEventListener("mousedown", (e) => startDrag(e.clientY));
    document.addEventListener("mousemove", (e) => duringDrag(e.clientY));
    document.addEventListener("mouseup", stopDrag);

    // Touch events
    sidebar.addEventListener("touchstart", (e) => startDrag(e.touches[0].clientY));
    document.addEventListener("touchmove", (e) => duringDrag(e.touches[0].clientY));
    document.addEventListener("touchend", stopDrag);
});



const scriptURL = 'https://script.google.com/macros/s/AKfycbzle15pzVittsv78u7_46thgXZqzxgmoC0z80UKzdxYO6EzKJ1a2n0s2gs0CXCjxsjzUw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent sucessfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

