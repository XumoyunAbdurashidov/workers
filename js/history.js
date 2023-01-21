"use stict";

const btn = document.querySelector("#btn__");
const box = document.querySelector(".id_js");

box.style.display = "none";

btn.addEventListener("click", () => {
  if (box.style.display == "none") {
    box.style.display = "block";
  } else {
    box.style.display = "none";
  }

  //   if (box.style.display == "none") {
  //     box.style.display = "block";
  //   } else {
  //     box.style.display = "none";
  //   }
});
