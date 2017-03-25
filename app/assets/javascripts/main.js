var runCode = function() {
  $('#like-kitties').click(function(){
    $('#especially').removeClass('hidden')
  })
};




// workaround hack for jQuery to cooperate with turbolinks.
// put code you want to execute inside the runCode function above.
// it is executed on document ready and on page load
$(document).ready(runCode);
$(document).on('page:load', runCode);
