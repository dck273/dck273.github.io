$(document).ready(function(){
    $('div').hover(function(){
        $(this).addClass('red');
    });
    
    $('div').click(function(){
        $(this).fadeOut('fast');
    });
});