(function () {
  const button = document.getElementById("toTop");

  button.onclick = () => {
    window.scrollTo(0, 0);
  };

  document.addEventListener("scroll", (e) => {
    let position = window.scrollY;

    if (position > 300) {
      button.classList.add("show");
    } else {
      button.classList.remove("show");
    }
  });
})();