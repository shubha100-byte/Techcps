document.addEventListener("DOMContentLoaded", function () {
  AOS.init({ duration: 1000, once: true });

  /* CURSOR EFFECT */
  const cursor = document.getElementById("cursor");
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  /* TYPING EFFECT */
  const text = ["Web Apps", "YouTube Content", "Cool Projects"];
  let i = 0,
    j = 0,
    current = "",
    isDeleting = false;
  function type() {
    current = text[i];
    if (!isDeleting) {
      document.getElementById("typing").textContent = current.substring(0, j++);
      if (j > current.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
      }
    } else {
      document.getElementById("typing").textContent = current.substring(0, j--);
      if (j < 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
      }
    }
    setTimeout(type, 100);
  }
  type();

  /* 🎥 VIDEO DATA */
  const videos = [
    { title: "JavaScript Full Course", id: "dQw4w9WgXcQ" },
    { title: "Build Website Fast", id: "3fumBcKC6RE" },
    { title: "Best Coding Tips", id: "V-_O7nl0Ii0" },
  ];

  /* 🎥 LOAD VIDEOS */
  function loadVideos(list) {
    let container = document.getElementById("videoContainer");

    if (list.length === 0) {
      container.innerHTML = "";
      document.getElementById("noResult").style.display = "block";
      return;
    }

    document.getElementById("noResult").style.display = "none";

    let html = "";
    list.forEach((v) => {
      html += `
      <div class="card">
        <iframe src="https://www.youtube.com/embed/${v.id}"></iframe>
        <h4>${v.title}</h4>
      </div>
    `;
    });

    container.innerHTML = html;
  }

  /* 🔍 SEARCH */
  document.getElementById("searchInput").addEventListener("keyup", function () {
    let val = this.value.toLowerCase();
    let filtered = videos.filter((v) => v.title.toLowerCase().includes(val));
    loadVideos(filtered);
  });

  /* 🚀 INITIAL LOAD */
  loadVideos(videos);

  /* MODAL LOGIN/SIGNUP */
  const authModal = document.getElementById("authModal");
  const modalTitle = document.getElementById("modalTitle");
  const loginBtn = document.getElementById("loginBtn");
  const signupBtn = document.getElementById("signupBtn");
  const closeModal = document.getElementById("closeModal");
  const authSubmit = document.getElementById("authSubmit");

  loginBtn.onclick = () => {
    modalTitle.textContent = "Log In";
    authModal.style.display = "flex";
  };
  signupBtn.onclick = () => {
    modalTitle.textContent = "Sign Up";
    authModal.style.display = "flex";
  };
  closeModal.onclick = () => (authModal.style.display = "none");

  window.onclick = (e) => {
    if (e.target == authModal) authModal.style.display = "none";
  };

  authSubmit.onclick = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
      alert(modalTitle.textContent + " successful!\nEmail: " + email);
      authModal.style.display = "none";
    } else {
      alert("Please fill all fields.");
    }
  };

  /* 🌙 DARK MODE */
  const themeToggle = document.getElementById("themeToggle");

  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
  }

  function updateIcon() {
    themeToggle.textContent = document.body.classList.contains("light")
      ? "🌙"
      : "☀️";
  }

  updateIcon();

  themeToggle.onclick = () => {
    document.body.classList.toggle("light");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("light") ? "light" : "dark",
    );
    updateIcon();
  };

  /* ENTER SEARCH */
  document
    .getElementById("searchForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      let val = document.getElementById("searchInput").value.toLowerCase();

      let filtered = videos.filter((v) => v.title.toLowerCase().includes(val));

      loadVideos(filtered);
    });
});

// Newsletter Subscribe Function

const subscribeBtn = document.querySelector(".newsletter-box button");
const emailInput = document.querySelector(".newsletter-box input");

subscribeBtn.addEventListener("click", () => {
  const email = emailInput.value.trim();

  // Check if input is empty
  if (email === "") {
    alert("Please enter your email!");
    return;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address!");
    return;
  }

  // Success Message
  alert("Subscribed successfully!🎉 & You are Now member of our Team");

  // Clear input
  emailInput.value = "";
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const scrollProgress = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;

  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;

  scrollProgress.style.width = progress + "%";
});

/* Duplicate counters code removed to fix redeclaration error */

AOS.init({
  duration: 1000,
  once: true,
});

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {
  document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";

    cursorGlow.style.top = e.clientY + "px";
  });
}

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  loader.style.opacity = "0";

  setTimeout(() => {
    loader.style.display = "none";
  }, 600);
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

const testimonials = document.querySelectorAll(".testimonial");

let currentTestimonial = 0;

function showTestimonial() {
  testimonials.forEach((item) => {
    item.classList.remove("active");
  });

  testimonials[currentTestimonial].classList.add("active");

  currentTestimonial++;

  if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0;
  }
}

setInterval(showTestimonial, 3000);

const socialToggle = document.getElementById("socialToggle");

const socialIcons = document.getElementById("socialIcons");

socialToggle.addEventListener("click", () => {
  socialIcons.classList.toggle("active");
});

const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");

  preloader.style.display = "none";
});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");

    const current = +counter.innerText;

    const increment = target / 100;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;

      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Subscribed Successfully 🚀");

  newsletterForm.reset();
});

const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX + "px";

  cursor.style.top = e.clientY + "px";
});

const links = document.querySelectorAll("a, button");

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.classList.add("active");
  });

  link.addEventListener("mouseleave", () => {
    cursor.classList.remove("active");
  });
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const message = document.getElementById("message").value;

  console.log(name);
  console.log(email);
  console.log(message);

  const response = await fetch("http://localhost:3000/contact", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    }),
  });

  const result = await response.text();

  alert(result);
});
