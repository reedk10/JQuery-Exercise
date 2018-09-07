const lis = $('li');

$(document).ready (function () {
  function main() {

   $('#grow-me').addClass('big');

   $('#shrink-me').removeClass('big');

  $( "li" ).text(function( index ) {
  console.log($(this).text() );
   });

   $('#hide-me').css('display', 'none');
   $('#show-me').css('display', 'block');
   
   $('a').attr('href', 'https://www.example.com').text('somewhere');

   $('#name')
     .keyup(function() {
       var value = $(this).val();
       $("h1").text("Welcome " + value);
     })
     .keyup();

   
    
  }


  $("#action").on("click", main);
});



