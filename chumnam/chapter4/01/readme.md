
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

자바스크립트에서는 함수도 객체로 취급된다. <br>
그래서 객체 리터럴 방식으로 일반 객체를 생성할 수 있는 것처럼 함수도 __함수 리터럴__을 이용해 함수를 생성할 수 있다 <br>
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




# 함수 객체 : 함수도 객체다

## 함수도 객체다

## 함수는 값으로 취급된다

함수도 일반 객체처럼 취급될 수 있다.

__일급 시민__<br>
1. 변수(variable)에 담을 수 있다
2. 인자(parameter)로 전달할 수 있다
3. 반환값(return value)으로 전달할 수 있다

__일급 객체__<br>
객체를 일급 시민으로 취급한다

__일급 함수__<br>
일급시민의 조건과 함께 추가적인 조건이 필요<br>
1. 런타임(runtime) 생성이 가능하다
2. 익명(anonymous)으로 생성이 가능하다

__JavaScript에서 함수가 1급 객체인 것이 중요한 이유__<br>
1. 가장 중요한 장점은 바로 __고차 함수__(high order function)가 가능하다는 점이다.
2. 1급 객체가 JavaScript의 클로져(closure)와 만나면 또 하나의 장점이 생긴다. JavaScript의 함수는 생성될 당시의 Lexical Environment를 기억하게 되는데, 함수를 주고받게 되면 이 Lexical Environment도 함께 전달된다. 이것을 이용해서 커링(currying)과 메모이제이션(memoization)이 가능해진다. (이해가안됨)

### 변수나 프로퍼티의 값으로 할당
<pre>
<code>
// 변수에 함수 할당
var foo = 100;
var bar = function () { return 100; };
console.log(bar()); // 100

// 프로퍼티에 함수 할당
var obj = {};
obj.baz = function () {return 200; }
console.log(obj.baz()); // 200
</code>
</pre>


### 함수인 자로 전달
<pre>
<code>
// 함수 표현식으로 foo() 함수 생성
var foo = function(func) {
    func(); // 인자로 받은 func() 함수 호출
};

// foo() 함수 실행
foo(function() {
    console.log('Function can be used as the argument.');
});
</code>
</pre>


### 리턴값으로 활용
<pre>
<code>
// 함수를 리턴하는 foo() 함수 정의
var foo = function() {
    return function () {
        console.log('this function is the return value.')
    };
};

var bar = foo();
bar();
</code>
</pre>


### 


__그냥__

객체선언에 리터널({})을 선호하는 이유<br>
1.첫번째로 가독성이다. 
2.속도(미비하지만 빠르다)
3.overriden(재정의)에 대한 예방

구글의 자바스크립트 스타일 가이드 https://google.github.io/styleguide/javascriptguide.xml#JavaScript_Language_Rules



