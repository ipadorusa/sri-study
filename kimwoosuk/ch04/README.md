# 함수와 프로토타입 체이닝


## 함수는 
- 함수는 항상 값을 반환합니다
- 기본값 이외의 값을 반환하려면, 함수는 반환할 값을 지정하는 return 문이 있어야 합니다. return 문이 없는 함수는 기본값을 반환합니다. new 키워드로 호출되는 생성자의 경우에,        기본값은 자신의 this 매개변수 값입니다. 다른 모든 함수의 경우, 기본 반환값은 undefined입니다.
- 함수 호출의 매개변수는 함수의 인수입니다. 인수는 함수에 값으로 전달됩니다. 함수가 인수의 값을 바꾸면, 이 변화는 전역 또는 호출한 함수에 반영되지 않습니다. 그러나, 객체 참조(reference)도 역시 값이고 특별합니다: 함수가 참조된 객체의 속성을 바꾸면, 그 변화는 다음 예에서와 같이 함수 밖에서 볼 수 있습니다:

-----
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
<code>
<pre>
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

</pre>
</code>
<<<<<<< HEAD
참고 http://www.nextree.co.kr/p4150/
=======
-----
>>>>>>> 5d861a8b9ef7c3ef43be3d617d07527aea82448d
#### 단어 사전
 - Parameter 는 '파라미터' 또는 '매개변수'로,
 - Argument 는 '아규먼트', '인자', 또는 '전달인자'로
 - 일급시민
    - 컴퓨터 프로그래밍 언어 디자인에서, 특정 언어의 일급 객체 (first-class citizens, 일급 값, 일급 엔티티, 혹은 일급 시민)이라 함은 일반적으로 다른 객체들에 적용 가능한 연산을 모두 지원하는 객체를 가리킨다. 함수에 매개변수로 넘기기, 변수에 대입하기와 같은 연산들이 여기서 말하는 일반적인 연산의 예에 해당한다.
    - 4가지 속성 
        - 변수에 저장할 수 있어야 한다.
        - 함수의 파라미터로 전달할 수 있어야 한다.
        - 함수의 반환값으로 사용할 수 있어야 한다.
        - 자료 구조에 저장할 수 있어야 한다. <<요건 잘..