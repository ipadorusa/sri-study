#배열

## 배열 생성방법
    var arr = new Array(element0, element1, ..., elementN);
    var arr = Array(element0, element1, ..., elementN);
    var arr = [element0, element1, ..., elementN];
----

### 배열의 프로퍼티
    - Array.prototype.length
    - Array.prototype

### 배열의 변경자(메서드) - 변경자 메서드는 배열을 수정합니다
    - Array.prototype.copyWithin() : 배열 내의 지정된 요소들을 동일한 배열 내에서 복사합니다.
    - Array.prototype.fill() : 배열 안의 시작 인덱스부터 끝 인덱스까지의 요소값을 지정된 정적 값으로 채웁니다.
    - Array.prototype.pop() : 배열에서 마지막 요소를 뽑아내고, 그 요소를 반환합니다.
    - Array.prototype.push() : 배열의 끝에 하나 이상의 요소를 추가하고, 변경된 배열의 길이를 반환합니다.
    - Array.prototype.reverse() : 배열의 요소 순서를 반전시킵니다. - 첫 번째가 마지막이 되고 마지막이 첫 번째가 됩니다.
    - Array.prototype.shift() : 배열에서 첫 번째 요소를 삭제하고 그 요소를 반환합니다.
    - Array.prototype.sort() : 배열의 요소를 정렬하고 그 배열을 반환합니다.
    - Array.prototype.splice() : 배열에서 요소를 추가/삭제합니다.
    - Array.prototype.unshift() : 배열의 앞에 하나 이상의 요소를 추가하고 새로운 길이를 반환합니다.

### 배열의 접근자(메서드) - 접근자 메서드는 배열을 수정하지 않고 배열 일부를 반환합니다.
    - Array.prototype.concat() : 배열과, 인자로 주어진 배열/값을 결합해 새로운 배열을 만들고, 이 새 배열을 반환합니다.
    - Array.prototype.includes() : 배열에 특정 요소가 포함돼있는지 알아내어 true 또는 false를 적절히 반환합니다.
    - Array.prototype.indexOf() : 배열에서 지정한 값과 같은 요소의 첫 인덱스를 반환합니다. 없으면 -1을 반환합니다.
    - Array.prototype.join() : 배열의 모든 요소를 문자열로 변환하여 합칩니다.
    - Array.prototype.lastIndexOf() : 배열에서 지정한 값과 같은 요소의 마지막 인덱스를 반환합니다. 없으면 -1을 반환합니다.
    - Array.prototype.slice() : 배열의 일부를 추출한 새 배열을 반환합니다.
    - Array.prototype.toString() : 배열과 요소를 반환하는 문자열을 반환합니다. Object.prototype.toString() 메서드를 재정의합니다.
    - Array.prototype.toLocaleString() : 배열과 요소를 나타내는 지역화된 문자열을 반환합니다. Object.prototype.toLocaleString() 메서드를 재정의합니다.

### 반복 메서드
    - Array.prototype.entries() : 배열의 각 인덱스에 대한 키/값 쌍을 포함하는 새로운 배열 반복자 객체를 반환합니다.
    - Array.prototype.every() : 만약 배열의 모든 요소가 제공된 검사 함수를 만족하면 true를 반환합니다.
    - Array.prototype.filter() : 주어진 필터링 함수의 값의 결과가 참인 경우의 배열 요소들만으로 새로운 배열을 생성하여 반환합니다
    - Array.prototype.find() : 주어진 테스팅 함수의 요구조건을 만족하는 배열 요소를 반환합니다. 그러한 배열요 요소가 없으면  undefined를 반환합니다.
    - Array.prototype.findIndex() : 주어진 테스트 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환합니다. 그렇지 않으면 -1이 리턴됩니다.
    - Array.prototype.forEach() : 배열의 각각의 요소에 함수를 호출합니다.
    - Array.prototype.keys() : 배열의 각 인덱스에 대한 key들을 가지는 새로운 Array Iterator 객체를 반환합니다.
    - Array.prototype.map() : 배열 내의 모든 요소 각각에 대하여  제공된 함수(callback)를 호출하고, 그 결과를 모아서  만든 새로운 배열을 반환합니다.
    - Array.prototype.reduce() : 배열의 각 값에 대해 왼쪽에서 오른쪽으로 함수를 적용하여 단일 값으로 줄입니다.
    - Array.prototype.reduceRight() : 배열의 각 값에 대해 오른쪽에서 왼쪽으로 함수를 적용하여 단일 값으로 줄입니다.
    - Array.prototype.some() : R배열중의 적어도 한 요소가 테스팅 함수를 만족시킨 다면 true를 반환합니다.
    - Array.prototype.values() : 배열의 요소값들에 대한 Array Iterator 객체를 반환합니다.
    - Array.prototype[@@iterator]() : 배열의 요소값들에 대한 Array Iterator 객체를 반환합니다.    
    
### 요약
    - 배열 만들기
    - 인덱스로 배열의 항목에 접근하기
    - 배열의 항목들을 순환하며 처리하기
    - 배열 끝에 항목 추가하기
    - 배열 끝에서부터 항목 제거하기
    - 배열 앞에서부터 항목 제거하기
    - 배열 앞에 항목 추가하기
    - 배열 안 항목의 인덱스 찾기
    - 인덱스 위치에 있는 항목 제거하기
    - 인덱스 위치에서부터 여러개의 항목 제거하기
    - 배열 복사하기

### Array 주요 멤버
    - join([str])
    - sort (function)
    - reserse()
    - concat(arry)
    - push()
    - pop()