;(function($){
	var cnt=0;

		
		//1. 메인 슬라이드 함수 애니메이션
		function mainSlideFn(){
			$('.slide-wrap').animate({ left: -480*cnt },600, function(){
				if(cnt>3){ cnt=0; }
				$('.slide-wrap').animate({ left: -480*cnt },0); //리턴
			});
		}
		
		
		//2. next카운트함수
		function nextCountFn(){
			cnt++;//1 2 3 4  
			mainSlideFn();
		}
		
		//3. 자동(auto) 타이머(timer) 3초마다 자동 실행
		function autoTimerFn(){
			setInterval(nextCountFn, 3000); //3초 1초 1000 0.1초 100
		}
		//4. 자동타이머 함수 호출 실행
		autoTimerFn(); 
	
})(jQuery);
//mainSlide.js