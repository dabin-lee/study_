
(function($){
    var cnt = 0, //슬라이드만들땐 항상 선언
        banner = $('.mainSlide-wrap'),
        prevArrow = $('.mainSlidePrevBtn'),
        nextArrow = $('.mainSlideNextBtn'),
        setId;

        
    

    //1. 메인배너 애니메이션 이벤트(selector 선택자) 함수 
    function mainBanner(){   
        banner.stop().animate({left : (-100 *cnt)+ '%'},600,function(){ //백분율표기, 2번 이후 번호는 콜백으로
            if(cnt > 2){cnt = 0}
            if(cnt < 0){cnt = 2}
            banner.stop().animate({left: (-100 * cnt) + '%'},0);
        });
        

        cnt > 2 ? z=0 : z=cnt;    
        $('.mainSlidePageBtn').removeClass('addPage');
        $('.mainSlidePageBtn').eq(z).addClass('addPage');
    }

         $('.mainSlidePageBtn').each(function(i){
            $(this).on({ 
                click: function(){ //객체 이벤트 방식 -콜론이 따라옴
                    clearInterval(setId);
                    cnt = i;
                    mainBanner();
                }
            });
         });


        //2-1) 이전 슬라이드 카운트 함수
        function prevSlideCount(){
            cnt--;
            mainBanner();
        }

        //2-2) 다음 슬라이드 카운트 함수
        function nextSlideCount(){
            cnt++;
            mainBanner();
        }


        //3 자동 타이머 함수
        function autoPlay(){
            setId = setInterval(nextSlideCount, 4000);
        }

        autoPlay();


        //4-1) 이전 슬라이드 버튼 클릭 이벤트(selector)
        prevArrow.on({
            click:function(){
                if(!banner.is(':animated')){
                    clearInterval(setId);
                    prevSlideCount();
                }
            }
        });


        //4-2) 다음 슬라이드 버튼 클릭 이벤트(selector)
        nextArrow.on({
            click:function(){
                if(!banner.is(':animated')){
                    clearInterval(setId);
                    nextSlideCount();
                }
            }
        });

        // var slideCont = $('.mainSlide-container');

        banner.swipe({
            swipeLeft: function(){
                // alert('ddd');
                if(! banner.is(':animated')){
                    clearInterval(setId);
                    nextSlideCount();
                }
            },
            swipeRight : function(){   
                if(!banner.is(':animated')){
                    clearInterval(setId);
                    prevSlideCount();
                }
            }
        });


})(jQuery);