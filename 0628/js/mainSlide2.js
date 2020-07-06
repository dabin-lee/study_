(function($){

    var cnt = 0;


    // 슬라이드만들기
    function mainSlide(){
        $('.slide-wrap').animate({left : -480*cnt},800,function(){
            if(cnt > 3){cnt = 0;}
            this.animate({left : -480*cnt}, 0);
        });
    }
    // count
    function slideCount(){
        cnt++;
        mainSlide();
    }
    function tiMer(){
        setInterval(() => {
            slideCount()
        }, 3000);
    }
    tiMer();
})(jQuery);