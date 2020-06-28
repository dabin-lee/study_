## 객체지향 이벤트방식
- 하나의 이벤트 다음 콤마(,)로 구분


// objectfundtion.js

// 객체 리터럴 함수 만들기 - 객체지향
;(function($){

    var txt=''; 
    var objFn = {
        // 리터럴 객체는 반드시 안에 생성
        a : 80,
        b : 90,
        c : ['멍멍', '야옹', '꿱꿱', "꿀꿀"],
        init : function(){  //intro function - 최초 로딩시 실행 할 함수
            this.slide();
            this.txtFn();
        }, //callback함수
        slide : function(){
            console.log('메인슬라이드!', this.a);
        },
        txtFn : function(){
            // 배열을 한꺼번에 출력하는 방법? 반복문 사용 - for
            for(i = 0; i <= this.c.length; i++){ 
            // for (i = 0; i <=3; i++){} 또는 for(var i = 0; i <= objFn.c.length; i++){
    /*
    반복문 for(변수 = 시작값; 변수 <= 종료값; 증감변수);
    반복문 변수를 i -> j -> k 로 자주 쓰임
    */      txt += '<p>' + this.c[i] + '</p>';
            }
            $('.output').html(txt);
        }
    } 

    objFn.init();
    // 객체를 만들고 전체실행
    
})(jQuery);