
/*
    //indicator - class on 생성
    1. addClass로 on이 되었을때 클래스를 만들어준다. 
    2. 메인배너 함수문 안에 바로 콜백으로 넣지 않는이유? -> 슬라이드가 움직이고 인디게이터가 on이 되기에 템포가 맞지 않아진다.
    3. if문안에서 cnt를 z라는 새로운 변수로 만들어 사용한다. cnt를 그대로 사용하면 메인배너 함수안의 cnt에 따른 애니메이션 이벤트도 틀어지기 떄문
    4. if/ele 제어문으로 인디게이터 개수에 따라 ture false를 만든다. 축약형인 삼항연산자로 생성
    5. 모든 선택자에 on 클래스는 지워준다.
    6. 현 슬라이드에 맞는 eq에 on클래스를 넣어준다.

    // indicator click event 생성
    1. 인디케이터 각각의 선택자 eq에 이벤트를 만들어주면 끝!
    2. 하지만, 인디케이터 수가 늘어날 수록 각각 이벤트를 만들어 주기 어렵기떄문에 each문을 사용한다.
    3. each메소드는 각 요소의 객체를 배열처리 (index)후 반복처리한다. 그리고 콜백함수를 필로 사용한다.
    4. each는 매개변수로 index를 줘야 한다. 

*/



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
        
        //4. 인디케이터
        /*
        // page button Event - > 콜백함수로 쓸경우에는 애니메이션이 진행 된 후 바뀌기에 템포가 느림
        $('.mainSlidePageBtn').removeClass('addPage');
        if(cnt > 2){z = 0;}  // cnt가 2보다 크면 새로운 변수 z를 사용 (cnt를 쓸경우엔 위에 애니메이트 이벤트도 틀어짐)            
                             //3 (무조건 3인경우에만 바꿔짐)

        }esle{z = cnt; // 0 1 2}
        $('.mainSlidePageBtn').eq(z).addClass('addPage');// 현재 슬라이드의 번호에만 클래스 추가
*/
        cnt > 2 ? z=0 : z=cnt; // 삼항연산자를 이용해서 간출이기 cnt가 2보다 크면 z=0 그렇지 않으면 z=cnt   
        $('.mainSlidePageBtn').removeClass('addPage');
        $('.mainSlidePageBtn').eq(z).addClass('addPage');
    }

        // 5. 인디게이터 클릭 이벤트 - .each메소드사용
        // each() 요소 객체(object) (-> 기존 eq()를 사용했던것 )를 배열(index)처리 후 반복처리함 
         $('.mainSlidePageBtn').each(function(i){
            //each는 콜백함수에 매개변수로 index번호를 줘야한다.
            $(this).on({ //btn등록  //이버튼을 클릭하면~   // mainSlidePageBtn.addEventListener('click', function(){ });
                click: function(){ //객체 이벤트 방식 -콜론이 따라옴
                    clearInterval(setId);
                    cnt = i;
                    mainBanner();
                }
            });
         });




    /* 
        $('.mainSlidePageBtn').eq(0).on({
            click : function(){
                clearInterval(setId);
                cnt = 0; //첫번째는 0번
                mainBanner();  // 메인함수가 받아야 하기에
            }
        });
        $('.mainSlidePageBtn').eq(1).on({
            click : function(){
                clearInterval(setId);
                cnt = 1; 
                mainBanner();
            }    
        });
        $('.mainSlidePageBtn').eq(2).on({
            click : function(){
                clearInterval(setId);
                cnt = 2; 
                mainBanner();
            }
        });
    */



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

// 버튼의 버블링을 막기 위해 (버튼누를때 애니메이션 구동 중지) -> if(!banner.is(':animated')){
// 자동타이머 중지 :  setinterval에 전역변수(setId)를 주고 각 슬라이드 제어문에 부정문 후 clearInterval주기 


// 현재 슬라이드위치는 count로 알게됨~ cnt값으로 page확인 




})(jQuery);