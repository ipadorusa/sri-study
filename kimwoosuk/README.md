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
    - + 연산자
    - typeof 연산자
    - == (동등) 연사자와 ===(일치) 연산자
    - !! 연산자
- 다른책에서는
    - 계산 연산자
    - 비트 연산자
    - 관계 연산자
    - 일치 연산자
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
            var num1 = 2;
            var num2 = 20;
            var num3 = --num1 + num2;  //21
            var num4 = num1 + num2;    //21
            var age = 29;
            age++;
            var num1 = 2;
            var num2 = 20;
            var num3 = num1-- + num2;   // 22
            var num4 = num1 + num2;     // 21

