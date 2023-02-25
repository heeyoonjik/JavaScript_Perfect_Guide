# JavaScriptPerfectGuide

# 색션 2 - 기초

## js의 데이터 타입

- numbers
- String
- Booleans
- Objects -> { name : 'Max', age : 31} 객체 내부에 key - value 쌍 존재
  - => 데이터를 그룹화 하고 연관 지음
- Arrays -> `[]`
  - Array.push -> 배열 끝에 값 추가
  - `Array[i]` 배열 값 접근
  - 배열은 모든 종류의 데이터의 목록이다.
    객체란 키-값 쌍으로 구조화된 그룹화된 데이터이다.

## null, undefined, NaN

- null - 비었음을 의미하는 "값" -> 데이터 타입은 객체이다.
- Undefined - 변수가 초기화 되지 않음을 나타냄(데이터 타입)
- NaN - 숫자가 아니다를 의미하는 값 -> 데이터 타입은 number이다
- typeof -> 리터럴의 타입을 알려줌

## 스크립트 import 방식

우리는 스크립트를 HTML에서 body태그 안쪽 하단에 script태그로 임포트를 한다. 그러나 이렇게 하면 최적의 상태는 아니다.

크롬의 개발자 독 - 퍼포먼스 탭 => 페이지를 로드할 때 브라우저의 동작을 자세히 알 수 있음, 스크립트가 어떻게 로드-분석-실행 되는지 알 수 있음

어쨋든 스크립트를 HTML에서 import하는거는 HTML의 구문 분석이 거의 끝난 후에 JS파일을 요청하고 실행하기 때문에 시간지연이 발생한다
HTML 파일 로드 후 Script의 실행 사이에 시간 간격이 존재하는 것이다.

HTML 파일 분석 이후 Script가 실행하는 순서는 당연하다. 이 순서를 바꾸는 것이 아니라, 둘 사이에 존재하는 불필요한 시간 소모를 줄여야 한다.

따라서 HTML 구문 분석 이후 Script를 로드하는 것이 아니라 최대한 빨리 Script를 로드하고, HTML 구문 분석이 완료된 후 실행해야한다.

HTML의 Head태그에서 Script를 임포트 하면 Script가 빠르게 로드되고, 실행도 빨리 되지만, HTMl 구문 분석이 완료되지 않은 상태에서 Script의 구문 분석을 시도했기 때문에 오류가 발생할 수 있다.

```JavaScript
<script src="블라블라" defer> </script>
```

`defer` 키워드를 사용하면, script파일을 미리 로드하지만, 실행은 HTML 구문 분석이 끝난 이후에 진행되어서 오류를 예방할 수 있다.

하지만 어떤 스크립트는 HTML에 의존적이지 않고 독립적으로 실행하기도 한다. 이러한 경우에는 `async` 키워드를 사용한다.

```JavaScript
<script src="블라블라" async> </script>
```

async 키워드를 사용할 경우 스크립트를 로드 후 바로 실행하게 된다. 따라서 HTML 구문 분석이 진행중에 위의 코드를 만나면 중지하고 script를 로드 후 실행한 뒤 종료되면 다시 HTML 구문 분석을 시작하게 되는 것이다. 보통 이런 것은 사용자와 상호작용하는 코드가 아닌, background server와 통신하는 경우에 사용한다.

위 두개의 키워드는 외부 Script 파일을 import 하는 경우에만 이용 가능하다. 인라인 스크립트의 경우에는 자신의 상황(스크립트가 HTML에 의존적 또는 독립적)에 맞게 Head태그 또는 Body 태그의 끝에서 작성해야 한다.

간단한 웹 프로그램은 이러한 import 방식이 결과의 visible 한 결과의 차이를 이끌진 못하지만, 실제 웹 서버에서 호스팅하는 더 큰 웹 프로그램의 경우 이러한 사소한 차이가 사용자 경험에 큰 차이를 만든다.

# 색션 3 - 효율적인 개발과 디버깅

# JavaScript 디버깅 방식

1. VSCode의 에러 메시지에 주목
2. 크롬 개발자 도구의 에러 메시지에 주목
3. console.log() 이용
4. 크롬 개발자 도구의 `중단점` 이용

# 중단점

## 중단점 이용하기

크롬 개발자 도구 - source 탭 - 우측 페이지에서 원하는 스크립트 파일 선택 - 라인넘버를 클릭해 중단점 설정
![](https://velog.velcdn.com/images/heeyoon1302/post/65d09810-7b8f-4269-aad8-495d76c6c599/image.png)

중단점 설정 시 위 사진과 같이 파란색 영역으로 표시되며, 중단점 설정 후 웹 페이지를 조작할 경우 해당 스크립트 영역에서 작동이 중지됨

![](https://velog.velcdn.com/images/heeyoon1302/post/4ae461bf-ab8a-4aa9-a23c-75c70a97de0d/image.png)

중단점 라인에 존재하는 변수에 마우스 커서를 올리면 중단 시점의 값을 알 수 있음.

## 조건부 중단점

![](https://velog.velcdn.com/images/heeyoon1302/post/72f5177e-cd70-4171-87b1-e42ff5e86df6/image.png)
라인 넘버를 우클릭 - 조건부 중단점을 추가할 수 있음

![](https://velog.velcdn.com/images/heeyoon1302/post/09e2d928-5993-4111-b406-9465a73fcdfe/image.png)

다음과 같이 스크립트의 변수를 활용해 조건부 중단점을 설정할 수 있음.

## 이벤트 리스너 중단점

![](https://velog.velcdn.com/images/heeyoon1302/post/f8cd7aaa-db3c-4672-b35c-dd7261dc19c3/image.png)

코드 우측에 보이는 탭에서 `이벤트 리스너 중단점` 을 확인할 수 있다. 여러 종류 중에 나는 마우스 클릭 이벤트 리스너 중단점을 주로 사용한다. 이렇게 되면 버튼을 클릭하는 경우 스크립트 실행이 중단하면서 클릭 이벤트가 발생한 부분을 확인할 수 있다.

![](https://velog.velcdn.com/images/heeyoon1302/post/4b154a38-455f-4fd6-9d09-eca913c0da0e/image.png)

> 이렇게 중단점을 활용해 문제가 예상되는 부분을 찾았으면, 개발자 도구 내에서 스크립트를 수정해 로컬 파일에는 영향을 주지 않고 다양한 실험을 할 수 있다. 실험을 통해 올바른 결과가 도출하면 디버깅에 성공한 것이고 해당 사항을 로컬에 반영해주면 되는 것이다.

# 색션 4 - 제어구조(Control Structure)

# if문 - if statement

`if(condition)`
조건식에는 보통 동적인 boolean 값이 들어간다.
동적인 boolean 값은 boolean operators 에 의해 실현된다.

- `==` 일치 연산자
- `!=` 불일치 연산자
- `===` 삼중 등호 연산자 `!===` 삼중 부등호 연산자
  삼중 (부)등호 연산자는 값 뿐만 아니라 타입까지 점검한다

```javascript
3 == "3"; //true
3 === "3"; // false
```

=> 삼중 (부)등호 연산자를 이중보다 더 자주 사용하는 것을 추천한다.

## 주의 - 배열과 객체에서의 동등연산자

배열과 객체 그 자체를 비교할 때 내용물이 같다해도 같지 않다고 반환한다

```javascript
const arr1 = ["a"];
const arr2 = ["a"];
arr1 == arr2; //false
arr1 === arr2; //false

const obj1 = { name: "a" };
const obj2 = { name: "a" };
obj1 == obj2; //false
obj1 === obj2; //false

const arr3 = arr2;
arr3 === arr2; //true
```

다음과 같이 할당 연산자를 통해 생성된 배열/객체의 경우 동일하다고 반환한다.

- `>,<,>=,<=` 비교연산자
  자바스크립트의 특이한 점은, 문자열끼리도 비교연산자를 사용할 수 있다는 점이다. 유니코드 값을 비교해 결과를 도출한다

```javascript
"ab" > "aa"; //true
"a" > "b"; //false
```

- 단항연산자
  - `++,--` 1을 더하거나 뺌.
  - `!` boolean 값을 반대로 만들어준다.

동시에 여러 조건을 달고 싶다면 - 논리연산자를 이용하면 된다

- && AND 연산자
- || OR 연산자

## 연산자 우선순위

대부분의 경우 상식선에서 해결되지만, 알아둬야 하는 것들도 존재한다

- 산술 연산자는 논리연산자보다 우선이다.
- AND 연산자는 OR 연산자보다 우선이다.

1. ()
2. 단항 연산자 ( --, ++, ! )
3. 산술 연산자 ( \*, /, %, +, - )
4. 비교 연산자 ( >, >=, <, <=, ==, ===, !==, != )
5. 논리 연산자 ( &&, || )
6. 대입(복합 대입) 연산자 ( =, +=, -=, \*=, /=, %= )

## truly 와 falsy 값은 뭐지?

if 조건문의 조건식 안에 boolean 값을 넣어야 되는 것은 맞지만, 반드시 boolean 값을 넣어야 되는 것은 아니다. 왜냐하면 브라우저는 조건식 안에 boolean값이 아니더라도 이를 자체적으로 해석해 boolean 값 처럼 다루기 때문이다.

- `0` 숫자 0은 false로 취급한다
- 이외의 모든 숫자는 true로 취급한다
- `""` 빈 문자열은 false로 취급한다
- 이외의 모든 문자열은 true로 취급한다
- 모든 객체,배열은 true로 취급한다
- `null` `undefined` `NaN` 은 false로 취급한다.

결론 : falsy값은 다음과 같다

> null, undefined, 0, NaN, `''(빈문자열)`, false

따라서 조건식에 boolean 타입이 아닌 변수를 넣어서 코드를 작성할 수 도 있다.

예시

```javascript
function getResult(){
    const enteredValue = getUserInputNumber();
    if(!enteredValue){
        return;
    }
   ...생략
   }
```

위 예시 코드에서 enteredValue는 숫자형이다. 따라서 만약 enteredValue가 falsy 값인 0이라면, ! 연산자에 의해 true로 변환되어 조건문이 실행되고, 조건문의 return에 의해 함수가 종료된다.

> JavaScript에서는 비교 연산자 없이도 조건문에서 변수를 사용할 수 있다.

# 함수를 이용해 반복적인 코드 줄이기

```javascript
function attack(mode) {
  let attackValue;
  if (mode === "ATTACK") {
    attackValue = PLAYER_ATTACK_VALUE;
  } else if (mode === "STRONG") {
    attackValue = PLAYER_STRONG_ATTACK_VALUE;
  }
  currenrMonsterLife -= dealMonsterDamage(attackValue);
  judgment();
}

function attackHandler() {
  attack("ATTACK");
}

function strongAttackHandler() {
  attack("STRONG");
}
```

# [JavaScript] JS 함수로 코드 줄이기, 실수 줄이기, 그리고 동적 언어로서의 객체 다루기.

함수를 이용해 다음과 같이 반복적인 코드를 줄일 수 있다. `attackHandler`와 `stringAttackHandler` 의 차이점은 함수에 이용되는 문자열 하나뿐이기 때문에, 해당 문자열을 인자로 받는 또 다른 함수를 매개변수로 하는 코드를 저장하고, `attackHandler`와 `stringAttackHandler`에서 인자를 전달하도록 하는 것이다.

# 식별자는 상수로 선언

위의 코드에서 'ATTACK'과 'STRONG' 이 반복적으로 등장한다. 이 둘은 `attack` 함수에서 조건문의 조건식에 들어가 식별자로서의 역할을 한다. 즉 `attackHandler`가 실행된건지 `stringAttackHandler`가 실행된건지 구분해주고 식별해준다, 즉 식별자이다. 이러한 경우 만약에 오타가 발생할 시 변수로 선언된 것이 아니라서 붉은 줄이 뜨질 않아 오류를 찾기 힘들어지기 때문에 상수로 선언해주는 것이 좋다.

# 객체에서 정의되지 않는 속성을 접근할 수 있다?

```javascript
function logging(ev, val, currentPlayerLife, currentMonsterLife) {
  let logEntry = {
    event: ev,
    value: val,
    playerHealth: currentPlayerLife,
    monsterHealth: currentMonsterLife,
  };
  if (ev === MODE_ATTACK || ev === MODE_STRONG_ATTACK) {
    //logEntry에서 존재하지 않는 속성도 이렇게 지정 가능함. 이러면 자동으로 속성이 추가됨.
    logEntry.target = "MONSTER";
  } else if (ev === MODE_MONSTER_ATTACK) {
    logEntry.target = "PLAYER";
  }
  gameLog.push(logEntry);
}
```

# Boolean 트릭, truthy와 falsy를 다루는 논리 연산자 이용을 중심으로

위 코드는 유효한 코드이다. logEntry에서 target이라는 속성이 부재함에도 불구하고 조건문에서 `점 표기법`을 통해 접근하고 있다. 그 이유는 자바스크립트에서는 객체의 속성을 동적으로 추가할 수 있기 때문인데, 존재하지 않는 속성에 값을 할당하면 해당 속성이 자동으로 생성된다.

> 이것이 JavaScript의 `동적` 언어로서의 독특한 특징이다.

# !! 연산자 이용

!은 기존의 bool값을 반대로 바꾸는 거라면, !!는 반대의 반대, 즉 원래로 돌아오는 값이다. 정말 쓸데 없다고 생각하겠지만, !!를 이용하면 truthy를 true로, falsy를 false로 바꿔주는 유용한 친구이다.

truthy와 falsy가 모른다면 이쪽으로 => https://velog.io/@heeyoon1302/JavaScript-if%EB%AC%B8%EC%97%90-%EB%8C%80%ED%95%B4-%EB%8B%A4%EC%96%91%ED%95%9C-%EC%97%B0%EC%82%B0%EC%9E%90%EB%A5%BC-%EC%A4%91%EC%8B%AC%EC%9C%BC%EB%A1%9C#truly-%EC%99%80-falsy-%EA%B0%92%EC%9D%80-%EB%AD%90%EC%A7%80

코드로 예시를 보여주겠다

```javascript
!!1;
```

일단 1은 truthy다. 만약 !1 이었다면 false가 반환되었을 것이다. 그러나 !! 덕분에 true가 반환되었다.

# || 연산자 이용

||연산자를 이용하면 조건문을 사용하지 않고 조건에 따른 값 할당이 가능하다. 이번에 내가 소개할 것은 삼항연산자는 아니다. 그러나 그만큼 유용하다.

||을 Boolean 형의 연산 용도로 사용하지 않고, truthy와 falsy 값을 비교할 때에도 사용할 수 있다. 이때 ||은 가장 첫번째의 truthy값을 반환하는 연산자가 된다. 만약 모든 값이 falsy라면, 가장 마지막 값을 반환한다.

```javascript
const name = someInput || "MAX";
```

예시 코드를 설명하자면, name의 값은 someInput이라는 변수에 어떤 값이 할당되었는지에 따라서 달라진다. 만약 사용자가 자신의 이름을 작성하지 않았다면 someInput은 null일 것이다. null은 falsy 값이다. 따라서 || 뒤에 있는 someInput이 falsy인것을 깨달은 후 || 뒤에 있는 'MAX'가 truthy임을 깨달으면 name에 MAX가 할당되는 것이다.

만약 someInput이 null이나 빈 문자열이 아니라면(즉, 문자열이 할당되어 있다면) truthy이기 때문에 name에는 someInput의 값이 할당될 것이다.

내가 소개한 || 연산자의 자바스크립트만의 특별한 쓰임에 대해 더 자세히 알고 싶다면 이하 링크를 참고해라.
https://ko.javascript.info/logical-operators

# && 연산자 이용

||와 비슷한 느낌으로 가주면 된다. &&은 모두 truthy일 경우 마지막 값을 반환하고, falsy인 값을 인지하면 그 값을 반환한다.

# 결론

=== >= 와 같은 비교연산자와는 다르게, || 와 &&의 논리연산자는 boolean 값을 반환하는 게 아니다. 연산자 전후에 있는 값을 조건을 취해서 그 조건 중 일부를 반환한다.

자바스크립트의 for-of 와 for-in은 배열과 객체를 다룰 때 사용된다. for-of는 배열을 순회하며, for-in은 객체를 순회한다.

# for-of 와 for-in을 활용하자

# For - of

```javascript
for (const i of 배열) {
  console.log(i);
}
```

이렇게 하면 배열 안에 담긴 값을 배열의 순회하며 꺼낼 수 있다. 여기서 왜 let이 아니라 const로 선언한거지? 라는 궁금증이 생길 수 있는데, javascript는 배열을 순회하면서 배열의 값을 저장할 때 기존의 변수에서 재할당하는 것이 아니라 새로운 변수를 계속 만들어내기 때문에 const로 선언하여도 무방한 것이다.

```javascript
for (const i in 객체) {
  console.log(i);
}
```

# For - in

이렇게 하면 i에는 객체의 `key` 값이 담기게 된다. 따라서 얻게된 key값을 활용해 `value`를 얻고자 한다면 다음과 같이 작성하라.

```javascript
for (const i in 객체) {
  console.log(객체[i]);
}
```

# 결론

> 따라서 나는 배열안에 여러 객체들이 담겨있는 상황에서 for-of 문과 for-in문을 중첩해서 사용하면 좋을 것 같다고 생각했다.

```javascript
for(const i of 배열){
	for(const key in 객체){
    	console.log(객체[key];
    }
}
```

# throw와 try - catch문을 이용하자

자바스크립트의 '약형'언어로서의 성질이 보여주는 관대함은 때론 불편을 야기하기도 한다. 예를 들어 사용자로부터 숫자만을 입력받고 싶음에도 사용자가 숫자가 아닌 문자열을 입력해도 자바스크립트는 에러를 발생시키지 않는다. 이러한 경우 개발자는 `throw` 와 `try - catch`을 함께 이용해, 자체저으로 오류를 정의하고 처리할 수 있다.

```javascript
const enteredValue = prompt("Maximum life for you and the monster.", "100");

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(enteredValue) || enteredValue <= 0) {
  chosenMaxLife = 100;
}
```

기존 코드를 try - catch문을 이용해 수정해보겠다. 기존 코드에서 사용자가 숫자가 아니거나 0 이하의 수를 입력하였을 경우 조건문을 활용해 Life 를 100으로 강제하였다. 물론 이러한 방식도 오류를 해결하는 방법이 맞지만, try - catch문을 활용할 수 도 있다.

# throw로 사용자 정의 오류 만들기

```javascript
if (isNaN(enteredValue) || enteredValue <= 0) {
  throw { message: "you have to enter value that is number more than 0" };
}
```

throw 키워드를 사용하면 사용자가 원하는 타입의 오류를 마음껏 만들 수 있다. throw 키워드 뒤에 문자열, 숫자, 배열 등을 기입할 수 있으며, 국룰은

```javascript
{
  message: "오류 내용";
}
```

과 같은 객체를 내보내는 것이다. 이 상태로 조건식에 만족하는 입력을 하게 되면 다음과 같은 로그를 출력한다.
![](https://velog.velcdn.com/images/heeyoon1302/post/76c85cbc-5c16-4f10-8506-d67732422fa4/image.png)
명백한 오류 메시지이다. 그리고 여기 Uncaught이라는 키워드가 등장하는데, 이는 try - catch 문에 의해 오류를 잡지 못함을 의미한다.

# try - catch

```javascript
try {
  if (isNaN(enteredValue) || enteredValue <= 0) {
    throw { error: "you have to enter value that is number more than 0" };
  }
} catch (error) {
  console.log(error);
  enteredValue = 100;
}
```

위 코드는 try - catch문에 의해 내가 정의한 오류를 잡는 모습이다.

try 블럭 안에는 오류를 발생할 수 있는 내용이 들어가고, catch 블록 안에는 오류 발생 시 실행할 내용을 작성한다. finally 키워드도 존재하는데, 이는 오류 발생 유무와 상관없이 항상 실행할 내용이 들어가고, 자주 쓰이진 않는다.

catch 이후 괄호에는 오류 객체를 담기 위한 식별자라고 생각하면 된다. 즉 아무거나 작성해도 된다.
따라서 다음 코드를 실행하면
![](https://velog.velcdn.com/images/heeyoon1302/post/6e70375f-b574-40b1-a67b-d045ada03e0a/image.png)
보이는 것처럼 오류 메시지가 아니라 console.log()에 의한 단순한 출력메시지이다. 오류가 잡힌 것이다.

> 이와 같이 throw 와 try-catch 문을 사용하면 의도적으로 오류를 발생시켜 오류 로그를 남기는 동시에, 오류 발생으로 인한 스크립트 작동 중지 상황을 예방할 수 있다.

try - catch문을 모든 오류가 발생할 수 있는 상황에 사용하기엔 쉽지 않다. 주로 네트워크 오류와 같이 제어할 수 없는 오류에 대해서 사용하면 좋다.
