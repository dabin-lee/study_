
### jqeuryEVENT



1. method 체인
-> 메서드를 체인처럼 연결해서 작성하고 실행하는 방법
```
$('선택자').methodA().methodB().methodC();
```

2. .bind  ->  .on .off 이제는.bind 이벤트는 사용하지 않는다.
$('#type').on('이벤트 정류' 할일);
//할일 : 임의함수 = function(){}


```
$('#type').on('mouseover', function(){
    //아이디 type의 배경색을 green
   $(this).css('background', 'green'); //event가 일어나는 그 요소 -> this
}).on('mouseout', function(){
    $(this).css('background', 'blue');
});
```

3. on메서드 생략하고 method chain을 이용한 animate적용
```
$('#type').mouseover(function(){
   $(this).css('background', 'green');
}).mouseout(function(){
    $(this).css('background', 'blue');
});
```

4. ANIMATE
- 선택자.animate({속성:값, 속성:값},시간, 이징, 다른할일);
```
$(this).animate({opacity:0, fontSize:'0px'},1500);
```
- 1)easing효과 : linear, swing
     다른 라이브러리를 활용하면 다양한 효과 가능 (jquery UI)

    [jquery Ui를 사용]
    - script src에서 ui.min.js 꼭!
    - 2가지 easing효과 외에도 여러 종류 이징효과 사용 가능
    - $(this).animate({opacity:0, fontSize:'0px'},1500,'easeInOutElastic');


- 2)다른할일 : function(){실제할일} - 익명함수(임의함수)
```
   $(this).animate({opacity:0, fontSize:'0px'},1500,'easeInOutElastic',  //앞의 애니메이트가 끝나면 할일
   function(){
        $(this).animate({opacity:1, fontSize:'114px'},500,'swing');
   });
```

- 3)animate는 수치만 바꾸는 것이 가능!
  - 메소드는 색(color)에 관한 속성을 제외한 거의 모든 CSS 속성을 사용할 수 있다.
  - background-color등 style중 수치 외 부분은 jQuery UI를 사용해야 한다.

- [주의]
  * .css() 메소드에서는 하이픈(-)으로 연결된 CSS 속성 명과 camelCase 방식으로 바꾼 속성 명을 둘 다 사용할 수 있다.
  * 하지만 .animate() 메소드에서는 camelCase 방식의 속성 명만 사용할 수 있다.
```
   function(){
        $(this).animate({'backgroundColor' : 'blue'},500,'swing');
   });
```
- 4) animate의 stop
  - animate에는 이전에 하는 것을 멈춰야 한다.
  - strop은 true이기에 생략가능
```
  function(){
    $('div').mouseover(function(){
            $(this).stop(true).animate({'backgroundColor' : 'green'},500,'swing');
        })
        .mouseout(function(){
            $(this).stop().animate({'backgroundColor' : 'blue'},500,'swing');
        });
   });
```






5. find / filter


  [css]
  #images p span{} -> $image.find('span')
  #images p.strong{} -> $image.filter('strong')

- 공백이 있을 경우 find
- 공백이 없으면 filter
