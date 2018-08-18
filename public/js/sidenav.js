$(document).ready(function () {
    $('.sidenav').sidenav();
    var instance = M.Sidenav.getInstance($('#slide-out'));
    $('#SideNav').on('click', function () {
      instance.open();
    });

  $('#qwe').on('click', function () {
      instance.open();
    });


  });