$( document ).ready(function() {

  $('.hamburger').on('click', function() {
    $('body').toggleClass('menu');
  });

});


$ ( window).on('load', function() {

  $('body').addClass('loaded');

});
