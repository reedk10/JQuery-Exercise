$(document).ready(function () {

  $(".menu").hide();
  $(".hamburger").click(function () {
    $(".menu").slideToggle("slow", function () {
    });

    $('#numerals').on('click', function () {
      $(".letters").hide();
      $(".numbers").show();
    })

    $('#alpha').on('click', function () {
      $(".numbers").hide();
      $(".letters").show();
    })
  });

});