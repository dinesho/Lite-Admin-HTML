// Show hide side menu
$("#side-menu-trigger").click(function() {
  $(".side-menu").toggleClass("show");
});

// Show hide notification panel
$(".notification-icon").click(function() {
  $(".notification-dropdown").toggleClass("show");
});

// Hide notification panel when clicked on page
$("html").click(function(e) {
  if (!$(e.target).hasClass("notification-icon")) {
    $(".notification-dropdown").removeClass("show");
  }
});
