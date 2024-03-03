$(document).ready(function () {
  $(
    '#cart_id, .in_cart, .marinade a, .catalog_tab > div, #catalog_open, .dropdown-item_toggle, .menu-btn, .dropdown_item > li:first-child a, .menu-plus_minus, .menu-plus_minus, #cat_meat_head, .popup_block_close, .popup_enter'
  ).click(function (e) {
    e.preventDefault();
  });

  //Таб "С маринадом или Без маринада"
  $('.marinade a').click(function () {
    $(this).siblings('.marinade_active').removeClass('marinade_active');
    $(this).addClass('marinade_active');
  });

  //Активный таб в catalog
  $('.catalog_tab > div').click(function () {
    $(this).siblings('.catalog_active').removeClass('catalog_active');
    $(this).addClass('catalog_active');
  });

  //Табы каталога
  $('.catalog_tab > div').click(function () {
    var block_class = '.' + $(this).attr('id') + '_item';
    $('.tabs').css('display', 'none');
    $(block_class).css('display', 'block');
  });

  // "Убирает" border-right у активного catalog_tab
  $('.catalog_tab > div').click(function () {
    $('.catalog_tab > div').removeClass('not_border');
    $(this).addClass('not_border');
    $(this).prev().addClass('not_border');
  });

  // Плавное появление меню
  $('#has_mega_menu, .dropdown').hover(
    function () {
      $('.dropdown').stop().fadeIn(300);
    },
    function () {
      $('.dropdown').stop().fadeOut(300);
    }
  );

  // Плавное появление корзины
  $('.header_cart-list, .header-cart_popup').hover(
    function () {
      $('.header-cart_popup').stop().fadeIn(300);
    },
    function () {
      $('.header-cart_popup').stop().fadeOut(300);
    }
  );

  $('.dropdown_item-check').click(function () {
    $(this).next().toggleClass('dropdown_item-check_active');
  });

  $('.dropdown-item_toggle').click(function () {
    $(this).parent().next('ul.list_item').slideToggle();
  });

  $('.menu-btn').click(function () {
    $('.nav_cart').slideToggle();
    $('header').toggleClass('header_mobile_menu');
    $(this).toggleClass('menu-btn_active');
  });

  $('.menu-plus_minus').on('click', function () {
    $(this).toggleClass('menu-plus_minus_active');
  });

  $(window).resize(function () {
    if ($(window).width() > 992) {
      $('.list_item').removeAttr('style'),
        $('.menu-btn').removeClass('menu-btn_active'),
        $('.menu-plus_minus').addClass('menu-plus_minus_active'),
        $('.border-bottom::after').removeAttr('style'),
        $('.nav_cart').removeAttr('style');
    }
  });

  $('#cat_meat_head').click(
    function () {
      $('.dropdown_categories_item').stop().fadeIn(300);
    },
    function () {}
  );

  $('#cat_meat_head').click(function () {
    $('.dropdown_categories_item').toggleClass(
      'dropdown_categories_item_active'
    );
    $(this).children('svg').toggleClass('rotate_img');
  });

  if ($(window).width() < 768) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 185) {
        $('.categories').addClass('categories_fixed');
      } else if ($(this).scrollTop() < 185) {
        $('.categories').removeClass('categories_fixed');
      }
    });
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.categories').addClass('categories_fixed');
    } else if ($(this).scrollTop() < 200) {
      $('.categories').removeClass('categories_fixed');
    }
  });

  $('.drop_cat_menu_item').click(function () {
    $('.drop_cat_menu_item').removeClass('drop_cat_menu_item_active');
    $(this).addClass('drop_cat_menu_item_active');
  });

  $add_goods = $('.kg').html();
  $('.add_goods').click(function () {
    $add_goods++;
    $(this).siblings('.kg').html($add_goods);
  });

  $remove_goods = $('.kg').html();
  $('.remove_goods').click(function () {
    $add_goods--;
    $(this).siblings('.kg').html($add_goods);
  });
});
