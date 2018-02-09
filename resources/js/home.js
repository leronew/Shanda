$(document).ready(function() {
    sampleVid();
});

function sampleVid() {
    $('.question').hover(){
        $(this).next().css('display', 'block');        
        if($(this).children().hasClass('fa-arrow-circle-down')) {
            $(this).next().slideDown();
            $(this).children().removeClass('fa-arrow-circle-down')
                .addClass("fa-arrow-circle-up"); 
        } else {
            $(this).next().slideUp();
            $(this).children().removeClass('fa-arrow-circle-up')
                .addClass("fa-arrow-circle-down");
        }    
    });
}

