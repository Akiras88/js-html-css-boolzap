$(document).ready(function(){

    // reference
    var newInput = $('.input-write input');
    var sendIcon = $('.icon-footer .fa-microphone');
    var searchInput = $('#search-input');
    var pushDropdown = $('.with-dropdown');

    // change icon to send chat

    newInput.on('focus blur', function() {
        sendIcon.toggleClass('fa-microphone fa-paper-plane');
    });
    

    /***************************
        add a dynamic template
     **************************/  

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

    /********************
        contact search
     ********************/

    searchInput.keyup(function(){

        var search = $(this).val().toLowerCase().trim();
        
        $('.box-chat').each(function(){
        
            // name of the contact to be searched
            var nameContact = $(this).find('.name-user h4').text().toLowerCase();

            // check input
            if ( nameContact.includes(search) ) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    /*******************************
        hitch dynamic conversation
     *******************************/

    $('.box-chat').click(function(){

        var conversation = $(this).attr('data-conversation');

        // reset
        $('.Main').removeClass('active');
        $('.box-chat').removeClass('active');
        $('.u-img-size-me').removeClass('active');
        $('.text-bot').removeClass('active');

        // show active
        $('.Main[data-conversation="' + conversation + '"]').addClass('active');
        $('.box-chat[data-conversation="' + conversation + '"]').addClass('active');
        $('.u-img-size-me[data-conversation="' + conversation + '"]').addClass('active');
        $('.text-bot[data-conversation="' + conversation + '"]').addClass('active');
    });
    
    /********************
        dropdown menu
     ********************/

    pushDropdown.on('click', function(){ // dont'work!!!
        // show/hide dropmenu
        $('.dropdown').hide();
        $(this).find('.dropdown li').toggle();
    });
    
    // remove chat

    $('.Main').on('click', '.dropdown', function(){
        $(this).parent().remove();
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
        var time = currentTime()
        newMessage.children('.time').text(time);

        // add user chat
        newMessage.addClass('.user-chat');
        $('.Main.active').append(newMessage);

        // reset input 
        input.val('');

        // bot answer function
        botAnswer();

        // scroll to focus message
        scrollMessage();

    }

}


// bot answer function
function botAnswer(){
    setTimeout(function(){

        // clone template
        var botMessage= $('.template-bot .chat-white').clone();

        // add text message to template
        botMessage.children('.cloud-white').text('ok');

        // add current time
        var time = currentTime()
        botMessage.children('.time-bot').text(time);

        // add user chat
        botMessage.addClass('.bot-chat');
        $('.Main.active').append(botMessage);

        // scroll to focus message
        scrollMessage();
    }, 1000);
}

// current time function
function currentTime() {
    var date = new Date();
    var hour = addZero( date.getHours() );
    var minutes = addZero( date.getMinutes() );
    return hour + ':' + minutes;
}

// Add leading zero to numbers less than 10 whith 

function addZero(numero) {
    if(numero < 10) {
        numero = '0' + numero;
    }
    
    return numero;
}

// scroll message function
function scrollMessage() {
    var pixelScroll = $('.Main.active').height();

    $('.Main').animate({
        scrollTop: pixelScroll
    }, 500);

}