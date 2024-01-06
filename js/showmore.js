var step_nbr = 2;
var min_nbr = 6;

('.tabNav ul').each(function() {
  var LiN = (this).find('li').length;
  if (LiN > 3) {
    ('li', this).eq(5).nextAll().hide().addClass('toggleable');
    (this).append('<li class="more">More...</li>');
  }
});

('.tabNav ul').on('click', '.more', function() {
  var visible_lis = ('.tabNav ul li:visible').length;

  if ((this).hasClass('less')) {

    (this).prevAll('li:not(.toggleable)').slice(0, step_nbr).addClass('toggleable').hide();

    if (('li:visible').length <= (min_nbr + 1)) {
      (this).text('More...').removeClass('less');
    }

  } else {
    (this).siblings('li.toggleable').slice(0, step_nbr).removeClass('toggleable').show();

    if (('li.toggleable').length == 0) {
      (this).text('Less...').addClass('less');
    }
  }

});
