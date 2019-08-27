$(function () {
  $('#title_submenu').hide();
  $('#add').click(function (e) {
    $('#title_submenu').toggle(200);
    e.stopPropagation();
  })
})
$(function () {
  $('#friend_conter').hide();
  $('#friends_click').click(function (e) {
    $('#friend_conter').toggle(50);
    e.stopPropagation();
  })
})
