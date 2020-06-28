;(function($){


    var cnt = 0;

    //1. mainslide function 
    function mainSlide(){
        $('.slide-wrap').animate({left : -480*cnt},800,function(){
            // 슬라이드가 0으로 돌아가는것이 보이지 않도록 시간초뒤에  콜백함수를 넣어준다. 
            if(cnt > 3){ cnt = 0; }
            $('.slide-wrap').animate({left : -480*cnt},0); //return
        });
    }

    //2. slide를 불러오기 위한 count(next) function
    function nextCountFn(){
        cnt++; //1 슬라이드가 4개이기에 index번호가 0, 1, 2, 3, 0, 1, 2, 3으로 반복해야 한다. 즉 3이상 나오면 안됨 -> 제어문을 활용해서 (if)
        mainSlide();// 메인슬라이드 함수를 호출하면 된다.
    }

    // 3. 자동타이머 auto Timer 3초마다 자동 실행
    function autoTimerFn(){
        setInterval(nextCountFn, 3000);
    }
    // 4. 자동타이머 함수 실행
    autoTimerFn(); //함수 호출
    
    
    
})(jQuery);