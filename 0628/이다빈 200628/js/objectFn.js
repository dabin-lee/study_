// objectFn.js

;(function($){  //즉시실행함수 - callback함수
    /*$는 jQuery로만 사용 외부와의 충돌을 모두 막음*/


    // 2. 객체 (object) 생성(create)
    // var sungjuk = {irum : '이다빈'};  내장객체 {중괄호}: 내가 사용할 객체를 만들어서 씀
    // var sungjuk - [];  배열객체 [대괄호]:  


    // var sungjuk = { //리터럴 객체 방식 (반대 new)
    //     irum : 'bin',
    //     kor : 100,
    //     eng : 99,
    //     mat : 70,
    //     edps : 80
    // }; //내장객체

    // console.log( sungjuk.irum, sungjuk.kor, sungjuk.eng, sungjuk.mat, sungjuk.edps );
    // console.log(sungjuk.edps);
    // console.log(sungjuk.kor);
    // console.log(sungjuk.mat);
    // console.log(sungjuk.eng);

    // 태그요소 중 선택자(selector) .output 클래스요소에 출력
    // $(선택자).text('출력값 ...') + 문자열 연결 연산자
    // 꾸밀떈 .html 꾸지미 않을땐 .text()
    
    // $('.output').text( sungjuk.irum + ',' + sungjuk.kor + ',' + sungjuk.eng + ',' + sungjuk.mat + ',' + sungjuk.edps); 
    // console.log( sungjuk.irum, sungjuk.kor, sungjuk.eng, sungjuk.mat, sungjuk.edps ); 
    // (, 를 문자열로 연결해서 출력해준다.) console은 문자열 결합없이 출력이 가능하지만 


    // 3. 변수에 저장해둔 후 요소에 간접 출력
    
    /*
    var txt = ''; //초기값이 빈값으로 들어간다. 
    var txt; //초기값이 undefined
    */  


    /*
    sungjuk.myPro
    생상된 객체(object).속성
    txt 변수에 저장해 두고 출력 요소에 간접 출력 [속성값]이 출력
    */

    var myPro = { //리터럴 객체 방식
        irum :  'ann', //속성 : 속성값 ( property : value )
        kor :    44,
        eng :    55,
        mat :    66,
        edps :   7,
        sum:     function(){ //콜백함수()
            return this.kor+this.eng+this.mat+this.edps; //myPro.kor+myPro.eng 
            //return : 더해진 결과 값을 내보내주란 의미
        },
        avg:    function(){
            return Math.floor(this.sum()/4); 
            //수학객체 M은 대문자 Math.round(반올림) / Math.ceil(자리올림) / Math.floor(자리내림)
        }
    }; //내장객체

    console.log( myPro.sum(), myPro.avg() ); 
    //객체에 함수가 들어가면 ()을 꼭 넣어줘야한다. 리터럴 객체 방식
    
    // var txt;
    // txt = myPro.irum + ', '
    // txt += myPro.kor + ', ' 
    // txt += myPro.eng + ', '
    // txt += myPro.edps + ', '
    // txt += myPro.mat + ', '
    // txt += myPro.sum + ', '

    // console.log(txt);
    // $('.output').text(txt);

    /* 
    1씩 증가 (누적 증가)
    cnt++; // 오로지 1씩만 증가
    cnt--; // 오로지 1씩만 감소
    
    [알고리즘 방식]
    cnt=cnt+1 //1씩 증가
    cnt=cnt+2 //2씩증가
    :
    cnt = cnt+5 //5씩 증가

    [일반 c표기법]
    cnt += 1; //1씩 증가
    cnt += 2; //2씩증가
    :
    cnt += 5; //5씩 증가
    */

    txt = '<li>' + myPro.irum + '</li>';
    txt +='<li>' +  myPro.kor + '</li>'; 
    txt +='<li>' +  myPro.eng + '</li>';
    txt +='<li>' +  myPro.edps + '</li>';
    txt +='<li>' +  myPro.mat + '</li>';
    txt +='<li>' +  myPro.sum() + '</li>'; //콜백함수 (괄호필수)
    txt +='<li>' +  myPro.avg() + '</li>'; //콜백함수 (괄호필수)
    $('.output').html(txt); //.html은 태그 추가




})(jQuery);
 //소괄호가 있어야 즉시실행함수가 실행 된다. 