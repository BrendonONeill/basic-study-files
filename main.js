function main() {
  const navTest = document.getElementsByClassName("main-nav");
  const test = document.getElementsByClassName("first-div");

  const modalButton = document.querySelector(".modal-button");
  const modal = document.querySelector(".modal");
  const modalBG = document.querySelector(".modal-bg");

  var i;
  for (i = 0; i < navTest.length; i++) {
    navTest[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      panel.classList.toggle("main-content-active");
    });
  }

  modalButton.addEventListener("click", () => {
    console.log("clicking ");
    modal.classList.add("modal-active");
    modalBG.classList.add("modal-bg-active");
  });

  modalBG.addEventListener("click", () => {
    console.log("clicking ");
    modal.classList.remove("modal-active");
    modalBG.classList.remove("modal-bg-active");
  });
}

main();
