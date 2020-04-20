
$(document).ready(function(){
    // reference
    var newInput = $('.input-write input');
    var sendIcon = $('.icon-footer .fa-microphone');
    var searchInput = $('#search-input');

    // array of contact chat
    var contact = [];
    $('.name-user').each(function(){
        contact.push($(this).text());
    });


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

    /*****************
     contact search
     *****************/

    $('.search').on('keyup', '#search-input', function(){

        // contact to search
        var string = searchInput.val().trim().toLowerCase();
        // hide all contact to first
        $('.box-chat').hide();

        // show the contact sought 
        for( var i = 0; i < contact.length; i++) {
            if( contact[i].toLowerCase().includes(string)) {
                console.log('ok');  // to bug
            }
            
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

        // add user chat
        newMessage.addClass('.user-chat');
        $('.Main.active').append(newMessage);

        // reset input 
        input.val('');

        // bot answer function
        botAnswer()

    }

}

// Add leading zero to numbers less than 10 whith function
function addZero(numero) {
    if(numero < 10) {
        numero = '0' + numero;
    }
    
    return numero;
}

// bot answer function
function botAnswer(){
    setTimeout(function(){
        console.log("risposta")
        // clone template
        var botMessage= $('.template-bot .chat-white').clone();

        // add text message to template
        botMessage.children('.cloud-white').text('ok');

        // add time
        var date = new Date();
        var hour = addZero( date.getHours() );
        var minutes = addZero( date.getMinutes()+1 );
        var time = hour + ':' + minutes;
        botMessage.children('.time-bot').text(time);

        // add user chat
        botMessage.addClass('.bot-chat');
        $('.Main.active').append(botMessage);
    }, 1000);
}