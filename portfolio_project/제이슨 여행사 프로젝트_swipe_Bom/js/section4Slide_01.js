(function($,window,document,undefined)

    var cnt = 0,
        setId,
        slideCount = $('.s4Slide-container'),

        winW = $(window).innerWidth(),
        imgN = 3,
        slideConWidth = $('.s4Slide-container').innerWidth();

        if( winW > 1024 ){
            imgN = 3;
        }
        else if( winW > 600 ){
            imgN = 2;
        }else{
            imgN = 1;
        }

    var slideWidth = slideConWidth / imgN,
        slideWrap = $('.s4Slide-wrap'),
        slide = $('.s4Slide'),
        slideImg = $('.s4Slide .image'),
        slideImgWidth = $('.s4Slide .caption').innerWidth()*0.59450414, //높이를 구하기 위해서 
        pageBtn = $('.pageBtn');


        6. 반응형 적용
        slide.css({width:slideWidth});


))(jQuery,window,document);