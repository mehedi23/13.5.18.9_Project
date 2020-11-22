$('.the-logo').click(function () {
    $('.the-logo').addClass('invisible');
    $('.menu-side').addClass('width-dicIncrease');
    $('.menu-side .logo').addClass('width-dicIncrease-logo');
    $('.menu-side .main-menu li a .menu-name').fadeOut(200);
    $('.menu-side .main-menu li a .main-menu-icons').addClass('icons-center');
    $('.menu-background-effect').hide()
})

$('.menu-icon').click(function () {
    $('.the-logo').removeClass('invisible');
    $('.menu-side').removeClass('width-dicIncrease');
    $('.menu-side .logo').removeClass('width-dicIncrease-logo');
    $('.menu-side .main-menu li a .menu-name').fadeIn(300);
    $('.menu-side .main-menu li a .main-menu-icons').removeClass('icons-center')
    $('.menu-background-effect').show()
})



// checkbox

$('.check-box').click(function () {
    $(this).find('svg').toggle()
})

$('.enable').click(function () {
    $(this).toggleClass('justify-content-end')
    $(this).find('span').toggleClass('gray')
})


// select option

$('.select-option').click(function () {
    $(this).parents('.select-option-cus').find('.the-options').slideToggle(200);
});

$('.select-option').click(function () {
    $(this).parents('.select-option-cus').find('.the-options-fix').slideToggle(200);
});

$('.the-options input').click(function () {

    var this_val = $(this).val()
    $(this).parents('.select-option-cus').find('.select-option input').val(`${this_val}`);
})

// multi option

$('.multi-option .main-check-box').click(function () {
    $(this).parents('.multi-option').find('ul').slideToggle(200)
})



// replace-remove-btn

$('.replace-remove-btn').click(function () {
    $(this).parents('.replace-remove').find('.show-replace-remove').slideToggle(200);
    $(this).toggleClass('d-inline')
})

// 


// default check box

var supplier_check_box = true

$('.check-box[data-default="1"]').find('svg').show()

$('.check-box[data-default="1"]').click(function () {
    supplier_check_box = true

    if (supplier_check_box) {
        $(this).find('svg').show();
        $('.check-box[data-default="2"]').find('svg').hide()
    }
})

$('.check-box[data-default="2"]').click(function () {

    supplier_check_box = false
    if (!supplier_check_box) {
        $(this).find('svg').show();
        $('.check-box[data-default="1"]').find('svg').hide()
    }
})


// mobile menu

$('.mobile-header span').click(function () {
    $('.menu-side').css({
        'left': '0px'
    });
    $('.mobile-bg').fadeIn(200);
    $('body').css({
        'overflow': 'hidden'
    });
})

$('.mobile-bg').click(function () {
    $('.menu-side').css({
        'left': '-300px'
    });
    $(this).fadeOut(200);
    $('body').css({
        'overflow-y': 'scroll'
    })
})


$('.clints-table-slider').owlCarousel({
    loop: false,
    margin: 15,
    nav: true,
    autoWidth: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        1170: {
            items: 2
        }
    }
});

$('.medial-items').owlCarousel({
    loop: false,
    margin: 15,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            slideBy: 1
        },
        600: {
            items: 2,
            slideBy: 2
        },
        1170: {
            items: 3,
            slideBy: 3
        },
        1470: {
            items: 4,
            slideBy: 4
        }
    }
});

$('.info').hover(function () {
    $('.info-details').fadeToggle(300)
})




// ========================================================
$(document).click(function (e) {

    if (e.target.className !== "supplier-inputs supplier-input-select-option") {
        $('.drop-down-supplier-inputs').slideUp(200);
    }

    if (e.target.className !== 'replace-remove-btn d-inline') {
        $('.show-replace-remove').slideUp(200);
        $('.replace-remove-btn').removeClass('d-inline')
    }

    if (e.target.className !== 'select-option') {
        $('.the-options').slideUp(200);
    }

    //console.log(e.target.className)
})



// modified +++++++++++++++++++++++++++++++

$('.supplier-input-select-option').click(function () {
    $(this).parents('.supplier-input-select-option-wrapper').find('.drop-down-supplier-inputs').slideToggle(200);
});

$('.drop-down-supplier-inputs input').click(function () {
    var the_val = $(this).val();
    $(this).parents('.supplier-input-select-option-wrapper').find('.supplier-input-select-option').val(`${ the_val }`)
});


$('body').on('change', '.drag-drop input', function () {

    if (this.files && this.files[0]) {
        var reader = new FileReader();

        var data_attr = $('.media-items-img').length + 1;

        for (let i = 0; i < data_attr; i++) {
            reader.onload = function (e) {
                var the_src_url = e.target.result;

                $('.medial-items').trigger('add.owl.carousel', [`
                    <div class="media-items-img" data-i-num= ${i} >
                        <div class="remove-media-pic">
                            <svg width="1em" height="1em" viewBox="0 0 100 100" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="48.5" fill="white" stroke="#979797"
                                    stroke-width="3" />
                                <line y1="-1.5" x2="78.759" y2="-1.5"
                                    transform="matrix(0.67652 0.736424 -0.724568 0.689203 22 21)"
                                    stroke="#979797" stroke-width="3" />
                                <line y1="-1.5" x2="78.759" y2="-1.5"
                                    transform="matrix(0.676528 -0.736417 0.724561 0.689211 25.7174 78.9994)"
                                    stroke="#979797" stroke-width="3" />
                            </svg>
                        </div>
                        <img src="${the_src_url}" alt="">
                        <div class="make-as-default">
                            <button>Make Default</button>
                        </div>
                    </div>
                `]).trigger('refresh.owl.carousel');
            };
        };
        reader.readAsDataURL(this.files[0]);
    };
});


$('body').on('click', ".remove-media-pic", function () {

    var i_num = $(this).parents('.media-items-img').data('iNum');
    
    $(".medial-items").trigger('remove.owl.carousel', [i_num]).trigger('refresh.owl.carousel');

    $.each($('.media-items-img'), function (index, useIt_item) {
        $(useIt_item).attr('data-i-num', `${index}` );
    });
});



var main_phone_img = $('#product-details .product-review .product-model .product-model-details .model-img img');

$('body').on('click', '.make-as-default button', function () {
    var this_img_address = $(this).parents('.media-items-img').find('img').attr("src");
    main_phone_img.attr("src", ` ${this_img_address} `)
    $('.media-default-img').attr("src", ` ${this_img_address} `);
});