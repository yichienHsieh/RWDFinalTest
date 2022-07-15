$(document).ready(function () {

  /*頁首選單切換*/
  $('.shownavbar').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('navbar-show');
  });

  /*愛心點擊切換*/
  $('.like a').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('show');
  });

  
});