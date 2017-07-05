
### Chapter 3. 자바스크립트 데이터 타입과 연산자


#### 연산자

자바스크립트는 이항 연산자, 단항연산자, 조건연산자를 가지고 있다.

**이항 연산자**

두개의 피연산자가 필요함. 하나는 좌변에 다른 하나는 우변에

<pre>
<code>
3+4   // 피연산자1 연산자 피연산자2
x*y
</code>
</pre>



**단항 연산자**

연산자 뒤에든 앞에든 하나의 피연산자 필요함.

<pre>
<code>
++x  // 연산자 피연산자 
x++  // 피연산자 연산자  
</code>
</pre>



**삼항 연산자 (조건 연산자)**

조건에 따라 두 식 중 하나를 반환한다.

조건 ? 값1 (true) : 값2 (false)

<pre>
<code>
var a = 11;
var b = (a>=10) ? "메롱" : "바보"       // a가 10보다 같거나 클 때 '메롱'을 b에 대입한다. 아니면 '바보'
</code>
</pre>


if..else 문의 단축형으로 사용할 수 있다.
<pre>
<code>
if ( a > b ) {
    c = 10;
} else {
    c = 20;
}
</code>
</pre>

<pre>
<code>
( a > b ) ? c = 10 : c = 20;
</code>
</pre>

- - -

#### 산술 연산자


**덧셈, 뺄셈, 곱셈, 나눗셈, 나머지**
<pre>
<code>
var a = 30,
    b = 20,
    c = "안녕";
</code>
</pre>

<pre>
<code>
a + b;   // 50
a - b;   // 10
a * b;   // 600
a / b;   // 1.5
a % b;   // 10
</code>
</pre>

<pre>
<code>
a + c + b;   // "30안녕20"
a + b + c;   // "50안녕"
c + a + b;   // "안녕3020"
</code>
</pre>

**단항부정연산자**

피연산자 값의 반대 값(부호 바뀐 값)을 반환한다.
<pre>
<code>
var x = 3;
-x      // -3
</code>
</pre>

**숫자화연산자** 

피연산자가 숫자값이 아니라면 피연산자를 숫자로 변환하기를 시도함.
<pre>
<code>
var x = "30";
x       // "30"
+x      // 30
</code>
</pre>


- - -

#### 증감연산자


**++ 증가** 

단항 연산자. 피연산자에 1을 더한다. 

연산자를 피연산자 앞에 사용하면 피연산자에 1을 더한 값을 반환, 

뒤에 사용하면 피연산자에 1을 더하기 전 값을 반환.

<pre>
<code>
var num = 10;

++num;      // 11
num;        // 11

num++;      // 10
num;        // 11
</code>
</pre>


**-- 감소**

단항 연산자. 피연산자로부터 1을 뺀다.

<pre>
<code>
var num = 10;

--num;      // 9
num;        // 9

num--;      // 10
num;        // 9
</code>
</pre>


- - -

#### 대입 연산자
오른쪽 피연산자의 값을 왼쪽 피연산자에 대입한다.


<pre>
<code>
var x = 20,
    y = 10;
</code>
</pre>

**기본적인 대입**
<pre>
<code>
x = y;   // 10
</code>
</pre>

**덧셈 대입**
<pre>
<code>
x += y;
x = x + y;
x = 20 + 10;   // 30
</code>
</pre>


**뺄셈 대입**
<pre>
<code>
x -= y;
x = x - y;
x = 20 + 10;   // 10
</code>
</pre>

**곱셈 대입**
<pre>
<code>
x *= y;
x = x * y;
x = 20 * 10;    // 200
</code>
</pre>

**나눗셈 대입**
<pre>
<code>
x /= y;
x = x / y;
x = 20 / 10;    // 2
</code>
</pre>

**나머지 대입**
<pre>
<code>
x %= y;
x = x % y;      // 0
</code>
</pre>


- - -


#### 비교 연산자

**== 같은**

피연산자들이 같으면 참을 반환
<pre>
<code>
var o = 5;
o == 5;     // true
o == "5";   // true
</code>
</pre>


**=== 엄격히 같은**

피연산자들이 형까지 같은 경우 참을 반환
<pre>
<code>
var o = 5;
o === "5";  // false
o === 5;    // true
</code>
</pre>

**!= 다른**

피연산자들이 다르면 참을 반환
<pre>
<code>
var o = 5;
o != 4;    // true
o != 5;    // false
o != "5";  // false
</code>
</pre>

**!==엄격히 다른**

피연산자들이 다른 경우 참을 반환, 형까지 같은 경우 false. 
<pre>
<code>
var o = 5;
o !== 4;    // ture
o !== 5;    // false
o !== "5";  // true
</code>
</pre>


**~보다 큰**

좌변의 피연산자가 우변의 피연산자보다 크면 참을 반환
<pre>
<code>
var o = 5;
o > 4;      // true
o > 5;      // false
o > 6;      // false
</code>
</pre>

**~보다 크거나 같음**

좌변의 피연산자가 우변의 피연산자보다 크거나 같으면 참을 반환
<pre>
<code>
var o = 5;
o >= 4;     // true
o >= 5;     // true
o >= 6;     // false
</code>
</pre>

**~보다 작음**

좌변의 피연산자가 우변의 피연산자보다 작으면 참을 반환
<pre>
<code>
var o = 5;
o < 6;      // true
o < 5;      // false
o < 4;      // false
</code>
</pre>

**~보다 작거나 같음**

좌변의 피연산자가 우변의 피연산자보다 작거나 같으면 참을 반환
<pre>
<code>
var o = 5;
o <= 4;     // false
o <= 5;     // true
o <= 6;     // true
</code>
</pre>


- - -

#### 논리연산자

**&& 논리곱**

두 피연산자가 모두 일치하면 true, 아니면 false

<pre>
<code>
var x = 6, y = 3;
x < 7 && y > 2   // true
x < 7 && y < 4   // true
x < 7 && y < 4   // false
</code>
</pre>

**|| 논리합**

피연산자중 하나만 일치하면 true, 둘다 틀리면 false
<pre>
<code>
var x = 6, y = 3;
x == 6 || y == 3;    // true
x == 6 || y == 4;    // true
x == 7 || y == 4;    // false
</code>
</pre>


**!논리부정**

피연산자가 true로 변환될 수 있으면 false를, 아니면 ture

false로 변환될 수 있는 표현들 null, 0, NaN, "", 정의되지 않음

<pre>
<code>
var x = 6, y = 3;
!( x == 6 );        // false
!( x == y );        // true
</code>
</pre>

<pre>
<code>
NaN == true;        // false
!NaN == true;       // true
</code>
</pre>


- - - 

#### 비트연산자

32비트 숫자에 대해 작동된다.

**비트단위논리곱 &**

두 피연사자의 각 자리 비트의 값이 둘다 1일 경우 해당하는 자리에 1을 반환.  a&b 

**비트단위논리합 |**

두 피연산자의 각 자리 비트의 값이 둘다 0일 경우 해당하는 자리에 0을 반환. a|b

**비트단위배타적논리합 ^**

두 피연산자의 각 자리 비트의 값이 같을 경우 해당하는 자리에 0을 반환. 다를 경우 1 a^b

**비트단위부정 ~**

피연산자의 각 자리의 비트를 뒤집는다. ~a

**왼쪽 시프트 <<**

오른쪽에서 0들을 이동시키면서 a의 이진수의 각 비트를 b비트 만큼 왼쪽으로 이동시킨 값

**부호전파오른쪽시프트 >>**

사라지는 비트를 버리면서 a의 이진수의 각 비트를 b비트 만큼 이동시킨 값을 반환

**부호없는 오른쪽 시프트 >>>**
 a >>> b 사라지는 비트를 버리고 왼쪽에서 0을 이동시키면서, a의 이진수의 각 비트를 b비트 만큼 이동시킨 값을 반환.


- - - 


#### 콤마(쉼표)연산자

두 피연산자를 비교하고, 마지막 피연산자의 값을 반환.

for 반복문 안에서 주로 사용.

<pre>
<code>
for(var i =0, j=9; i<=j; i++, j--){ 
    ... 
}
</code>
</pre>
<pre>
<code>
var x = (3, 5);
console.log(x);     // 5
</code>
</pre>


- - - 

#### delete연산자

단항연산자. 객체의 속성을 제거할 때 사용, 삭제 성공시 ture, 실패시 false 반환


<pre>
<code>
var a = new Array (10, 11, 12, 13, 14);
delete a[1];        // [10, undefined × 1, 12, 13, 14]
a.length;           // 5
</code>
</pre>

<pre>
<code>
var obj = new Object();
obj.name = "haebin";
obj.age = 28;
delete obj.name;
delete obj['age'];
console.log(obj.name, obj.age)      // undefined undefined
</code>
</pre>

delete연산자보다 undefined 나 null 값으로 만드는 것이 속도가 좀 더 빠르다.

delete는 단순히 객체와 속성의 연결을 끊을 뿐 실제로 메모리에서 제거하는 것은 아니다.


#### typeof 연산자

정보를 "Number", "String", "Boolean", "Object", "Function", "undefined" 라는 문자열로 반환한다.

자료형을 확인할 때 사용.

#### void
단항 undefined 연산자
피연산자를 실행하고 undefined를 반환.
피연산자를 실행해야하지만 결과를 노출하고 싶지 않을 때 사용.
전달인자가 어느값이어도 상관없지만 할당하지 않으면 에러가 발생한다.

<pre>
<code>
void(0); // undefined
void(); // SyntaxError: expected expression, got ')'
</code>
</pre>

이동할 주소가 없는 앵커 태그가 필요할 때 종종 사용
<pre>
<code>
    <a href="javascript:void(0)">test</a>
</code>
</pre>

- - - 


#### in

객체나 배열에 특정 속성이 존재하는지 확인.
<pre>
<code>
var sri = ['yh','hb','ws','jw'];
"hb" in sri     // false (hb은 속성이 아니라 값)
0 in sri        // true
4 in sri        // false
</code>
</pre>

<pre>
<code>
var hb { name : "Haebin", age : 28 };
"name" in hb            // true
"NaN" in Number         // true
"length" in String      // true
</code>
</pre>

in은 for-in 반복문에서도 사용된다.


<pre>
<code>
var n = { a: 1, b: 2};
var propNames = [];
for (var ele in n) {
   propNames.push(ele);
}
</code>
</pre>


#### instanceof

객체의 프로토타입 체인에 생성자 프로토타입이 존재하는지 테스트한다.

좌변의 피연산자로 객체를 받고, 우변의 피연산자로 생성자를 받는다. ????

- - - 

#### 연산자 우선순위

1. 맴버 연산자 .[]
2. 객체호출/생성연산자 () new
3. 부정/증가 연산자 ! ~ - + ++ -- typeof void delete
4. 곱셈/나눗셈 */%
5. 덧셈/뺄셈 +-
6. 비트단위 시프트 << >> >>>
7. 관계연산자 < <= > >= in instanceof
8. ==, !=
9. 비트논리곱 &
10. 비트배타논리합 ^
11. 비트논리합 |
12. 논리곱 &&
13. 논리합 ||
14. 조건연산자 ?:
15. 대입 연산 = += -= *= /= %= <<= >>= &= ^= ~=
16. 콤마 ,