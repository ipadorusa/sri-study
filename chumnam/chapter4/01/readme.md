
# 함수 정의

자바스크립트에서 함수를 생성하는 방법은 3가지가 있다.

함수 선언문? 식?(function statement)

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


함수 표현식(function expression)

변수 선언과 비슷합니다. 차이점은 함수 이름이 선택 사항 이라는 점
<pre>
<code>
functionName(); //오류 발생 - 함수가 존재하지 않습니다. 
var functionName = function(arg0, arg1, arg2){
	alert("hi"); 
}
</code>
</pre>

Function() 생성자 함수


## 함수 리터럴

자바스크립트에서는 함수도 객체로 취급된다. 

그래서 객체 리터럴 방식으로 일반 객체를 생성할 수 있는 것처럼 함수도 __함수 리터럴__을 이용해 함수를 생성할 수 있다


### 함수 리터럴
<pre>
<code>
function add(x, y){
	return x + y;
}
</code>
</pre>


