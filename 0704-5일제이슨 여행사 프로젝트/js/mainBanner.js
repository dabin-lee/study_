(function($,window,document,undefined){
	
	var cnt=0;
	var setId;
    var nextBtn  = $('.mainSlideNextBtn');
    var prevBtn  = $('.mainSlidePrevBtn');
	var mainCon  = $('.mainSlide-container');
	var mainBan  = $('.mainSlide-wrap');
	var pageBtn  = $('.mainSlidePageBtn')
	var slide    = $('.slide');
	var section2 = $('#moripCollection');
	var section3 = $('#moripKorea');
	var win      = $(window);
	var winW     = $(window).innerWidth();
	var winH     = $(window).innerHeight();

	
		//window - DOM(Document Object Modelling)	
		//1 메인배너 애니메이션 이벤트(selector: .mainSlide-wrap ) 함수
		function mainBannerFn(){
			//1 2 3
			mainBan.stop().animate({ left:(-100*cnt)+'%' },600,function(){
				if( cnt>2 ){ cnt=0 }
				if( cnt<0 ){ cnt=2 } 
				mainBan.stop().animate({ left:(-100*cnt)+'%' },0);
			});
			cnt>2?z=0:z=cnt;
			pageBtn.removeClass('addPage');
			pageBtn.eq(z).addClass('addPage');
		}
			//5 페이지버튼 클릭 이벤트 
			//each() 요소 객체(Object) 호)처리 반복처리한다.
			pageBtn.each(function(index){
				$(this).on({
					click:	function(){
						clearInterval(setId);
						cnt = index;
						mainBannerFn();
					}
				});
			});
			
		
		
			//2-1 다음슬라이드 카운트 함수
			function nextSlideCountFn(){
				cnt++; //1 2 3 
				mainBannerFn();
			}
			
			//2-2 이전슬라이드 카운트 함수
			function prevSlideCountFn(){
				cnt--;
				mainBannerFn();
			}
			
			//3 자동 타이머 함수
			function autoTimerFn(){
				setId = setInterval(nextSlideCountFn, 4000);
			}
			autoTimerFn();
			
			//4-1 다음슬라이드 버튼(selector: .mainSlideNextBtn ) 클릭 이벤트
			nextBtn.on({
				click:	function(){
					if( !mainBan.is(':animated') ){
						clearInterval(setId);
						nextSlideCountFn();	
					}
				}
			});
			
			//4-2 이전슬라이드 버튼(selector: .mainSlidePrevBtn ) 클릭 이벤트
			prevBtn.on({
				click:	function(){
					if( !mainBan.is(':animated') ){
						clearInterval(setId);
						prevSlideCountFn();
					}
				}
			});
			
			//터치 이벤트(swipe)
			mainCon.swipe({
				swipeLeft:	function(){ //다음슬라이드
					if( !mainBan.is(':animated') ){
						clearInterval(setId);
						nextSlideCountFn();						
					}
				},
				swipeRight:	function(){ //이전슬라이드
					if( !mainBan.is(':animated')  ){
						clearInterval(setId);
						prevSlideCountFn();	
					}
				}
			});

			
			//반응형 Response
			//window 객체 -  BOM(Browser Object Modelling)
			//$(window).resize(); 너비 높이가 변경될 때만 반응하는 메소드 이벤트
			function slideResizeFn(){
				winW = win.innerWidth();
				winH = win.innerHeight();
				slide.css({ width: winW, height: winH });
				section2.css({ marginTop: winH });
			}
			//로딩시 반응형 적용
			slideResizeFn();
			setTimeout(slideResizeFn, 100);
			
			//창크기 변경시 반응형 적용
			win.resize(function(){
				slideResizeFn();
				setTimeout(slideResizeFn, 100);
			});
			
			//다음 섹션 탑 위치로 부드럽게 이동 : 스무스 스크롤링
			//console.log( section2.offset().top );
			//다음섹션이동 버튼 클릭 이벤트
			$('.nextBtn').on({
				click:	function(){
					$('html,body').stop().animate({ scrollTop: section2.offset().top },800);               
				}
			});
			

})(jQuery,window,document);
//mainBanner.js




