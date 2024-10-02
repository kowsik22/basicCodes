let list = document.getElementsByClassName("list");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  for (let i = 0; i < list.length; i++) {
    list[i].style.backgroundColor =
      list[i].style.backgroundColor === "transparent"
        ? "orange"
        : "transparent";
  }
});
