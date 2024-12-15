$(document).ready(function() {

    // navbar 
    $('.hamburger-menu').on('click', function(){
        if( ($('.menus .menu-ul').hasClass( 'hide-menu' )) ){
            $('.menus .menu-ul').removeClass( 'hide-menu' );
        }else{
            $('.menus .menu-ul').addClass( 'hide-menu' );
        }
    });

    // services page

    $(".accordion").on("click", function() {
        $(this).toggleClass("active");
    
        var panel = $(this).next();
    
        if (panel.is(":visible")) {
            panel.slideUp(); //
        } else {
            panel.slideDown();
        }
    });
    

    // projects model
    $('.single-project img').on('click', function() {
        var modal = $(this).siblings('.modal');
        var modalImg = modal.find('.modal-content');
        var imgSrc = $(this).attr('src');

        modal.show();
        modalImg.attr('src', imgSrc);
    });

    $('.modal .close').on('click', function() {
        $(this).closest('.modal').hide();
    });

    // Contact form
    $('#contact-btn-submit').on('click', function(e){
        e.preventDefault();

        var isValid = true;
        $('#contact-form input').each(function(){
            if($(this).val().trim() === ""){
                isValid = false;
                $(this).css('border', '1px solid red');
                $('#form-output-box').text('Please input all the fields').css('color', 'red');
            }else{
                if ($(this).attr('type') === 'email') {
                    var emailValue = $(this).val().trim();
                    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    
                    if (emailValue !== "" && !emailRegex.test(emailValue)) {
                        $(this).css('border', '1px solid red');
                        isValid = false;
                        $('#form-output-box').text('Email is not valid.').css('color', 'red');
                    }
                }
                if($(this).attr('type') === 'number'){
                    var contactRegex = /^[0-9]+$/;
                    var inputValue = $(this).val().trim();
                    if (!contactRegex.test(inputValue)) {
                        isValid = false;
                        $(this).css('border', '1px solid red');
                        $('#form-output-box').text('Contact number incorrect').css('color', 'red');
                    } else {
                        if( inputValue.length < 10 ){
                            isValid = false;
                            $('#form-output-box').text('Contact number incorrect').css('color', 'red');
                        }
                        else{
                        $(this).css('border', '');
                        }
                    }
                }

                $(this).css('border', '');
            }
        });
        
        if(isValid){
            $('#form-output-box').text('Form submitted successfully!').css('color', 'green');
        }
    });
});