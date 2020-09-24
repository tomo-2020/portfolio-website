jQuery(document).ready(function() {

    //アコーディオン
    $(function($) {
        $('.js-active').on('click',function() {
            //クリックでコンテンツを開閉
            $(this).next().slideToggle(200);
            //矢印の向きを変更
            $(this).toggleClass( 'open', 200);
        });
    });


    //トップ戻る　スムーススクロール
    $(function() {
        var pagetop = $('#page-top');
        //ボタン非表示
        pagetop.hide();
        //100pxスクロールしたらボタン表示
        $(window).scroll(function() {
            if($(this).scrollTop() > 100) {
                pagetop.fadeIn();
            } else {
                pagetop.fadeOut();
            }
        });
        pagetop.click(function() {
            $('body, html').animate({ scrollTop: 0 }, 500);
            return false;
        });
    });


    //請求資料　スムーススクロール
    $(function(){
        $('a[href^="#"]').click(function(){
          var speed = 500;
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $("html, body").animate({scrollTop:position}, speed, "swing");
          return false;
        });
      });

});
