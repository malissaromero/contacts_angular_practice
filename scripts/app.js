$(document).ready(function () {
  console.log("js is working")

  $(".favorite").on("click", ".button", function(event) {
    $(this).toggleClass("press", 1000);
    console.log("favorited")
  })

});
