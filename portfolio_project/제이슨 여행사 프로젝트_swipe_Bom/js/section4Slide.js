(function($,window,document,undefined){
    
    // rolling slide
    var cnt = 0,
        setId,
        slideCont = $('.s4Slide-container'),
        
        winW = $(window).innerWidth(),
        imgN = 3; //기본 3개
        slideConWidth = $('.s4Slide-container').innerWidth(); //화면에 나오는 컨테이너 박스 1570
            if( winW > 1024){ //1024 초과
                imgN = 3;
            }
            else if (winW > 600){ //601~1024
                imgN = 2;
            }
            else{ // 600 이하
                imgN = 1;
            }
        
        slideWidth =  slideConWidth / imgN; //523.33333 슬라이드 너비
        slideWrap = $('.s4Slide-wrap'), //rolling을위해
        slide = $('.s4Slide'), //rolling을위해
        slideImg = $('.s4Slide .image'), 
        slideImgWidth = $('.s4Slide .caption').innerWidth()*0.59450414, //높이를 구하기 위해서 
        pageBtn = $('.pageBtn');

        //6.반응형 적용
        slide.css({width: slideWidth}); //슬라이드 한개당 너비
        slideWrap.css({width: (slideWidth*12), marginLeft: (-slideWidth*3)});
        slideImg.css({width: slideWidth, height: slideImgWidth});

        //이미지 박스도 같이 반응형되도록
        function resizeFn(){
            //계산값
            winW = $(window).innerWidth();
            slideConWidth = $('.s4Slide-container').innerWidth(); 
            if( winW > 1024){ //1024 초과
                imgN = 3;
            }
            else if (winW > 600){ //601~1024
                imgN = 2;
            }
            else{ // 600 이하
                imgN = 1;
            }
        

            slideWidth =  slideConWidth / 3; 
            slideImgWidth = $('.s4Slid .caption').innerWidth()*0.59450414, //지금 현재의 너비

            
            slide.css({width: slideWidth});
            slideWrap.css({width: (slideWidth*12), marginLeft: (-slideWidth*3)});
            slideImg.css({width: slideWidth, height: slideImgWidth});

            // 반응형이 슬라이드메인함수에 적용이 되어서 left값이 맞게 된다.
            slideWrap.stop().animate({left: -523.3333333*cnt},0);
        }

        resizeFn();
        setTimeout(resizeFn,100);

        $(window).resize(function(){
            resizeFn();
        });


    // 1. 슬라이드 메인함수
        function mainSlideFn(){
            slideWrap.stop().animate({left: -523.3333333*cnt},800,function(){ //6개의 슬라이드가 있으니 callback함수
                if(cnt > 5){cnt = 0}
                if(cnt < 0){cnt = 5} 
                slideWrap.stop().animate({left: -523.3333333*cnt},0);
            }); //css에서 position:relative꼭 확인! transform은 익스9이하는 적용이 안됨. 사파리도 안됨


            //  indicator
            var z;

            cnt > 5 ? z = 0 : z = cnt;
            pageBtn.removeClass('addPageBtnS4');
            pageBtn.eq(cnt).addClass('addPageBtnS4');
            
        }

        // 2-1. 다음 슬라이드 카운트 함수
            function nextSlideCountFn(){
                cnt++;
                mainSlideFn();
            }

        // 2-2. 이전 슬라이드 카운트 함수
            function prevSlideCountFn(){
                cnt--;
                mainSlideFn();
            }

    // 3. 터치 스와이프 이벤트 - 애니메이션이 안될 떄만 스와이프 작동
        slideCont.swipe({
            swipeLeft : function(){
                if(!slideWrap.is(':animated')){
                    clearInterval(setId);
                    nextSlideCountFn();
                }
            },
            swipeRight : function(){
                if(!slideWrap.is(':animated')){
                    clearInterval(setId);
                    prevSlideCountFn();
                }
            }    
        });
    
    // 4. 인디게이터 클릭 이벤트 
        pageBtn.each(function(index){
            $(this).on({
                click : function(){
                    clearInterval(setId);
                    cnt = index; 
                    mainSlideFn();
                }
            });
        });



    // 5. 자동 타이머 함수
        function autoTimerFn(){
            setId = setInterval(nextSlideCountFn,3000);
        }
        autoTimerFn();


})(jQuery,window,document);