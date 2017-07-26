# 함수와 프로토타입 체이닝

## 함수 
<pre>
<code>
    var a = function(){alert('a함수');}
    var a = function(){alert('b함수');}
    a();
</code>
<code>
    a();
    var a = function(){alert('a함수');}
    var a = function(){alert('b함수');}        
</code>
<code>
    a();
    function a(){alert('a함수');}
    function a(){alert('b함수');}
</code>
</pre>




#### 단어 사전
 - Parameter 는 '파라미터' 또는 '매개변수'로,
 - Argument 는 '아규먼트', '인자', 또는 '전달인자'로