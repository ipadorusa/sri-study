#정리중
### 배열

배열에 문자,숫자,오브젝트 등 타입이 달라도 한꺼번에 들어갈 수 있다.

var a = ["a",123];

**배열 선언**

1. 배열 리터럴

권장 - 가독성 및 처리 속도 향상

var arr = ["1","2","3"]


2. Array() 생성자 함수

new 연산자를 같이 써야 한다.

array() 생성자 함수는 호출할 때 인자 개수에 따라 동작이 다르므로 주의해야 한다.

호출할 때 인자가 1개이고, 숫자일 경우 length로 갖는 빈 배열 생성. 그 외의 경우 호출된 인자를 요소로 갖는 배열 생성



var p = new Array(40, 100) // 배열에 40, 100이 들어감

var pp = new Array(40) // 크기가 40인 배열이 생성됨



var arr = new Array(3);

console.log(arr); // [undefined, undefind, undefind]

console.log(arr.length); // 3



var arr2 = new Array(1,2,3);

console.log(arr2); [1,2,3];

console.log(arr2.length); // 3




var arr = new Array();

arr[0] = "1"

arr[1] = "2"

arr[2] = "3"



var arr = new Array("1","2","3");


**배열의 접근**

배열 내 위치 인덱스 값을 넣어서 접근.

순차적으로 넣을 필요가 없이 아무 인덱스 위치에나 값을 동적으로 추가할 수 있다.



var emptyArr = [];

console.log(emptyArr[0]) // undefined;



emptyArr[0] = 100;

emptyArr[3] = "orange";

emptyArr[5] = "true";



console.log(emptyArr); // 100, undefined, undefined, orange, true

console.log(emptyArr.length); // 6; 배열의 크기를 현재 배열의 인덱스 중 가장 큰 값을 기준으로 정하기 때문에







**배열의 프로퍼티 동적 생성**

var arr = ["0","1","2"];

console.log(arr.length) // 3



arr.color = "blue"

arr.name = "number_array";

console.log(arr.length); // 3

동적으로 color와 name 프로퍼티를 추가했지만 length의 값이 바뀌지 않는다.



arr[3] = "red"

console.log(arr.length); // 4

배열의 원소를 추가했을 때 length가 바뀐다.

배열의 length프로퍼티는 배열 원소의 가장 큰 인덱스가 변했을 경우에만 변경된다.



for in문을 0~3 배열을 포함해서 color와 name까지 출력된 반면

for 문은 배열의 요소만을 출력한다.





**배열 요소 삭제**

var arr = ["0","1","2","3"];

delete arr[2];

console.log(arr) // ["0","1",undefined,"3"]

console.log(arr.length) // 4



delete 연산자로 배열의 요소를 삭제하면 undefind가 할당되어 length 값은 변하지 않는다.

해당 요소의 값을 undefind로 설정할 뿐 원소 자체를 삭제하지는 않는다.

때문에 보통 배열에서 요소들을 완전히 삭제할 경우 splice() 배열 메서드를 사용한다.





var arr = ["0","1","2","3"];

arr.splice(2,1); // 두번째 요소를 시작으로 1개의 원소를 삭제
console.log(arr) // ["0","1","3"]
console.log(arr.length) // 3



delete연산자와는 다르게 배열 요소를 완전히 없애게 된다.





**배열의 길이**


배열의 length는 배열의 항목의 (index들 중 가장 큰 값) + 1 을 값으로 가집니다.



실제 메모리는 length 크기처럼 할당되지는 않는다.



배열 length 프로퍼티의 명시적 변경



var arr = [0,1,2];

arr.length = 5;

console.log(arr) // 0,1,2,undefined,undefind



arr.length = 2;

console.log(arr); // 0, 1



console.log(arr[2]); // undefined



length프로퍼티값을 2로 설정했기 때문에 벗어나는 값이 삭제된다.


###유사 배열 객체


###다차원 배열



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


