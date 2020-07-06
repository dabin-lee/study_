
/*

1. 메인배너, 이전카운트, 다음카운트, 오토플레이 함수 생성
2. slide(cnt) 를 + -하고 메인 슬라이드 함수 호출시키는 이전, 다음 카운트 함수 생성
3. 카운트 함수와 cnt값을 전달받은 함수를 메인함수 애니메이트로 생성
3_2) 애니메이트 왼쪽으로 이동값 이지만, 이전 다음 제어문있는 함수 생성

4. 버튼 함수 생성 
	4-1. autoplay를 먼저 중지
	4-2. setId생성 (index값 알기위해?)
	4-3. 각 count슬라이드 호출
	4-4 애니메이션 진행중 상태 클릭을 못하게 제어문 생성
		1) 부정문으로 요소의 애니메이터 중지확인
		2) 확인되었으면 전역변수로 자동타이머 정지
		3) 함수호출
*/

;(function($){
	
	var cnt = 0,
		banner = $('.slide-wrap'),
		prevBtn = $('.prevBtn'),
		nextBtn = $('.nextBtn'),
		setId = 0;


		prevBtn.on({
			click:function(){
				if(!banner.is(':animated')){
					clearInterval( setId );
					prevCountFn();
				}
			}
		});

		nextBtn.on({
			click:function(){
				if(!banner.is(':animated')){
					clearInterval( setId );
					nextCountFn();
				}
			}
		});


		function mainBannerFn(){
			banner.animate({ left : -480*cnt},600,function(){
				if(cnt > 3){cnt = 0;}
				if(cnt < 0){cnt = 3;}
				banner.stop().animate({left : -480*cnt}, 0);
			});
		}

			function prevCountFn(){
				cnt--;
				mainBannerFn();
			}

			function nextCountFn(){
				cnt++;
				mainBannerFn();	
			}

			function autoPlayFn(){
				setId = setInterval(nextCountFn, 1000);
			}
			autoPlayFn();

})(jQuery);

