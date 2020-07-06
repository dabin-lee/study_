// DOM (Document Object Modeling) - 태그 요소와 관계된 모든것

(function($,window,document,undefined){
    // 
    var cnt = 0, //슬라이드만들땐 항상 선언
        banner = $('.mainSlide-wrap'),
        slideCont = $('.mainSlide-container'),
        prevArrow = $('.mainSlidePrevBtn'),
        nextArrow = $('.mainSlideNextBtn'),
        // slideCont = $('.mainSlide-container'),
        pageBtn = $('.mainSlidePageBtn'),
        setId;

        
    
 
    function mainBanner(){   
        banner.stop().animate({left : (-100 *cnt)+ '%'},600,function(){ 
            if(cnt > 2){cnt = 0}
            if(cnt < 0){cnt = 2}
            banner.stop().animate({left: (-100 * cnt) + '%'},0);
        });
        
        cnt > 2 ? z=0 : z=cnt;
        pageBtn.removeClass('addPage');
        pageBtn.eq(z).addClass('addPage');
    }
        pageBtn.each(function(i){
           
            $(this).on({ 
                click: function(){ 
                    clearInterval(setId);
                    cnt = i;
                    mainBanner();
                }
            });
         });


        function prevSlideCount(){
            cnt--;
            mainBanner();
        }

        function nextSlideCount(){
            cnt++;
            mainBanner();
        }

        function autoPlay(){
            setId = setInterval(nextSlideCount, 4000);
        }

        autoPlay();

        prevArrow.on({
            click:function(){
                if(!banner.is(':animated')){
                    clearInterval(setId);
                    prevSlideCount();
                }
            }
        });

        nextArrow.on({
            click:function(){
                if(!banner.is(':animated')){
                    clearInterval(setId);
                    nextSlideCount();
                }
            }
        });


        // 터치 이벤트 (swipe)
        /*
        1. 슬라이드를 전체 덮고 있는 박스 (arrow indicator까지 다 갖고 있는) 찾기 -> var slideCont = mainSlide-cont 
        2. 메인베너 함수안에 작동되는 (슬라이드를 모두 감싼) 부모의 애니메이션이 멈췄을 때  clearInterval을 해줌
        3. 터치가 아닐 떄는 진행이 되도록 함수호출
        */


       slideCont.swipe({
            swipeLeft:function(){ //다음
                if(!banner.is(':animated')){
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


        // 화면너비가 비율계산 
        // 반응행 response
        // window객체는 dom과 bom이있당
        // window 객체를 사용 /  BOM (Browser Object Modeling) - 브라우저에서 동작하는 
        // resize(); 너비, 높이가 변경될 때만 반응하는 메소드 이벤트  ()

    /*
        $(window).resize(function(){
            console.log('창 in 너비 : ' + $(window).innerWidth());
            console.log('창 in 높이 : ' + $(window).innerHeight());
            .innderWidth() : 실제 cont의 작업영역


            console.log('창 너비 : ' + $(window).width());
            console.log('창 높이 : ' + $(window).height());
            console.log('창 out 너비 : ' + $(window).outerWidth());
            console.log('창 out 높이 : ' + $(window).outerHeight());
            
        });
    */


    var win = $(window),
        winW = $(window).innerWidth(),
        winH = $(window).innerHeight(),
        slide = $('.slide');
        // 기본 값을 가져온 변수



    // section2 마진값 
    var section2 = $('#moripCollection'); //js에서 구동이 안될경우  기본은 css작동 
    // console.log(winH);


        //1.홈페이지 로딩될 때 먼저 함수로 실행 (함수호출로 인해 간단해진다.) 반응형 적용
        function slideResizeFn(){
            
            //창의 값이 바뀔때마다 값이 필요
            //함수안에는 this보단 본 객체 이름을 권장 ($(this) -> win)
            winW = win.innerWidth(); 
            winH = win.innerHeight(); 

            // 슬라이드 너비 설정 
            //- CSS에 있는 SLIDE의 width , height갑 변경 
            // slide 높이와 너비를 창inner값으로 
            slide.css({width: winW, height: winH});
            section2.css({ marginTop: winH}); // section1의 창높이 결정
        }
        slideResizeFn();
        setTimeout(slideResizeFn, 100); //0.1초이후 강제로 무조건 실행 (slideResizeFn이 실행 되지 않는 것을 방지)

        //2. 브라우저 리사이징 될 때 반응형 적용
        win.resize(function(){
            slideResizeFn();
            setTimeout(slideResizeFn, 100);
        });


    // 다음section 탑 위치로 부드럽게 이동 : 스무스 스크롤링
        // 위에서 현재값까지 간격 알아볼 때 -> offset().top & .offset().left 두가지 뿐
        // console.log(section2.offset().top);
        // console.log(section2.offset().left);
    // 다음 섹션 버튼 클릭 이벤트 
        $('.nextBtn').on({
            click : function(){
                $('html, body').stop().animate({scrollTop: section2.offset().top},1000);
                //$('html, body')  :  웹문서 내에서 이동하겠다는 의미 
                //.stop()은 버블링 방지
                //스크롤 탑값을 섹션2번의 오프셋 탑값으로 가겠다는 애니메이션
            }
        })


})(jQuery,window,document);