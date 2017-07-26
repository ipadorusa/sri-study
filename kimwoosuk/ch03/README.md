# 3장 보충 (작성중)

## 형변환 함수
- parseInt(String)
- parseFloat(String)
- String(number)
- Number(String)
- Boolean(String)

## 용어 설명
- Class : 객체의 특성을 정의
- Object : Class의 인스턴스
- Property : 객체의 특성(예: 색깔)
- Method : 객체의 능력(예: 걷기)
- Constructor : 인스턴스화 되는 시점에서 호출되는 메서드
- Inheritance : 클래스는 다른 클래스로부터 특성들을 상속받을 수 있다.
- Encapsulation : 클래스는 해당 객체의 특성들만을 정의할 수 있고, 메서드는 그 메서드가 어떻게 실행되는지만 정의할 수 있다. (외부 접근 불가)
- Abstraction : 복잡한 상속, 메서드, 객체의 속성의 결합은 반드시 현실 세계를 시뮬레이션할 수 있어야 한다.
- Polymorphism : 다른 클래스들이 같은 메서드나 속성으로 정의될 수 있다.




## 연산자
- 책에서는
    -  + 연산자
    - typeof 연산자
    - == (동등) 연사자와 ===(일치) 연산자
    - !! 연산자
- 다른책에서는
    - 단항 연산자 (단 하나의 값에만 적용되는 연산자)
        - 증감 연산자
           
            ```javascript
            var age = 29;
            ++age;
            age = age +1;
            --age;
            age = age -1;
            ```
            
            ```javascript
            var age = 29;
            var anotherAge = --age + 2;
            alert(age);        //28
            alert(anotherAge); //30
            ```
            
            ```javascript    
            var num1 = 2;
            var num2 = 20;
            var num3 = --num1 + num2;  //21
            var num4 = num1 + num2;    //21
            ```
            
            ```javascript    
            var age = 29;
            age++;
            var num1 = 2;
            var num2 = 20;
            var num3 = num1-- + num2;   // 22
            var num4 = num1 + num2;     // 21
            ```    
        - :person_frowning: 증감 연산자는 정수에만 쓸 수 있는 것은 아니며 문자열이나 불리언 부동소수점 숫자, 객체에도 쓸수 있다.
        증감 연산자는 다음 규칙에 따라 동작한다.

        - 유효한 숫자 형태의 문자열에 적용하면 해당 문자열을 숫자로 바꾼 후 증감합니다. 해당 변수는 문자열에서 숫자로 바뀝니다.
        - 유효한 숫자 형태의 문자열이 아니라면 변수의 값에 Nan이 저장됩니다. 해당 변수는 문자열에서 숫자로 바뀝니다.
        - 값이 false인 불리언에 적용하면 해당 값을 0으로 바꾼 후 증감합니다. 해당 변수는 불리언에서 숫자로 바뀝니다.
        - 값이 true인 불리언에 적용하면 해당 값을 1로 바꾼 후 증감합니다. 해당 변수는 불리언에서 숫자로 바뀝니다.
        - 부동소수점 숫자에 적용하면 그대로 증감합니다.
        - 객체에 적용하면 해당 객체의 valueOf() 메서드를 먼저 호출해서 증감을 적용할 값을 얻습니다. 다른 규칙을 적용합니다. 결과가 NaN이라면 toString() 메서드를 호출한 후 다른 규칙을 다시 적용합니다. 해당 변숫는 객체에서 숫자로 바뀝니다.
        - 얘제는 (ex_increment_decrement.js)
        - 단항 플러스와 단항 마이너스 (단항 플러스를 숫자가 아닌 값에 적용하면 형 변환 함수인 Number()와 마찬가지로 동작 ,불린언 false와 true 는 0과1로)
    - 비트 연산자 (봐도 모르겠고 어디다가 써야할지 몰라서 일단 패쑤)    
    - 불리언 연산자 (NOT,AND,OR)
        - NOT (!으로 표현 ECMAScript의 모든 값에 적용 할수 있음)
            - 데이터 타입에 관계 없이 항상 불리언 값을 반환, 피연산자를 불리언 값으로 변환한 다음 그 결과를 부정하며 다음과 같이 작동
                - 피연산자가 객체이면 false를 반환
        - AND (true && false 둘다 true여야함)
            - 첫 번째 피연산자가 객체라면 항상 두 번째 피연산자를 반환합니다.
            - 두 번째 피연산자가 객체라면 첫 번째 피연산자를 true로 평가할 수 있을 때만 두 번째 피연산자를 반환
            - 두 피연산자가 모두 객체라면 두 번째 피연산자를 반환
            - 피연산자 둘 중 하나라도 null이라면 null
            - 피연산자 둘 중 하나라도 NaN이라면 NaN
            - 피연사자 둘 중 하나라도 undefined라면 undefined
            
    - 할당 연산자
        ``javscript
        a = b, c;
        var a;
        var b = 50;
        var c = 100;
        
        alert( ( a = b ), c ); //a==50, 출력 100
        alert( a = ( b, c ) ); //a==100, 출력 100
        ```
# 배열

## 배열 생성방법
    - var arr = new Array(element0, element1, ..., elementN);
    - var arr = Array(element0, element1, ..., elementN);
    - var arr = [element0, element1, ..., elementN];

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