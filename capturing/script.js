let navmenu = document.getElementById("nav-menu");
let submenu = document.getElementById("sub-menu");
let button = document.getElementById("button");

//toggle button
// Open and close the submenu when toggle button is clicked
button.addEventListener("click", () => {
  submenu.style.display = submenu.style.display === "none" ? "block" : "none";
});

//event capturing
// Use event capturing to detect a click on the parent navMenu element
document.addEventListener(
  "click",
  function (e) {
    // Check if the click occurred outside the navigation menu
    if (!navmenu.contains(e.target)) {
      submenu.style.display = "none";
      console.log("Click detected outside the menu, closing sub menu.");
    }
  },
  true
); // 'true' enables capturing phase

// Stop propagation for clicks inside the navigation menu

navmenu.addEventListener(
  "click",
  function (e) {
    e.stopPropagation();
    console.log("Click detected inside the menu, keeping sub menu open.");
  },
  true
);
