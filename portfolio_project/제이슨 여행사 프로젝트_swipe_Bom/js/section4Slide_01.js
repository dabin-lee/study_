(function($,window,document,undefined){

    // rolling slide





    // rolling 순서
/*
    1. 변수만들기
        1-1). btn, indicator를 포함한 slidecontainer 변수 생성
        1-2). 화면에 slide가 보여지는 이미지 최대 숫자 변수
        1-3). 윈도우의 너비
        1-4). 화면에 나오는 contbox의 크기 (slidecontainer의 내부너비) => 적응형 창너비 1570
        1-5). 제어문으로 화면의 크기마다 슬라이드 크기를 3개 2개 1개로 만든다.

        2-1). 슬라이드의 너비 = 슬라이드컨테이너 내부값 * 제어문으로 만든 슬라이드 이미지. (3개의이미지를 나눔 1570 / 3 => 523.3333)
        2-2). 각 슬라이드를 감싼 슬라이드 wrap 변수
        2-3). 슬라이드 : 3개씩 롤링이 되기위해서
        2-4). 슬라이드 자식 > 이미지
        2-5). 슬라이드 캡션의 내부값 * 0.59450414, //지금 현재의 너비 (박스 슬라이드의 둥근이미지 크기를 구하기 위해)
        2-6). 버튼 변수

    2. 반응형 적용

        2-1) resizeFn 함수 만들기 - 함수안에 변수만들기
            (1) 윈도우 너비
            (2) 슬라이드 컨텐츠의 내부 너비
            (3) 제어문으로 윈도우너비와 이미지 출력갯수
            (4) 화면에 나오는 cont box의 크기를 3개로 나눈 변수
            (5) 각 슬라이드별 css로 너비 조절
                1-1). 슬라이드에 창너비 최소값으로 변경될 경우 너비 값을 변경
                1-2). 슬라이드wrap 너비와 마진값 변경
                1-3). 슬라이드 이미지 박스도 계산된 caption의 너비값으로 마진과 너비를 잡아줌
            (6) 리사이즈함수 호출
            (7) setTimeout을 이용해 일정 시간이 지난 후에 함수를 실행하는 방법 setTimeout(func|code, [delay], [arg1], [arg2], ...)
    */

        var cnt = 0,
            setId,
            imgN = 3, // 기본 이미지 3개
            slideContainer = ('.s4Slide-container'),
            winW = $(window).width(),
            slideConWidth = $('.s4Slide-container').innerWidth();
                if( winW > 1024) {
                    imgN = 3;
                }else if ( winW > 600){
                    imgN = 2;
                }else{
                    imgN = 1;
                }

            slideWidth = slideContainer / 3,
            slideWrap = $('.s4Slide-wrap'),
            slide = $('.s4Slide-wrap'),
            slideWrap = $('.s4Slide-wrap'),
            slide = $('.s4Slide'),
            slideImg = $('.s4Slide .image'),
            slideCaption = $('.s4Slide .caption').innerWidth() * 0.59450414;

            function resizeFn(){
            var winW = $(window).width(),
                slideContainer = $('.s4Slide-container').innerWidth();
                if(winW > 1024){
                    imgN = 3;
                }else if(winW > 600){
                    imgN = 3;
                }else{
                    imgN = 1;
                }
                slideWidth = slideCaption / 3,
                slideImgwidth = $('.s4Slide .caption').innerWidth()*0.59450414;

                slide.css({ windth : slideWidth} );
                slideWrap.css({ width : (slideWidth*12), marginLeft: (slideWidth*3)});
                slide.css({width:slideImgwidth , height:slideImgwidth});
                slideWrap.stop().animate({left: -523.3333333*cnt},0);
            }

            resizeFn();

                setTimeout(resizeFn,100);
                $(window).resize(function(){
                    resizeFn();
                });



})(jQuery,window,document);