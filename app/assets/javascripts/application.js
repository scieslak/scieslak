// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require velocity
//= require velocity.ui
//= require foundation
//= require turbolinks
//= require_tree .

$(function(){ $(document).foundation();

  var title = $('.large-text');
  var subtitle = $('.small-text');
  var title_all = $('.quote *');

  var title_text = title.text();
  var subtitle_text = subtitle.text();

  title.text("\"The expert at anything was once a beginner.\"");
  subtitle.text("Helen Hayes")

  $('.quote p').hide();
  $('.quote div').hide();
  $('.quote p')
    .delay(1000)
    .velocity("transition.slideUpIn", {stagger: 400 })
    .delay(1000)
    .velocity({ opacity: 0}, {
                complete: function() { replace_header(subtitle) },
                duration: 1000
              });

  function replace_header() {
    title.text(title_text);
    subtitle.text(subtitle_text);
    $('.quote p')
     .velocity("transition.slideUpIn", {stagger: 400, complete:
        function() {
          $('.social-media')
            .velocity("transition.slideUpIn", {stagger: 400});
          $('.social-media a').velocity({opacity: .3})
        }
    })
  }

  $('.social-media a').hover(
    function() { $(this).fadeTo('fast', '1'); },
    function() { $(this).fadeTo('fast', '.3'); }
);
 });
