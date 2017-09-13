$(document).ready(function(){
  $('#user').submit(function(event){
    event.preventDefault();
    let user = $('#user-name').val();
    $('#name-form').hide();
    $('#display-name').prepend('<p>Hello, ' + user + '. Let us now calculate your age.</p>');
    $('#date-form').show();
  });
});
