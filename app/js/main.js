$(document).ready(function() {
    $('.box').click(function(e) {
        e.preventDefault();
        var id = $(this).data('id');
        var after;
        if($(this).hasClass('last')) {
            after = $(this);
        } else {
            after = $(this).find(' ~ .last').eq(0);
        }

        if($('.template').hasClass('active') && $('.template').data('parent') === id) {
            $('.template').slideUp().removeClass('active');
        } else {
            $('.template').insertAfter(after).slideDown().addClass('active').data('parent', id);
            $('.template p').text($('.template p').text() + ' ' + id);
            console.log($('.template').data('parent'));
        }


    });
});