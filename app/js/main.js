$(document).ready(function() {
    $('.box').click(function(e) {
        e.preventDefault();
        var after;
        if($(this).hasClass('last')) {
            after = $(this);
        } else {
            after = $(this).find(' ~ .last').eq(0);
        }

        $('.template').insertAfter(after).slideDown().addClass('active');
    });
});