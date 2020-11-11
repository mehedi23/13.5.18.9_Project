$('.the-logo').click(function(){
    $('.the-logo').addClass('invisible');
    $('.menu-side').addClass('width-dicIncrease');
    $('.menu-side .logo').addClass('width-dicIncrease-logo');
    $('.menu-side .main-menu li a .menu-name').fadeOut(200); 
    $('.menu-side .main-menu li a .main-menu-icons').addClass('icons-center');
    $('.menu-background-effect').hide()
})

$('.menu-icon').click(function(){
    $('.the-logo').removeClass('invisible');
    $('.menu-side').removeClass('width-dicIncrease');
    $('.menu-side .logo').removeClass('width-dicIncrease-logo');
    $('.menu-side .main-menu li a .menu-name').fadeIn(300); 
    $('.menu-side .main-menu li a .main-menu-icons').removeClass('icons-center')
    $('.menu-background-effect').show()
})



// checkbox

$('.check-box').click(function(){
    $(this).find('svg').toggle()
})

$('.enable').click(function(){
    $(this).toggleClass('justify-content-end') 
    $(this).find('span').toggleClass('gray')
})


// select option

$('.select-option').click(function(){
    $(this).parents('.select-option-cus').find('.the-options').slideToggle(200)
})

// multi option

$('.multi-option .main-check-box').click(function(){
    $(this).parents('.multi-option').find('ul').slideToggle(200)
})




//slider
var device_width =$( window ).width()

if( device_width < 415 && 300 < device_width  ){
    $('.next-btn').click(function(){ 
        $('.tables-slider').animate({ scrollLeft: `+=${(device_width*.99) }` }, 400) 
    })

    $('.prev-btn').click(function(){
        $('.tables-slider').animate({ scrollLeft: `-=${(device_width*.99) }` }, 400)
    })
} else if ( device_width < 2000 && 1200 < device_width ) {
    $('.next-btn').click(function(){ 
        $('.tables-slider').animate({ scrollLeft: '+=1290' }, 400) 
    })
    
    
    $('.prev-btn').click(function(){
        $('.tables-slider').animate({ scrollLeft: '-=1290' }, 400)
    })
}


// media slider

$('.media-next-btn').click(function(){ 
    $('.medial-items').animate({ scrollLeft: '+=800' }, 400) 
})


$('.media-prev-btn').click(function(){
    $('.medial-items').animate({ scrollLeft: '-=700' }, 400)
})


// replace-remove-btn

$('.replace-remove-btn').click(function(){
    $(this).parents('.replace-remove').find('.show-replace-remove').slideToggle(200);
    $(this).toggleClass('d-inline')
})

// 


// default check box

var supplier_check_box = true

$('.check-box[data-default="1"]').find('svg').show()

$('.check-box[data-default="1"]').click(function(){
    supplier_check_box = true

    if( supplier_check_box ){
        $(this).find('svg').show();
        $('.check-box[data-default="2"]').find('svg').hide()
    }
})

$('.check-box[data-default="2"]').click(function(){ 

    supplier_check_box = false
    if( !supplier_check_box ){
        $(this).find('svg').show();
        $('.check-box[data-default="1"]').find('svg').hide()
    }
})


//modal

// $(window).resize( function(){
//     console.log($(window).width())
// } )



// mobile menu

$('.mobile-header span').click(function(){
    $('.menu-side').css( {'left' : '0px'} );
    $('.mobile-bg').fadeIn(200);
    $('body').css({ 'overflow': 'hidden' });
})

$('.mobile-bg').click(function(){ 
    $('.menu-side').css( {'left' : '-300px'} );
    $(this).fadeOut(200);
    $('body').css({ 'overflow-y': 'scroll' })
})


$('.abdc').owlCarousel({
    loop:false,
    margin:15,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        1170:{
            items:2
        }
    }
})

$('.medial-items').owlCarousel({
    loop:false,
    margin:15,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1170:{
            items:3
        },
        1470:{
            items:4
        }
    }
})

$('.info').hover(function(){
    $('.info-details').fadeToggle(300)
})