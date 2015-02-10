$(document).ready(function () {

  $('img').on('click', function () {
    $(this).css({
      top: function () {
        return Math.floor(Math.random() * ($(window).height() - 100));
      },
      left: function () {
        return Math.floor(Math.random() * ($(window).width() - 100));
      }
    });
  });

});