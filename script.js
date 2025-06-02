const buttons = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll(".section");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    sections.forEach(section => {
      section.classList.remove("active");
    });
    document.getElementById(target).classList.add("active");
  });
});
