// PAGE DISPLAY AFTER LOAD
window.onload = function () {
  document.body.style.display = "block";
};

// HEADER AND FOOTER LOAD
$(function () {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
});
