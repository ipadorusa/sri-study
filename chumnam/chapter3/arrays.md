# 자바스크립트 배열 Javascript Arrays

## Array

### ECMAScript 5 배열 매서드
배열을 순회, 매핑, 필터링, 감소, 검색하기 위해 9가지의 새로운 매소드

1. forEach()

배열을 순회하는 매서드 각 원소에 대하여 지정한 함수를 각각 호출한다
break 문으로 종료 시킬 수 없다
var data = [,1,2,3,4,5];	//배열에 속한 모든 원소의 합을 계산한다.
var sum = 0;
data.forEach(function(value){sum += value;}); // 각 원소의 값을 sum에 더한다.
sum //15
//각 원소의 값을 증가시킨다
data.forEach(function(v, 1, a) { a[i] = v+ 1; });
data //[2,3,4,5,6]

2.map()
배열의 각 원소를 매서드의 첫 번째 전달인자로 지정한 함수에 전달하고, 해당 함수의 반환 값을 새로운 배열로 반환
희소배열이라면 희소배영을 반환
a = [1,2,3];
b = a.map(function(x) {resturn x*x]); //b는 [1,4,9]

3.filter()
배열의 일부분을 반환한다(단, 전달한 함수는 조건자 함수(true false)여야 한다)
반환값이 true, true인 조건식이면 조건자 함수를 통과해 매서드가 반환할 배열에 추가가 된다.
희소배열의 경우엔 빈 원소를 건너뛰어서 반환되는 배열에는 빈 원소가 없다
a = [5,4,3,2,1];
filtertest = a.filter(function(x) {return x <4]); //[1,2,3]
//희소배열의 빈 원소 제거하는 법
var danse = sparse.filter(function() { return true; });
//빈 원소의 간격을 좁히고 undefined, null값을 갖는 원소도 함께 제거하는 법
a=a.filter(function(x) { return x !== undedined && != null;});

4.every(), some()
배열을 단정하다(배열의 각 원소에 대하여 ture or false를 반환하는 함수)
every(): 배열의 모든 원소에 대하여 true를 반환하는 경우에 true반환
some() : 일부 원소에 대하여 true인 경우 true를 반환
반환 값이 결정되면 배열의 원소순회를 중단한다
빈 배열인 경우 every()는 항상 false를 반환 
a = [1,2,3,4,5];
a.every(function(x) {return x<10; }) //true
a.every(function(x) {return x%2 ===0; }) //false
b = [1,2,3,4,5];
b.some(function(x) {return x%2 ===0; }) //true
b.some(isNaN) //false
