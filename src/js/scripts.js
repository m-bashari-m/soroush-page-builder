const templatesSection = document.getElementById("toggle-template");
const templates = document.getElementById("templates");

templatesSection.addEventListener("click", () => {
  templates.classList.toggle("open");
});

const setting = document.getElementById("setting");
const settingSection = document.getElementById("toggle-setting");
settingSection.addEventListener("click", () => {
  setting.classList.toggle("open");
});

function toggleDropdown() {
  const dropdownContent = document.querySelector(".dropdown-content");
  dropdownContent.classList.toggle("show-dropdown");
}

const buttons = document.querySelectorAll(".setter button");
const dropdownMenus = document.querySelectorAll(".setter ul");

for (const i in buttons) {
  buttons[i].addEventListener("click", () => {
    dropdownMenus[i].classList.toggle("hidden");
  });
}
