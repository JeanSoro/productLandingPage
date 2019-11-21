$(function () {
  $('.menu-toggle, .fa-times').on('click', () => {
    $('nav').toggleClass('active');
    $('.overlay').toggleClass('menu-open');
  });

  $('.overlay').on('click', () => {
    $('nav').removeClass('active');
    $(this).removeClass('menu-open');
  });


})