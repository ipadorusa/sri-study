
### 배열

문자, 숫자, 오브젝트 등 타입이 달라도 한꺼번에 들어갈 수 있다.

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

-변수 선언과 동시에 할당

인자로 배열의 값을 넘겨주어 선언하는 방법, 호출할 때 인자 개수에 따라 동작이 다르므로 주의.


호출할 때 인자가 1개이고, 숫자일 경우 length로 갖는 빈 배열 생성. 

<pre>
<code>
var arr = new Array(3);     // 크기가 40인 배열이 생성됨
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

-변수 선언 후 할당

<pre>
<code>
var arr = new Array();
arr[0] = "1";
arr[1] = "2";
arr[2] = "3";
</code>
</pre>


### 배열의 길이
배열의 크기를 현재 배열의 인덱스 중 가장 큰 값을 기준으로 정한다. (배열의 length는 배열의 index 중 가장 큰 값 + 1)

실제 메모리는 length 크기처럼 할당되지는 않는다.

**배열 length 프로퍼티의 명시적 변경**

<pre>
<code>
var arr = [0,1,2];

arr.length = 5;
console.log(arr);        // 0,1,2,undefined,undefind

arr.length = 2;

console.log(arr);       // 0, 1 
console.log(arr[2]);    // undefined  (length를 벗어나는 값이 삭제된다.)
</code>
</pre>



### 배열의 접근

배열 내 위치 인덱스 값을 넣어서 접근한다. 

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


동적으로 color와 name 프로퍼티를 추가했지만 length의 값이 바뀌지 않는다.


<pre>
<code>
arr[3] = "red";
console.log(arr.length);        // 4
</code>
</pre>

배열의 원소를 추가했을 때 length가 바뀐다.
배열의 length프로퍼티는 배열 원소의 가장 큰 인덱스가 변했을 경우에만 변경된다.


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


### 다차원 배열


<pre>
<code>
var a = [];
a[0] = [];
a[0][0] = 1;

var b = new Array();

b[0] = new Array();
b[0][0] = 1;

var arr = ["1","2","3"];
var arrr = ["1",["2-1","2-2","2-3"],"3"];

var apt = new Array();
var fourth = ["401호","402호","403호"];
var third = ["301호","302호","303호"];
var second =  ["201호","202호","203호"];
var first =  ["101호","102호","103호"];

apt[0] = fourth;
apt[1] = third;
apt[2] = second;
apt[3] = first;

for (var a = 0; a < apt.length; a++){
    for (var i = 0; i < apt[a].length; i++){
        document.write(apt[a][i]);
    }

}
</code>
</pre>

### 배열 메서드


push() 메서드

인수로 넘어온 항목을 배열의 끝에 추가하는 자바스크립트 표준 배열 메서드다.

배열의 현재 length 값의 위치에 새로운 원소값을 추가한다.



var arr = ["0", "1", "2"];

arr.push("3");

console.log(arr); // ["0","1","2","3"]



// length 값 변경 후, push() 메서드 호출

arr.length = 5;

arr.push("4");

console.log(arr); // ["0","1","2",undefined,"4"];



접근시 : arr.push(i) 보다 arr[i] = value 를 사용한다



pop(); 배열 끝에서부터 항목 제거하기

shift();  배열 앞에서부터 항목 제거하기

unshfit(); 배열 맨 앞에 항목 추가

splice(); 인덱스 위치에 항목 제거

slice(); 배열 복사

reverse(); 배열 순서 반전

sort(); 배열 정렬

concat(); 새로운 배열 반환

join(); 문자열로 변환하여 합침

indexOf();

lastIndexOf();

forEach(); 각각의 요소에 함수를 호출

