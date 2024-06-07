$(document).ready(function () {
    $('.btn').click(function(event) {
      $('.btn').toggleClass("active");
      $('.hamburger').toggleClass("close");
      $('.closure').toggleClass("close");
    });
  });