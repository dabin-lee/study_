#### 함수 선언식 - Function Declarations
    - 일반적인 프로그래밍 언어에서의 함수 선언과 비슷한 형식이다.
    ```
    function 함수명() {
    구현 로직
    }
    ```
      ```
      function funcDeclarations() {
      return 'A function declaration';
      }
      funcDeclarations(); // 'A function declaration'
      ```

#### 함수 표현식 - Function Expressions
    - 유연한 자바스크립트 언어의 특징을 활용한 선언 방식

      ```
      var 함수명 = function () {
      구현 로직
      };
      ```

      ```
      var funcExpression = function () {
          return 'A function expression';
      }
      funcExpression(); // 'A function expression'
      ```

#### 함수 선언식과 표현식의 차이점
- 함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지 않는다.
- 함수 선언식은 코드를 구현한 위치와 관계없이 자바스크립트의 특징인 호이스팅에 따라 브라우저가 자바스크립트를 해석할 때 맨 위로 끌어 올려진다.

- 실행 시
```
function logMessage() {
  return 'worked';
}

var sumNumbers;

logMessage(); // 'worked'
sumNumbers(); // Uncaught TypeError: sumNumbers is not a function

sumNumbers = function () {
  return 10 + 20;
};
```

- 출력결과
```
Uncaugth TypeError : sumNumber is not a function
```
- 함수 표현식 sumNumbers 에서 var 도 호이스팅이 적용되어 위치가 상단으로 끌어올려졌다.
- 하지만 실제 sumNumbers 에 할당될 function 로직은 호출된 이후에 선언되므로, sumNumbers 는 함수로 인식하지 않고 변수로 인식한다.
* 호이스팅을 제대로 모르더라도 함수와 변수를 가급적 코드 상단부에서 선언하면, 호이스팅으로 인한 스코프 꼬임 현상은 방지할 수 있다. *



#### hoisting
- 아래있는 선언만(을) 끌어올리는 현상을 호이스팅이라고 한다.
- 함수 안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위의 최상단에 선언을 하는 것을 말한다.
- var 키워드를 사용하면 호이스팅 문제가 야기될 확률이 높다. (var를 상단에 쓰지 않아도 허락이 되는 부분)
- let 키워드는 먼저 선언을해야 사용이 가능 -> 호이스팅 문제 해결


```
- 정상적 출력
//함수 먼저
function hello(){
  console.log('hello1');
}
hello(); // hello1

//함수의 호출 먼저
hello2(); // hello2
function hello2(){
  console.log('hello2');
}
```

- 이렇게 함수 뿐만아니라 변수 또한 호이스팅
```
//선 사용

age = 6;
age ++;
console.log(age);

// 후 선언
var age = 6;
```


```
(var name; -> 선언만 위로 올라오는것이 호이스팅 이다.)
console.log(name); //dabin
name = "mark"
console.log(name); //mark
name = "dabin";


선언되지 않은 let으로 된 변수를 사용 할 경우 -> 사용 불가
console.log(name); //name is not defined
name = "mark"
let name = "dabin";
```

var 키워드를 상단에 선언 하지 않아도 사용할 수 있기에 호이스팅이 생기고 이러한 문법이
let에는 문제가 없다. 선언이 상단으로 간다.


https://joshua1988.github.io/web-development/javascript/function-expressions-vs-declarations/

.