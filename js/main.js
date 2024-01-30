const toggleMenu = document.getElementById("toggle-menu"),
  closeMenu = document.getElementById("close-menu"),
  Menu = document.getElementById("nav-menu");

toggleMenu.addEventListener("click", function () {
  toggleMenu.classList.add("hidden");
  closeMenu.classList.remove("hidden");
  Menu.classList.remove("nav__hide");
  Menu.classList.add("nav__show");
});
closeMenu.addEventListener("click", function () {
  closeMenu.classList.add("hidden");
  toggleMenu.classList.remove("hidden");
  Menu.classList.remove("nav__show");
  Menu.classList.add("nav__hide");
});

document.addEventListener("click", function (event) {
  const isClickInsideMenu = Menu.contains(event.target);
  const isClickInsideButton = toggleMenu.contains(event.target);

  if (!isClickInsideMenu && !isClickInsideButton) {
    Menu.classList.add("nav__hide");
    closeMenu.classList.add("hidden");
    toggleMenu.classList.remove("hidden");
  }
});

const navLink = document.querySelectorAll(".nav__link");
navLink.forEach((item) => {
  item.addEventListener("click", function () {
    closeMenu.classList.add("hidden");
    toggleMenu.classList.remove("hidden");
    Menu.classList.add("nav__hide");
  });
});

const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  if (this.scrollY >= 100) {
    header.classList.remove("absolute");
    header.classList.add("fixed");
    header.classList.add("bg-black");
  } else {
    header.classList.remove("fixed");
    header.classList.add("absolute");
    header.classList.remove("bg-black");
  }

  const sections = document.querySelectorAll("section[id]");
  const scrollDown = window.scrollY;
  const navLink = document.querySelectorAll(".nav__link");

  sections.forEach((item) => {
    const sectionHeight = item.offsetHeight;
    const sectionTop = item.offsetTop - 58;
    const sectionId = item.getAttribute("id");
    const sectionClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      console.log(sectionClass.getAttribute("href"));
      navLink.forEach((item) => {
        item.classList.remove("active");
      });
      sectionClass.classList.add("active");
    } else {
      sectionClass.classList.remove("active");
    }
  });
});

const sr = ScrollReveal({
  delay: 100,
  duration: 1800,
  opacity: 0,
  distance: "40px",
  origin: "bottom",
});

sr.reveal(".hero__title");
sr.reveal(".hero__title2", { delay: 200 });
sr.reveal(".hero__span", { delay: 250 });
sr.reveal(".btn__hero", { delay: 300 });
sr.reveal(".about__animate", { distance: "0" });
sr.reveal(".resume__animate");

const socialHero = document.querySelectorAll(".social__hero");
socialHero.forEach((item, index) => {
  sr.reveal(item, { delay: 100 * index });
});
