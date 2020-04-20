
$(document).ready(function(){
    // reference
    var newInput = $('.input-write input');
    var sendIcon = $('.icon-footer .fa-microphone');


    // change icon to send chat

    newInput.on('focus blur', function() {
        sendIcon.toggleClass('fa-microphone fa-paper-plane');
    });
    





    // add a dynamic template 

    // with icon
    sendIcon.click(function() {
        sendMessage(newInput);
    });

    // with enter
    newInput.keypress(function(e) {
        if(e.which == 13) {
            sendMessage(newInput);
        }
    });


}); // <-- End doc ready



/****************************************************************
    FUNCTIONS
 ****************************************************************/

// send new message function

function sendMessage(input) {
    
    // user text
    var textUser = input.val().trim();

    // check
    if ( (textUser.length > 0) && (textUser != ' ' )) {

        // clone template
        var newMessage = $('.template .chat-green').clone();

        // add text message to template
        newMessage.children('.cloud').text(textUser);

        // add current time
        var date = new Date();
        var hour = addZero( date.getHours() );
        var minutes = addZero( date.getMinutes() );
        var time = hour + ':' + minutes;
        newMessage.children('.time').text(time);

        newMessage.addClass('.user-chat');

        $('.Main.active').append(newMessage);

        // reset input 
        input.val('');


    }





}

// Add leading zero to numbers less than 10 whith function
function addZero(numero) {
    if(numero < 10) {
        numero = '0' + numero;
    }
    
    return numero;
}
