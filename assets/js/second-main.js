$('.product-title-menu').click(function () {
    $(this).find('span').toggleClass('rotting');
    $(this).parents('ul').find('.product-sub-menus').slideToggle(300);
})

$('.add-group-title span').click(function (e) {
    $('.edit-or-delate').slideToggle(200);
})


// appending list
var owner_id = 0;
$('.add-new-btn').click(function () {
    owner_id++
    $('.appending-the-list').append(`
        <li class="main-navigation-list sub-navigation-items" data-owner-id= ${owner_id} >
            <div class="navigation-area">
                <div class="navigation-drop-down-icon">
                    <span class="nav-plus-icon">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus"
                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </span>
                    <span class="nav-minus-icon">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dash"
                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                    </span>
                </div>
                <input class="appending-first-input-nav" type="text" value=".....">
                <span class="new-nav-create"> <i class="fas fa-ellipsis-v"></i> </span>

                <div class="add-or-delate-new-nav">
                    <p class="add-sub-navigation-btn"> Add Sub-Navigation </p>
                    <p class="remove-sub-navigation-btn"> Delate Sub-Navigation </p>
                </div>
            </div>
        </li>
    `);
})

$('.appending-the-list').on('click', '.new-nav-create', function () {
    if ($('.add-or-delate-new-nav').is(":visible")) {
        $('.add-or-delate-new-nav').slideUp(200);
        $(this).removeClass('opacity-showing-2');
    } else {
        $(this).parents('.navigation-area').find('.add-or-delate-new-nav').slideDown(200);
        $(this).addClass('opacity-showing-2');
    }

})

$('.appending-the-list').on('click', '.add-sub-navigation-btn', function () {
    var this_owner_data = $(this).parents('.main-navigation-list.sub-navigation-items').data();

    $(this).closest('.main-navigation-list').append(`
        <ul class="sub-navigation-items" data-parent-id=${this_owner_data.ownerId}>
            <li class="main-navigation-list">
                <div class="navigation-area">
                    <div class="navigation-drop-down-icon">
                    </div>
                    <input type="text" value=".....">
                    <span class="new-nav-create"> <i class="fas fa-ellipsis-v"></i> </span>

                    <div class="add-or-delate-new-nav">
                        <p class="add-sub-navigation-btn"> Add Sub-Navigation </p>
                        <p class="remove-sub-navigation-btn"> Delate Sub-Navigation </p>
                    </div>
                </div>
            </li>
        </ul>
    `);

    $('.add-or-delate-new-nav').slideUp(200);
    if ($(this).parents('.main-navigation-list').closest('ul').length > 0) {
        $(this).parents('.navigation-area').find('.navigation-drop-down-icon .nav-minus-icon').addClass('display-grid');
    }
    $(this).parents('.main-navigation-list').closest('ul.sub-navigation-items').slideDown(200);
    $('.new-nav-create').removeClass('opacity-showing-2')

})

$('body').on('click', '.remove-sub-navigation-btn', function () {
    $(this).closest('.sub-navigation-items').remove();
    $('.add-or-delate-new-nav').slideUp(200);
    $('.new-nav-create').removeClass('opacity-showing-2');
})

$('body').on('click', '.main-navigation-list .remove-sub-navigation-btn', function () {

    var parent_Id = $(this).parents('ul.sub-navigation-items').data();

    if (parent_Id) {
        if (($(`.sub-navigation-items[data-owner-id= ${parent_Id.parentId}] ul`).length == 0)) {
            $(`.sub-navigation-items[data-owner-id= ${parent_Id.parentId}]`).find('.navigation-drop-down-icon .nav-minus-icon').removeClass('display-grid');
        }
    }

    $('.new-nav-create').removeClass('opacity-showing-2')
})


$('.appending-the-list').on('click', '.nav-minus-icon', function () {
    $(this).removeClass('display-grid')
    $(this).parents('.navigation-drop-down-icon').find('.nav-plus-icon').addClass('display-grid');
    $(this).parents('.main-navigation-list').find('ul.sub-navigation-items').slideUp(200)
})

$('.appending-the-list').on('click', '.nav-plus-icon', function () {
    $(this).removeClass('display-grid')
    $(this).parents('.navigation-drop-down-icon').find('.nav-minus-icon').addClass('display-grid');
    $(this).parents('.main-navigation-list').find('ul.sub-navigation-items').slideDown(200)
})



// ================================== (suppliers page)

$('.fas.fa-ellipsis-v.axz').click(function () {
    $('.supplier-status-drop-down').slideToggle(200)
})

$('.enable-disable').click(function () {
    $(this).toggleClass('en-dis-btn');
    $(this).parents('.status-enable-disable').find('.disable-status').toggleClass('d-inline');
    $(this).parents('.status-enable-disable').find('.enable-status').toggleClass('d-none');
    $(this).parents('.catalogue-boxes').find('ul').toggleClass('opacity-change');
    $(this).parents('.catalogue-boxes').find('.description-1').toggleClass('opacity-change');
    $(this).parents('.catalogue-boxes').find('.catalogues-option-icon').toggleClass('click-disable');
    $(this).parents('.catalogue-boxes').find('.catalogues-option-list').toggleClass('click-disable');

})

$('.check-it').click(function () {
    $(this).find('span').toggleClass('d-inline');
    $(this).toggleClass('opacity-showing');
})

$('.fas.fa-ellipsis-v.catalogues').click(function () {
    $(this).parents('.catalogue-boxes').find('.catalogues-option-list').slideToggle(200);
    $(this).parents('.catalogues-option-icon').toggleClass('d-inline')
})

$('.input-select-drop-down').click(function () {
    $(this).parents('.input-boxes').find('.input-select-options-1').slideToggle(200);
});

$('.input-select-options-1 input').click(function () {
    var this_select_value = $(this).val()
    $(this).parents('.input-boxes').find('.input-select-drop-down').val(`${this_select_value}`);
})

$('.table-list-upgrading-option').click(function () {
    $(this).find('.table-list-upgrading-drop-down').slideToggle(200);
});

// +++++++++++++++++++++++++++++++++++++++++++++

$('.input-select-options-1 input').click(function () {
    $(this).parents('.input-select-options-1').slideUp(200);

})

$('.region-value input').click(function () {
    $('.appending-chosen-resin-value').val($(this).val());
    $('.appending-chosen-resin-value').parents('.appending-chosen-value-boxes').addClass('d-block');
    $('.appending-chosen-value').addClass('display-grid');
})

$('.category-value-1 input').click(function () {
    $('.appending-chosen-category-value').val($(this).val());
    $('.appending-chosen-category-value').parents('.appending-chosen-value-boxes').addClass('d-block');
    $('.appending-chosen-value').addClass('display-grid');
})

$('.appending-chosen-value-boxes span').click(function () {
    $(this).parents('.appending-chosen-value-boxes').removeClass('d-block');
    $(this).parents('.appending-chosen-value-boxes').find('input').val(null);
    $('.discount-btn-show input').val('Discount')
})

$('.appending-chosen-value-boxes span[data-span-delate=1]').click(function () {
    $('.region-value').parents('.input-boxes').find('.input-select-drop-down').val('- - -')
})
$('.appending-chosen-value-boxes span[data-span-delate=2]').click(function () {
    $('.category-value-1').parents('.input-boxes').find('.input-select-drop-down').val('- - -')
})

$('.reset-btn').click(function () {
    $('.region-value').parents('.input-boxes').find('.input-select-drop-down').val('- - -');
    $('.category-value-1').parents('.input-boxes').find('.input-select-drop-down').val('- - -');
    $('.appending-chosen-value-boxes').removeClass('d-block');
    $('.appending-chosen-value').removeClass('display-grid');
})

$('.discount-value').change(function () {
    $('.discount-btn-show').addClass('d-block');
    $('.appending-chosen-value').addClass('display-grid');
})

$('.check-it-1').click(function () {
    $(this).parents('.dropping-list').find('.sub-option-12').slideToggle(200)
})

$('.modal-selector-1').click(function () {
    $('.drop-down-selector-1').slideToggle(200)
})


// ========================================================
$(document).click(function (e) {
    if (e.target.className !== "edit-or-delate-icon") {
        $('.edit-or-delate').slideUp(200);
    }

    if (e.target.className !== "sub-nav-icon d-grid") {
        $('.add-or-remove-drop').slideUp(200);
        $('.sub-nav-icon').removeClass('d-grid');
    }

    if (e.target.className !== "fas fa-ellipsis-v axz") {
        $('.supplier-status-drop-down').slideUp(200);
    }

    if (e.target.className !== "new-nav-create opacity-showing-2") {
        $('.add-or-delate-new-nav').slideUp(200);
        $('.new-nav-create').removeClass('opacity-showing-2')
    }

    if (e.target.className !== "input-select-drop-down") {
        $('.input-select-options-1').slideUp(200);
    }

    if (e.target.className !== "text-left input-boxes-selector-1") {
        $('.input-boxes-selector-option').slideUp(200);
    }

    if( e.target.className !== "fas fa-ellipsis-v catalogues" ){
        $('.catalogues-option-list').slideUp(200);
        $('.catalogues-option-icon').removeClass('d-inline')
    }
    //console.log(e.target.className)
})





// modified ########################################################
$('.input-boxes-selector-1').click(function () {
    if ($('.input-boxes-selector-option').is(':visible')) {
        $('.input-boxes-selector-option').slideUp(200);
    } else {
        $(this).parents('.input-boxes-drop-down-1').find('.input-boxes-selector-option').slideDown(200);
    }
})

$('.input-boxes-selector-option input').click(function(){
    $(this).parents('.input-boxes-drop-down-1').find('.input-boxes-selector-1').val(`${$(this).val()}`)
})

var registered_address_check = false;

$('.registered-address-check-box').click(function () {

    var first_address = $('.m-registered-address-one');
    var second_address = $('.m-registered-address-two');
    var city_address = $('.m-registered-address-city');
    var state_address = $('.m-registered-address-state');
    var country_address = $('#m-registered-address-country');


    if (!registered_address_check) {
        $('.c-registered-address-one').val(`${ first_address.val() }`);
        $('.c-registered-address-two').val(`${ second_address.val() }`);
        $('.c-registered-address-city').val(`${ city_address.val() }`);
        $('.c-registered-address-state').val(`${ state_address.val() }`);
        $('#c-registered-address-country').val(`${ country_address.val() }`);

        first_address.keyup(function () {
            $('.c-registered-address-one').val(`${ first_address.val() }`);
        });
        second_address.keyup(function () {
            $('.c-registered-address-two').val(`${ second_address.val() }`);
        });
        city_address.keyup(function () {
            $('.c-registered-address-city').val(`${ city_address.val() }`);
        });
        state_address.keyup(function () {
            $('.c-registered-address-state').val(`${ state_address.val() }`);
        });

        country_address.click(function(){
            $('#c-registered-address-country').val(`${ country_address.val() }`);
            console.log($(this).val())
        });

        registered_address_check = true;

    } else if (registered_address_check) {

        first_address.off('keyup');
        second_address.off('keyup');
        city_address.off('keyup');
        state_address.off('keyup');

        registered_address_check = false;
    };
});


$('.en-dis-btn-1').click(function(){
    $(this).toggleClass('en-dis-btn')
})





// +++++++++++++++++++++++++++++++++++++++++++

$(".section-title-slide-click").click(function(){
    $(this).parents('section').find('.section-full-info-wrapper').slideToggle(350);
    $(this).parents('.section-header-1').toggleClass('margin-zero');
    $(this).find('span').toggleClass('rotating-90')
})