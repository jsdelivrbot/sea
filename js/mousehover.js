$( function() {
    var fs = $('#primero');
    var ss = $('#segundo');
    $('#primero').hover(function(){
        fs.hide().fadeOut("slow");
    }, function() {
        ss.hide().fadeIn("slow");
    });
    });