$(document).ready(function () {
  $('img').on('click', function () {
    $(this).css({
      top: function () {
        return Math.floor(Math.random() * ($(window).height() - 200));
      },
      left: function () {
        return Math.floor(Math.random() * ($(window).width() - 200));
      }
    });
  });
});