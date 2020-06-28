## jQuery / jQuery.noConflict() 

- 다른 라이브러리, 다른 버전의 jQuery와 충돌 방지하기
- jQuery는 $를 jQuery의 alias로 사용합니다. 그런데 다른 라이브러리에서 $를 함수나 변수로 사용한다면 jQuery가 제대로 작동하지 않을 수 있다. 
- 이를 방지하는 방법은 jQuery에서 $를 alias로 사용하지 않도록 하는 것이다 

- 1. jQuery.noConflict(); 넣으면 $를 다른 라이브러리가 사용하고, jQuery 코드를 만들 때는 $ 대신 jQuery를 사용한다.
```
jQuery.noConflict();
```
    
- 2. $를 사용하고 싶다면 다음과 같이 한다.
```
jQuery.noConflict();
jQuery(document).ready(function(){
    ///AAA
});
// BBB

 AAA에서는 jQuery가 $를 사용하고, BBB에서는 다른 라이브러리가 $를 사용한다.
```

- 3. jQuery의 alias를 다른 것으로 만드는 방법
    - 보호막을 만들어서 $ 사용을 변수로 가능하게 만든다.
```
var jQ = $.noConflict();
    jQ(function(){
        alert('jQ 문자로 $ 대신 사용함.');
    });
```

- 4. 함수 표현식 IIFE(즉시실행함수) 개발자 개발 함수식 사용 
    - 함수식을 만들어서 argument를 매개변수(parameter)에 전달하여 사용 가능하다.

```
(function (parameter1, parameter2, parameter3){
    파라미터(parameter)
    alert('실행문');
})(argument1, argument2, argument3);
    아규먼트(argument)
```
- 즉시실행함수에서 ()이 함수표현식 안에서 argument로 jquery를 매개변수 $ 기호 사용
```
 라이브러리 전역 변수 충돌 방지
    ```
    (function($){
    })(jQuery);
    ```
```
    - jquery를 사용할 때, $ 달러의 의미를 jqeury에서만 사용하겠다는 의미가 내포되어 있다. 
    - $ 달러 자체를 아예 함수의 매개변수로 선언을 하는 것.
    - 함수 안에서 $ 달러의 의미는 jquery의 객체로 사용이 된다는 의미이다. 


## 익명함수와 선언적함수의 차이점
- 익명함수 : function(){}형태는 함수이지만 이름을 가지고 있지 않으므로 익명함수라고 부른다.
    - 이름이 없으므로 변수에 넣어서 사용해야 한다.
    - 익명함수를 먼저 선언한 후 호출을 할 수 있다. (함수 선언문 위에서는 실행 불가) 
        - text1() <- 함수를 호출. 이 문장이 익명함수의 항상 뒤에 와야 한다.  
        - var test1 = function(){} 


- 선언적 함수 : function이라는 키워드를 사용하여 함수를 선언하는 것이다.
    - 선언적 함수를 호출할 땐 선언적 함수의 전에 와도 호출이 된다. 
    - 선언적 함수인 경우 스크립트 태그를 실행하기 전 먼저 읽기 때문이다. 
        - function test2(){}        



## IIFE (Immediately Invoked Function Expressions) 즉시 호출(실행) 함수 표현식 

1.  즉시 실행 함수는 함수 리터럴을 () 로 감싼 뒤 바로 실행하는 형태가 일반적이다.
    - ### 함수 리터럴 (Function Literal) = 익명함수
    - 자바스크립트에서 함수를 정의하는 표현식을 "함수 리터럴" 이라고 하고, 함수 리터럴은 아래 4개의 요소로 구성된다.
        - 예약어 function (필수)
        - 함수이름 (선택)
        - 매개변수 집합 (필수)
        - 함수 본문 (필수)
    ```
    function add(a, b) {
    return a + b
    }
    ```
    - 아래처럼 이름 없는 함수로도 작성하면 에러가 발생
    ```
    function (a, b) { return a + b } 
    ```

2. 함수이름은 선택사항이라고 했지만, 이름 없이 정의하는 경우에는 아래 조건이 충족되어야 한다.
    - 함수를 할당 받을 변수를 지정
    - 이 함수를 즉시 호출
    ```
    const add = function(a, b){return a + b};
    (function(a, b){
        return a + b})
        (1, 2); //3
    ```
- 함수 리터럴 표현식을 통해 즉시 실행 함수를 정의 할 수 있다.
- 그리고 즉시 실행 함수라는건 바로 위 코드처럼 즉시 실행되어 값으로 평가하는 함수를 의미한다. 

3. 즉시 실행 함수의 다양한 표현식 
- 왜 ()로 감싸야만 할까? : function(){}과 같이 작성되면, js코드를 해석하는 이것을 선언문(statement)로 인지한다. 
- (문과 식의 차이점 : )
- ()와 같이 괄호로 묶어주어 함수 선언문이 아닌 "함수표현식" 이라는 것을 명시적으로 나타내야한다. 


4. 즉시실행함수를 쓰는 이유
- 첫 로드 시 초기화 할 때 변수를 global하게 선언하고 싶지 않을 때
- 변수에 함수를 이용해 즉시 값을 할당하고 싶을 때
    - 라이브러리 전역 변수 충돌 방지
    ```
    (function($){
    })(jQuery);
    ```


  ### 파싱
