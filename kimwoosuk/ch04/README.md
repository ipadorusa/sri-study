# 함수와 프로토타입 체이닝

## 함수 
- 예제
<pre>
<code>
    var a = function(){alert('a함수');}
    var a = function(){alert('b함수');}
    a();
</code>
- https://jsfiddle.net/ipadorusa/mvkpc5sL/
<code>
    a();
    var a = function(){alert('a함수');}
    var a = function(){alert('b함수');}        
</code>
- https://jsfiddle.net/ipadorusa/21wwhx3f/
<code>
    a();
    function a(){alert('a함수');}
    function a(){alert('b함수');}
</code>
- https://jsfiddle.net/ipadorusa/h3xrec2n/
</pre>

// 기명 함수표현식(named function expression) 
var company = function company() {  
    /* 실행코드 */
}; 

// 익명 함수표현식(anonymous function expression)
var company = function() {  
    /* 실행코드 */
};

// 기명 즉시실행함수(named immediately-invoked function expression)
(function company() {
    /* 실행코드 */
}());

// 익명 즉시실행함수(immediately-invoked function expression)
// Javascript 대가이신 더글라스 클락포트의 권장 표기법
(function() {
    /* 실행코드 */
}());

// 익명 즉시실행함수(immediately-invoked function expression)
(function() {
    /* 실행코드 */
})();


#### 단어 사전
 - Parameter 는 '파라미터' 또는 '매개변수'로,
 - Argument 는 '아규먼트', '인자', 또는 '전달인자'로
