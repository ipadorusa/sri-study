# 자바스크립트 데이터 타입과 연산자

- 3.1.1
    : floor()는 Math의 정적 메소드이기 때문에, 생성된 Math 객체의 메소드보다는 항상 Math.floor()로 사용해야합니다(Math는 생성자가 아닙니다).
        - Math.floor() : 소수점 이하를 버림한다.
        - Math.ceil() : 소수점 이하를 올림한다.
        - Math.round() : 소수점 이하를 반올림한다.

- 3.2.2
    : 대괄호([]) 표기법
    : 마침표(.) 표기법
        - 주로 마침표 표기법을 사용하지만 연산자가 있는 문법의 경우 예) full-name, full+name 대괄호 표기법을 사용한다.
        - 이유는 문자열을 연산하기때문에 NaN(Not a Number) 표시 된다.

- 3.2.3
    : for...in 반복문은 비열거형 속성을 가진 객체는 반복하지 않는다. 즉, Array 같은 내장 생성자에서 생성한 객체들과 Object.prototype과 String.prototype은 열거형이 될 수 없으므로 비열거형 속성을 상속한 객체가 된다. 이와 같은 비열거형에  String indexOf()  메서드 혹은 Object의 toString()  메서드가 있다. 반복루프는 객체의 모든 열거 속성들을 그리고 객체가 상속받은 생성자의 prototype 반복한다.

- 3.2.4
    : 객체 프로퍼티 삭제(delete)는 프로퍼티는 삭제가능하지만, 객체 삭제는 불가능하다.

- 3.3.2
    : 참조 객체의 경우 객체 변수가 외부에 있다 하더라도 참조하고 있는 객체를 내부에서 변경시킬 수 있다.
    : var a = 1; var b = a;  // a의 1과 b의 1은 별개 입니다.
    : var stooge = {'first-name' : 'Jerome', 'last-name' : 'Howard'}
      var x = stooge;  // x와 stooge는 같은 객체를 참조합니다.

- 3.4
    : Prototype[프로퍼티] - 객체는 자신의 부모 역할을 하는 프로토타입 객체를 가리키는 숨겨진 프로퍼티가 있다.
    : Chrome 표기 - __proto__

### 참고
