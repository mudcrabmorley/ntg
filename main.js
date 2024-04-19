// HEAD/FOOTER IMPORT
window.onload = function () {
  loadHeader();
  loadFooter();
};

function loadHeader() {
  fetch("head.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("head").innerHTML = data;
    });
}

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
