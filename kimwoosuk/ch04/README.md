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




#### 단어 사전
 - Parameter 는 '파라미터' 또는 '매개변수'로,
 - Argument 는 '아규먼트', '인자', 또는 '전달인자'로