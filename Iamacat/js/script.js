jQuery(document).ready(function() {

    //スムーズスクロール トップへ戻る
    $(function() {
        var pagetop = $('#js-scroll-top');
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


    //スムーズスクロール
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
