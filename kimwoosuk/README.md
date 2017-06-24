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
        :person_frowning: 증감 연산자는 정수에만 쓸 수 있는 것은 아니며 문자열이나 불리언 부동소수점 숫자, 객체에도 쓸수 있다.
        증감 연산자는 다음 규칙에 따라 동작한다.
            - 유효한 숫자 형태의 문자열에 적용하면 해당 문자열을 숫자로 바꾼 후 증감합니다. 해당 변수는 문자열에서 숫자로 바뀝니다.
            - 유효한 숫자 형태의 문자열이 아니라면 변수의 값에 Nan이 저장됩니다. 해당 변수는 문자열에서 숫자로 바뀝니다.
            - 값이 false인 불리언에 적용하면 해당 값을 0으로 바꾼 후 증감합니다. 해당 변수는 불리언에서 숫자로 바뀝니다.
            - 값이 true인 불리언에 적용하면 해당 값을 1로 바꾼 후 증감합니다. 해당 변수는 불리언에서 숫자로 바뀝니다.
            - 부동소수점 숫자에 적용하면 그대로 증감합니다.
            - 객체에 적용하면 해당 객체의 valueOf() 메서드를 먼저 호출해서 증감을 적용할 값을 얻습니다. 다른 규칙을 적용합니다. 결과가 NaN이라면 toString() 메서드를 호출한 후 다른 규칙을 다시 적용합니다. 해당 변숫는 객체에서 숫자로 바뀝니다.
            
