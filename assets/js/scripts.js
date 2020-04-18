$(document).ready(function(){
    // reference
    var newInput = $('.input-write input');
    var main = $('.Main');
    var microphone = $('.fa-microphone');
    var plane = $('.fa-paper-plane');


    // change icon to send chat

    $('footer').on('mouseenter', '.input-write', function(){
        microphone.toggleClass('hide');
        plane.toggleClass('hide');
    });
    $('footer').on('mouseleave', '.input-write', function(){
        microphone.toggleClass('hide');
        plane.toggleClass('hide');
    });


    // add a dynamic template 

    newInput.keyup(function(event){
        if (event.which == 13 || event.keycode == 13) { // 13 is enter keycode
            var text = newInput.val().trim();

            // validation
            if (text !== ' ') {
                var chatNew = $('.template .chat-green').clone();
                chatNew.append(text);
                main.append(chatNew);
                // clear input
                newInput.val('');
            }
        }
    });






}); // end jQuery