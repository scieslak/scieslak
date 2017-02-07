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

  $('.quote *').hide();
  $('.quote *')
    .delay(1000)
    .velocity("transition.slideUpIn", {stagger: 400 })
    .delay(1000)
    .velocity({ opacity: 0}, {
                complete: function() { replace_header() },
                duration: 1000
              });
 });


 function replace_header() {
   $('.quote h1').text('Slawomir Cieslak');
   $('.quote p').text('Junior Ruby on Rails Developer');
   $('.quote *')
    .velocity("transition.slideUpIn", {stagger: 400 })
 }
