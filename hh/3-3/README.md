
### 배열
변수 하나에 여러 개의 데이터를 담을 수 있는 특별한 데이터형.


일반 변수로 표현한 경우 여러 개의 변수를 만들어야 한다.

<pre>
<code>
var name1 = "haebin"
var name2 = "해빈"
var name3 = "이매비니"
</code>
</pre>

배열을 이용하면 하나의 변수에 모두 담을 수 있다. 연관있는 데이터를 하나로 묶어 관리할 때 주로 사용한다.
<pre>
<code>
var name = ["haebin","해빈","이매비니"];
</code>
</pre>


문자, 숫자, 오브젝트 등 타입이 다른 여러 개의 데이터형을 혼합해서 보관할 수 있다.

<pre>
<code>
var a = [ "a", 123, true ];
</code>
</pre>

### 배열 선언

**배열 리터럴**

[] 대괄호 사용 (권장 - 가독성 및 처리 속도 향상)

<pre>
<code>
var arr = ["1","2","3"]
</code>
</pre>

**Array() 생성자 함수**

1.변수 선언과 동시에 할당

인자로 배열의 값을 넘겨주어 선언하는 방법, 호출할 때 인자 개수에 따라 동작이 다르므로 주의.


호출할 때 인자가 1개이고, 숫자일 경우 length로 갖는 빈 배열 생성. 

<pre>
<code>
var arr = new Array(3);     // 크기가 3인 배열이 생성됨
console.log(arr);           // [undefined, undefind, undefind]
console.log(arr.length);    // 3
</code>
</pre>


그 외의 경우 호출된 인자를 요소로 갖는 배열 생성한다.

<pre>
<code>
var arr2 = new Array(1, 3);    // 배열에 1, 3 이 들어감
console.log(arr2);             // [1, 3]
console.log(arr2.length);      // 2
</code>
</pre>

2.변수 선언 후 할당

<pre>
<code>
var arr = new Array();
arr[0] = "1";
arr[1] = "2";
arr[2] = "3";
</code>
</pre>


### 배열의 접근

배열의 위치 인덱스 값을 넣어서 접근한다. 

순차적으로 넣을 필요가 없이 아무 인덱스 위치에나 값을 동적으로 추가할 수 있다.

<pre>
<code>
var emptyArr = [];

console.log(emptyArr[0]);       // undefined

emptyArr[0] = 100;
emptyArr[3] = "orange";
emptyArr[5] = true;

console.log(emptyArr);          // 100, undefined, undefined, "orange", undefined, true
console.log(emptyArr.length);   // 6 
</code>
</pre>


### 배열의 길이
배열의 크기를 현재 배열의 인덱스 중 가장 큰 값을 기준으로 정한다. (배열의 length는 배열의 index 중 가장 큰 값 +1)

실제 메모리는 length 크기처럼 할당되지는 않는다.

<pre>
<code>
var arr = [0, 1, 2];

arr.length = 5;
console.log(arr);        // 0, 1, 2, undefined, undefined

arr.length = 2;

console.log(arr);       // 0, 1 
console.log(arr[2]);    // undefined  (length를 벗어나는 값이 삭제된다.)
</code>
</pre>



### 배열의 프로퍼티 동적 생성


<pre>
<code>
var arr = ["0","1","2"];
console.log(arr.length);         // 3

arr.color = "blue";
arr.name = "number_array";

console.log(arr.length);        // 3
</code>
</pre>


동적으로 color와 name 속성을 추가했지만 length의 값이 바뀌지 않는다.


<pre>
<code>
arr[3] = "red";
console.log(arr.length);        // 4
</code>
</pre>

배열의 값을 추가했을 때 length가 바뀐다.
length 프로퍼티는 배열 값의 가장 큰 인덱스가 변했을 경우에만 변경된다.


<pre>
<code>
for(var prop in arr){
    console.log(prop, arr[prop]);
}
</code>
</pre>

<pre>
<code>
0 0
1 1
2 2
color blue
name number_array
</code>
</pre>

for in문을 0~3 배열을 포함해서 color와 name까지 출력된 반면


<pre>
<code>
for(i = 0; i < arr.length; i++){
    console.log(i, arr[i]);
}
</code>
</pre>
<pre>
<code>
0 "0"
1 "1"
2 "2"
</code>
</pre>

for 문은 배열의 요소만을 출력한다.



### 배열 요소 삭제


**delete 연산자**
 
<pre>
<code>
var arr = ["0","1","2","3"];
delete arr[2];
console.log(arr)        // ["0","1",undefined,"3"]
console.log(arr.length) // 4
</code>
</pre>

delete 연산자로 배열의 요소를 삭제하면 undefind가 할당되어 length 값은 변하지 않는다.

해당 요소의 값을 undefind로 설정할 뿐 원소 자체를 삭제하지는 않는다. 

때문에 보통 배열에서 요소들을 완전히 삭제할 경우 splice() 배열 메서드를 사용한다.



**splice() 메서드**

<pre>
<code>
var arr = ["0","1","2","3"];

arr.splice(2,1);        // 두번째 요소를 시작으로 1개의 원소를 삭제
console.log(arr)        // ["0","1","3"]
console.log(arr.length) // 3
</code>
</pre>

delete연산자와는 다르게 배열 요소를 완전히 없애게 된다.



### 유사 배열 객체

http://multifrontgarden.tistory.com/175

배열이 아닌 일반 객체에 length 라는 property가 존재하면 자바스크립트에서는 해당 객체를 유사 배열 객체라고 부른다.

유사 배열 객체의 특징은 자바스크립트의 배열 메서드를 사용하는게 가능해진다.

<pre>
<code>
var arr = ["ㅎ"];
var obj = {
       name : "g",
       length : 1
   }
   
  arr.push("ㅎㅎ");
  console.log(arr);     // ["ㅎ", "ㅎㅎ"]
  
  obj.push("gg");       // error
</code>
</pre>


**arguments**
함수에는 arguments라는 변수에 담긴 숨겨진 유사 배열이 있다.
이 배열에는 함수를 호출할 때 입력한 인자가 담겨있다.


<pre>
<code>
function test(){
    var i, 
        s = 0;
    for (i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

test(1,2,3,4);

</code>
</pre>


### 다차원 배열

배열의 요소를 하위 배열로 생성하는 것. 
데이터를 테이블 형태의 행과 열로 저장할 수 있다.

<pre>
<code>

var s = [[1,2,3,4,5],[6,7,8,9,10]];

</code>
</pre>


배열 인덱스로 데이터에 접근하는 것은 1차원 배열과 같다.

<pre>
<code>
var a = [];
a[0] = [];
a[0][0] = 1;
</code>
</pre>

<pre>
<code>
var b = new Array();

b[0] = new Array();
b[0][0] = 1;

</code>
</pre>


### 배열 메서드


**push()**

인수로 넘어 온 항목을 배열의 끝에 추가하는 메서드.

배열의 현재 length 값의 위치에 새로운 원소값을 추가한다.

<pre>
<code>
var arr = ["0", "1", "2"];
arr.push("3");   // ["0","1","2","3"]
</code>
</pre>

<pre>
<code>
// length 값 변경 후, push() 메서드 호출
arr.length = 5;
arr.push("4");   // ["0","1","2",undefined,"4"];
</code>
</pre>


**pop()**

배열 끝에서부터 항목 제거하기

<pre>
<code>
var arr = ["0", "1", "2"];
arr.pop();   // ["0","1"]
</code>
</pre>

**shift()**
 
배열 앞에서부터 항목 제거하기

<pre>
<code>
var arr = ["0", "1", "2"];
arr.shift();    // ["1","2"]

</code>
</pre>

**unshfit()**

배열 맨 앞에 항목 추가

<pre>
<code>
var arr = ["0", "1", "2"];
arr.unshift("영","영영");  // ["영","영영", "0", 1", "2"]
</code>
</pre>


**slice(시작, 끝)**

배열 추출

<pre>
<code>
var arr = ["0", "1", "2", "3", "4"];
arr.slice(1, 3);    // ["1", "2"]
</code>
</pre>

**sort()**

오름차순 정렬

<pre>
<code>
var arr = ["a", "c", "d", "e", "b"];
arr.sort();    // ["a", "b", "c", "d", "e"]
</code>
</pre>

**reverse()**

역순 정렬

<pre>
<code>
var arr = ["0", "1", "2", "3", "4"];
arr.reverse();    // ["4", "3", "2", "1", "0"]
</code>
</pre>

**splice()**
 
인덱스 위치에 항목 제거

<pre>
<code>
var arr = ["0", "1", "2", "3", "4"];
arr.slice(1, 3);    // ["1", "2"]
</code>
</pre>




