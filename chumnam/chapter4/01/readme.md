
# 함수 정의

자바스크립트에서 함수를 생성하는 방법은 3가지가 있다.

## 함수 선언문? 식?(function statement)

함수 선언부를 다른 코드보다 먼저 읽고 실행한다는 뜻

<pre>
<code>
functionName(); 
function functionName(arg0, arg1, arg2){
	alert("hi"); 
}
</code>
</pre>

함수 선언전에 functionName()을 호출해도 정상적으로 동작하게 됩니다.


## 함수 표현식(function expression)

변수 선언과 비슷합니다. 차이점은 함수 이름이 선택 사항 이라는 점
<pre>
<code>
functionName(); //오류 발생 - 함수가 존재하지 않습니다. 
var functionName = function(arg0, arg1, arg2){
	alert("hi"); 
}
</code>
</pre>

## Function() 생성자 함수

그냥 알고만 있자


## 함수 리터럴

자바스크립트에서는 함수도 객체로 취급된다. 

그래서 객체 리터럴 방식으로 일반 객체를 생성할 수 있는 것처럼 함수도 __함수 리터럴__을 이용해 함수를 생성할 수 있다

리터럴(코드상에서 데이터를 표현하는 방식을 말함)


### 함수 리터럴
<pre>
<code>
function add(x, y){
	return x + y;
}
</code>
</pre>


### 함수 호이스팅

함수가 정의되지 않았음에도 코드 어딘가에 함수 선언문 형태로 정의한 함수가 있다면 그 함수의 호출이 가능합니다.

- 이러한 이유는 변수 생성과 초기화 작업이 분리돼서 진행되기 때문입니다.


# 함수 객체 : 함수도 

## 함수는 값으로 취급된다

함수도 일반 객체처럼 취급될 수 있다.

일급 시민

1. 변수(variable)에 담을 수 있다
2. 인자(parameter)로 전달할 수 있다
3. 반환값(return value)으로 전달할 수 있다

일급 객체

객체를 일급 시민으로 취급한다

일급 함수

일급시민의 조건과 함께 추가적인 조건이 필요

1. 런타임(runtime) 생성이 가능하다
2. 익명(anonymous)으로 생성이 가능하다


JavaScript에서 함수가 1급 객체인 것이 중요한 이유

1. 가장 중요한 장점은 바로 고차 함수(high order function)가 가능하다는 점이다.
2. 1급 객체가 JavaScript의 클로져(closure)와 만나면 또 하나의 장점이 생긴다. JavaScript의 함수는 생성될 당시의 Lexical Environment를 기억하게 되는데, 함수를 주고받게 되면 이 Lexical Environment도 함께 전달된다. 이것을 이용해서 커링(currying)과 메모이제이션(memoization)이 가능해진다. (이해가안됨)



그냥

객체선언에 리터널({})을 선호하는 이유

1.첫번째로 가독성이다. 
2.속도(미비하지만 빠르다)
3.overriden(재정의)에 대한 예방



구글의 자바스크립트 스타일 가이드 https://google.github.io/styleguide/javascriptguide.xml#JavaScript_Language_Rules


