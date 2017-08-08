

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
