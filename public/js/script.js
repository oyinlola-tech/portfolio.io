document.addEventListener('DOMContentLoaded', function() {
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-progress');

    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if(barPosition < screenPosition) {
                bar.style.width = bar.dataset.progress; // width set from HTML data-progress
                bar.style.animation = 'progress-shine 5s infinite';
            }
        });
    };

    animateSkillBars();
    window.addEventListener('scroll', animateSkillBars);

    // Smooth scrolling for navigation links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Mobile nav toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinksContainer = document.querySelector('.nav-links');
    if (navToggle && navLinksContainer) {
        navToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('show');
            // recalc header height when nav expands/collapses
            adjustBodyPadding();
        });

        // Close mobile nav on link click
        anchorLinks.forEach(a => a.addEventListener('click', () => {
            navLinksContainer.classList.remove('show');
        }));
    }

    // Ensure fixed header does not cover content (set body padding equal to header height)
    const headerEl = document.querySelector('header');
    const adjustBodyPadding = () => {
        if (headerEl) document.body.style.paddingTop = `${headerEl.offsetHeight}px`;
    };
    adjustBodyPadding();
    window.addEventListener('resize', adjustBodyPadding);

    // Add active class to nav links on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Fade-in animation for Experience and Projects cards
    const fadeInElements = document.querySelectorAll('.experience-card, .project-card');

    const fadeInOnScroll = () => {
        fadeInElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.1;

            if(elementTop < screenPosition) {
                el.classList.add('visible');
            }
        });
    };

    fadeInOnScroll();
    window.addEventListener('scroll', fadeInOnScroll);

    // Optional: Tilt effect for Project cards
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `rotateX(${ -rotateX }deg) rotateY(${ rotateY }deg) scale(1.03)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });
});

// Loading feature
window.addEventListener('load', ()=>{
    const loader = document.getElementById('loader');

    setTimeout(()=>{
        loader.style.opacity = '0';

        setTimeout(()=>{
            loader.remove();
        }, 700); 
    }, 500);
});

// Contact form submission

 const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    subject: document.getElementById("subject").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  const btn = form.querySelector("button");
  const spinner = document.getElementById("customSpinner");

  btn.disabled = true;
  spinner.style.display = "block";

  try {
    const res = await fetch("/api/sendmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      alert("Message sent successfully.");
      form.reset();
    } else {
      alert(result.error || "Failed to send message.");
    }
  } catch (err) {
    alert("There was an error. Please try again.");
  }

  btn.disabled = false;
  spinner.style.display = "none";
});