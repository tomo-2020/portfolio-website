jQuery(document).ready(function () {
  //スティッキーヘッダー
  $(function () {
    var $win = $(window),
      $hero = $('.hero'),
      $header = $('.header'),
      heroHeight = $hero.outerHeight();
    fixedClass = 'js-fixed';

    $win.on('load scroll', function () {
      var value = $(this).scrollTop();
      if ($win.width() > 768) {
        if (value > heroHeight) {
          $header.addClass(fixedClass);
        } else {
          $header.removeClass(fixedClass);
        }
      }
    });
  });

  //ハンバーガーメニュー
  $(function () {
    $('.hamburger-bottun').on('click', function () {
      $('.hamburger-bottun').toggleClass('js-hamburger-bottun--close');
      $('.header__sp-navi-wrapper').fadeToggle(500);
      $('.body').toggleClass('js-body--noscroll');// ナビ表示時のスクロールを防ぐ
      $('.header__sp-navi a[href]').off('click')// ボタンクリックの繰り返しを防ぐ
      $('.header__sp-navi a[href]').on('click', function (event) {// ナビをクリックした際にナビが閉じる
        $('.hamburger-bottun').trigger('click');
      });
    });
  });

});
