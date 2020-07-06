
/*
1. mainbanner함수 
2. 
*/

(function($){
    //슬라이드가 4개이니까 0~4까지 증가할 것
    var cnt = 0, 
        banner = $('.slide-wrap'),
        prevBtn = $('.prevBtn'),
        nextBtn = $('.nextBtn'),
        setId = 0;



    //버튼 이벤트
    nextBtn.on({
        click:function(){ //모든것은 콜백함수로 시작해서 끝~ alert('next') -> btn눌렀을 떄 얼럿 확인;

                //애니메이션이 진행중인 상태에서는 클릭을 못하게 막는 방법
                // 애니메이션이 진행이 안될 때만 클릭하게 한다.
                //  ! ~~가 아닐때 ==  not(부정)
                if( !banner.is(':animated') ){
                    //2_1) autoplay를 중지 , setId생성 
                    clearInterval( setId );
                    nextCountFn(); //2_3) 다음 count슬라이드 호출\
                }
            }
        });

    //이전 버튼
    prevBtn.on({
        click:function(){
            if( !banner.is(':animated') ){
                clearInterval(setId); //자동타이머 중지
                prevCountFn(); //이전함수 호출
            }
        }
    });



    // 1. mainBanner
    function mainBannerFn(){ 
        //1_4) nextcountfn() 함수가 호출되고 cnt가 전달 됨
        //1_5) 셀렉터(선택자)를 animation 이벤트 발생 


        // console.log(cnt); 4까지 출력됨
        banner.animate({left : -480*cnt},600, function(){
            //from이 css에서 left값이 되어있기에 to값만
            // 4이후 카운트에서 if문
            if(cnt>3){cnt = 0;} //cnt가 3보다 크면 0 으로 초기화(마지막 슬라이드가 넘어가면 처음으로 초기화)
        //2_4) 이전버튼 슬라이드 리턴해줌
            if(cnt<0){cnt = 3;}//(처음 슬라이드가  이전으로 넘어가면 마지막으로 초기화)
            
            // console.log(cnt); 3까지 출력
            banner.stop().animate({left : -480*cnt}, 0); //초기화 된 0순서는 순간이동 0값
        }); // 애니메이트는 진행되는 것이 남아있기에 버튼누른만큼 이동 -> 버블링을 막는것

    }

        // 2. prevCountFn
        function prevCountFn(){ 
            cnt--; //3 2 1 0 -1 3 2 1 0 
            mainBannerFn(); //main함수 호출
        }
        
        // 3. nextCountFn
        function nextCountFn(){  
            cnt++; //1_2) slide를 증가시킴
            mainBannerFn(); //1_3)main함수 호출
        }

        // 4. autoplayFn
        function autoPlayFn(){ 
            //2_3) 
            setId = setInterval(nextCountFn, 4000); //1_1) 홈페이지가 로딩 시 4초 후 nextcount를 호출함 
            //오토플레이 함수의 셋인터벌을 갖고 있는 setid 전역변수
        }

        autoPlayFn(); //실제 실행함수

})(jQuery);

// 아규먼트는 제이쿼리만 매개변수는 달러로 달러는 제이쿼리에서만 사용


// setInterval 을 중지시키는 메소드 : clearInterval()