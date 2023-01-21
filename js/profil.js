function dropdownMenu() {
  let drop = document.querySelector(".drop_container");
  let drop1 = document.querySelector(".container_box");
  let btn = document.querySelector("#btn_drop");

  //   btn.addEventListener("click", function () {
  //     // if (drop.style.display == "none") {
  //     drop.style.display = "block";
  //     // } else {
  //     //   drop.style.display = "none";
  //     // }
  //   });
  btn.onclick = function () {
    drop1.style.display = "block";
    drop.style.display = "block";
  };

  drop1.addEventListener("click", function (event) {
    // if (event.target == drop) {
    drop.style.display = "none";
    // }
  });

  //   window.addEventListener("click", function () {
  //     const myTimeout = setTimeout(function () {
  //       if (drop.style.display == "block") {
  //         drop.style.display = "none";
  //         console.log("aaaaa");
  //       }
  //     }, 500);
  //   });
}
dropdownMenu();
