// HEAD/FOOTER IMPORT
window.onload = function () {
  loadFooter();
};

function loadFooter() {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
}

// PAGE DISPLAY AFTER LOAD
window.onload = function () {
  document.body.style.display = "block";
};
