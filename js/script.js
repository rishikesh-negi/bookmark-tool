// MOBILE NAV MENU FUNCTIONALITY
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuLink = document.querySelectorAll("#menu-link");

menuBtn.addEventListener("click", toggleMenu);
menuLink.forEach((item) => {
  item.addEventListener("click", toggleMenu);
});

function toggleMenu() {
  menuBtn.classList.toggle("open");

  mobileMenu.classList.toggle("menu-close");
  mobileMenu.classList.toggle("menu-open");

  document.body.classList.toggle("stopscroll");
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// COLOR THEME FUNCTIONALITY
const themeToggleBtn = document.getElementById("theme-btn");
const iconSetDark = document.getElementById("icon-dark");
const iconSetLight = document.getElementById("icon-light");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  iconSetLight.classList.remove("hidden");
} else {
  iconSetDark.classList.remove("hidden");
}

themeToggleBtn.addEventListener("click", toggleTheme);

function toggleTheme() {
  iconSetLight.classList.toggle("hidden");
  iconSetDark.classList.toggle("hidden");

  // Set previously by user and stored locally:
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  }

  // If not set by user previously:
  else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
}

// FEATURES TABS FUNCTIONALITY:
const tabLabels = document.querySelectorAll(".tab-label");
const panels = document.querySelectorAll(".panel");
const panelsContainer = document.getElementById("panels");

tabLabels.forEach((tab) => tab.addEventListener("click", onTabClick));

function onTabClick(e) {
  tabLabels.forEach((tab) => {
    // Deactivate all tab-label borders:
    tab.children[0].classList.remove("panel-label-border");
  });

  // Hide all panels initially, on label-click:
  panels.forEach((panel) => panel.classList.add("hide-panel"));

  // Activate the targetted panel upon it's lebel-click:
  e.target.classList.add("panel-label-border");

  // Get(and store in variable) the value of the 'data-target' attribute of the target(clicked) label:
  const targetAttr = e.target.getAttribute("data-target");

  panelsContainer
    .getElementsByClassName(targetAttr)[0]
    .classList.remove("hide-panel");
}

// ----------------------------------------------ALTERNATE METHOD:
// const labelPanel1 = document.getElementById("label-panel-1");
// const labelPanel2 = document.getElementById("label-panel-2");
// const labelPanel3 = document.getElementById("label-panel-3");

// const panel1 = document.getElementById("panel-1");
// const panel2 = document.getElementById("panel-2");
// const panel3 = document.getElementById("panel-3");

// labelPanel1.addEventListener("click", openPanel1);

// function openPanel1() {
//   labelPanel3.classList.remove("panel-label-border");
//   labelPanel2.classList.remove("panel-label-border");
//   labelPanel1.classList.add("panel-label-border");

//   panel3.classList.add("hide-panel");
//   panel2.classList.add("hide-panel");
//   panel1.classList.remove("hide-panel");
// }

// labelPanel2.addEventListener("click", openPanel2);

// function openPanel2() {
//   labelPanel1.classList.remove("panel-label-border");
//   labelPanel3.classList.remove("panel-label-border");
//   labelPanel2.classList.add("panel-label-border");

//   panel1.classList.add("hide-panel");
//   panel3.classList.add("hide-panel");
//   panel2.classList.remove("hide-panel");
// }

// labelPanel3.addEventListener("click", openPanel3);

// function openPanel3() {
//   labelPanel1.classList.remove("panel-label-border");
//   labelPanel2.classList.remove("panel-label-border");
//   labelPanel3.classList.add("panel-label-border");

//   panel1.classList.add("hide-panel");
//   panel2.classList.add("hide-panel");
//   panel3.classList.remove("hide-panel");
// }

// ----------------------------------------------------------------------------
