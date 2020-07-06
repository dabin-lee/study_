(function($,window,document,undefined){
	var cnt = 0;
	var setId = 0;
	var slideCon      = $('.s4Slide-container');
	var winW = $(window).innerWidth();
	var imgN = 3; //기본 3개
	var slideConWidth = $('.s4Slide-container').innerWidth();  //콘테이너박스 너비
		if( winW > 1024 ){ //1024초과
			imgN = 3;
		}
		else if( winW > 600 ){ //601~1024
			imgN = 2;
		}
		else{  //600이하
			imgN = 1;
		}
	
	
	var slideWidth    = slideConWidth / imgN; //523.3333333  //슬라이드너비
	var slideWrap     = $('.s4Slide-wrap');
	var slide         = $('.s4Slide');
	var slideImg      = $('.s4Slide .image');
	var slideImgWidth = $('.s4Slide .caption').innerWidth()*0.59450414;
	var pageBtn       = $('.pageBtn');
	

		//반응형 적용
		slide.css({ width: slideWidth });	
		slideWrap.css({ width: (slideWidth*12), marginLeft: (-slideWidth*3) });	
		slideImg.css({ width: slideImgWidth, height: slideImgWidth });
		
		function resizeFn(){
			winW = $(window).innerWidth();
			slideConWidth = $('.s4Slide-container').innerWidth();  //콘테이너박스 너비
		
			if( winW > 1024 ){ //1024초과
				imgN = 3;
			}
			else if( winW > 600 ){ //601~1024
				imgN = 2;
			}
			else{  //600이하
				imgN = 1;
			}

			slideWidth    = slideConWidth / imgN; //523.3333333  //슬라이드너비
			slideImgWidth = $('.s4Slide .caption').innerWidth()*0.59450414;

			slide.css({ width: slideWidth });	
			slideWrap.css({ width: (slideWidth*12), marginLeft: (-slideWidth*3) });	
			slideImg.css({ width: slideImgWidth, height: slideImgWidth });
			
			//반응형이 슬라이드메인함수 적용 left값 맞게된다.
			slideWrap.stop().animate({ left: -slideWidth*cnt }, 0);
			
		}	
		resizeFn();
		setTimeout(resizeFn,100);
		
		$(window).resize(function(){
			resizeFn();
		});
		
		
	
		//1. 슬라이드 메인함수
		function mainSlideFn(){
			slideWrap.stop().animate({ left: -slideWidth*cnt }, 800, function(){
				if( cnt>5 ){ cnt=0 }
				if( cnt<0 ){ cnt=5 }
				slideWrap.stop().animate({ left: -slideWidth*cnt }, 0);
			});
			cnt>5?z=0:z=cnt;
			pageBtn.removeClass('addPageBtnS4');
			pageBtn.eq(z).addClass('addPageBtnS4');
		}
		
		//2-1. 다음 슬라이드 카운트 함수
		function nextSlideCountFn(){
			cnt++;
			mainSlideFn();
		}
		
		//2-2. 이전 슬라이드 카운트 함수
		function prevSlideCountFn(){
			cnt--;
			mainSlideFn();
		}
		
		//3. 터치 스와이프 이벤트 
		slideCon.swipe({
			swipeLeft:	function(){
				if( !slideWrap.is(':animated') ){
					clearInterval(setId);
					nextSlideCountFn();					
				}
			},
			swipeRight:	function(){
				if( !slideWrap.is(':animated') ){				
					clearInterval(setId);
					prevSlideCountFn();
				}
			}
		});
		
		//4. 페이지버튼 클릭 이벤트
		pageBtn.each(function(idx){
			$(this).on({
				click:	function(){
					clearInterval(setId);
					cnt = idx;
					mainSlideFn();
				}
			});
		});
		
		
		//5. 자동타이머 함수
		function autoTimerFn(){
			setId = setInterval(nextSlideCountFn, 6000);
		}
		autoTimerFn();
		
		
		
		
		
		
		

	


})(jQuery,window,document);
//section4Slide.js