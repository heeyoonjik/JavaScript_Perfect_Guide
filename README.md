# JavaScriptPerfectGuide

유데미의 `자바스크립트 완벽 가이드` 강의에서 작성한 소스코드와 배운 내용을 정리한 레포지토리 <br/>
해당 강의 정리 내용은 README 파일과 벨로그에 정리해놓았습니다. <br/>
벨로그 바로 가기 : https://velog.io/@heeyoon1302/series/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%99%84%EB%B2%BD-%EA%B0%80%EC%9D%B4%EB%93%9C

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

# 더이상 var를 사용하지 않는 이유 - 스코프, 호이스팅..

ES는 브라우저에서 동작하는 스크립트 언어들의 표준을 정하는 ECMAscript의 줄임말이고, ES6는 ES 중 가장 최신 버전을 의미한다. 자바스크립트 또한 ES의 표준을 참고하여 만들어지며, 브라우저 업체들은 ES에 따라서 브라우저를 만들게 된다.

ES6가 2015년에 release되었을 때 일어난 큰 변화중 하나는 `let` 과 `const`의 등장이다. 기존에 사용되었던 `var`을 대체하기 위함인데, var을 사용하지 않고 let 과 const를 사용해야 하는 이유를 스코프 개념과 함께 설명하겠다.

# 스코프 이슈

## let 과 const 는 블록 레벨 스코프이다.

블록은 자바스크립트 코드에서 객체를 생성하지 않는 중괄호 쌍을 하나의 단위 기준으로 하는 용어이다. 따라서 중괄호를 사용하는 if문, for문 모두 각각의 블록을 형성한다. 블록과 반대되는 개념으로 '전역'이라 할 수 있겠다. 따라서 각각을 지칭할 때 블록 레벨(수준,단계) 스코프(범위), 전역 레벨 스코프라 한다.

물론 let 과 const를 블록 외부에서도 선언과 초기화가 가능한 것은 모두들 알 것이다. 이렇게 되면 let과 const는 전역 레벨 변수로서도 활용 가능하다.

```javascript
if (a < b) {
  let name = "MIN";
}

console.log(name); // 오류 발생, 블록 레벨 변수를 외부에서 참조할 수 없다.
```

### 쉐도잉이 존재한다.

let과 const가 블록 레벨 스코프이기 때문에 등장한 개념이 "쉐도잉"이다.
전역 레벨과 블록 레벨에 동일한 변수명이 존재할 경우, 블록레벨에서 해당 이름의 변수를 참조할 때, 전역 레벨의 변수를 참고하지 않고, 블록레벨의 변수를 참고하는 현상을 쉐도잉이라고 한다. 이것이 중요한 이유는, 이 현상이 일어난 이유가 let과 const가 블록 레벨 스코프의 성질을 띄기 때문이다.

```javascript
let name = "KIM";

if (a < b) {
  name = "MIN";
  console.log(name); // KIM
}
```

## var는 전역 레벨 스코프이다.

이와는 반대로 const는 언제나 전역 레벨 스코프이다. 따라서 블록 안에서 vat로 선언하여도, 전역 레벨로 선언되는 것이다. 따라서 쉐도잉이라는 개념 또한 존재하지 않으며, var를 블록 안에서 선언해도, 블록 밖에서 해당 변수를 참조할 수 있게 된다. 이렇게 되면 사용자가 자신이 해당 블록 안에서 사용하기 위해 선언한 변수 조차도 외부에서 사용할 수 있게 되어 문제를 야기할 수 있게 된다.

# 호이스팅의 존재, 하지만 처리 방식은 달라진

자바스크립트를 브라우저에서 실행할 경우, 브라우저는 스크립트 파일 전체를 분석한 뒤 함수와 변수를 따로 저장하여 필요할 경우에 사용한다. 이는 스크립트에 존재하는 함수와 변수의 선언을 스크립트 파일 최상단으로 이동시킨 것과 동일한 효과를 주는데(실제로 이동하는 것이 아니다), 따라서 우리는 함수의 경우 선언과 호출 코드의 순서에 상관없이 오류가 출력되지 않는다. 하지만 변수의 경우 let과 const로 선언하면, 함수와 동일하게 호이스팅의 과정을 거치지만, 개발자가 변수 선언 전에 변수를 참조하고자 하면 함수와는 다르게 오류를 내놓게 된다.

```javascript
console.log(name);
var name = "kim";
```

![](https://velog.velcdn.com/images/heeyoon1302/post/e3cdcdbe-e38d-46c9-aed7-a9341c7bea8b/image.png)

var 또한 let과 const와 동일하게 호이스팅의 과정을 거치지만, 변수 선언 전에 참조하여도 오류가 발생하지 않는다. (동일한 코드로 실행한 모습)

![](https://velog.velcdn.com/images/heeyoon1302/post/6a791569-b7e8-4cac-a85e-6d5e35f9ab84/image.png)

이러한 현상은 코드를 이해하기 어렵게 만들며, 실수를 유발할 수 있다.

이와는 별개로 var로 변수를 선언할 시 동일한 이름의 변수를 재선언해도 오류가 발생하지 않으며, 이 또한 개발 과정에서 실수를 유발할 수 있으므로 var는 사용하지 말아야 한다.

참고로 스크립트 파일 최상단에 `'use strict';`을 작성하면 '엄격 모드'가 실행되어 위에서 나온 var의 이상한 동작에 대해 오류를 발생한다. 하지만 딱히 쓸모 없을 것 같으며 나는 빨리 자바스크립트 공부하고 타입스크립트로 넘어갈 것이다.
fuck javascript

# 브라우저에서의 작동원리, 그리고 원시값과 초기값

# 기본 작동 원리

만약 당신이 스크립트 파일을 브라우저에서 실행하면, 브라우저에 내장되어있는 `자바스크립트 엔진`이(chrome의 경우 v8이라는 자체 자바스크립트 엔진을 사용한다) 스크립트 파일을 분석하고 실행한다. 엔진은 크게 두 부분으로 나눌 수 있는데, `인터프리터`와 `컴파일러`이다. 인터프리터는 말 그대로 스크립트를 해석하여 바로 실행하는 역할을 한다. 인터프리터의 해석-실행 과정이 진행되는 동시에 컴파일러는 자바스크립트 코드를 바이트 코트로 컴파일 하여 당신의 컴퓨터로 보낸다. 따라서 만약 스크립트 파일이 재실행된다면, 인터프리터의 역할이 줄어들고 당신의 운영체제에서 곧바로 빠르게 실행된다. 당신의 자바스크립트 코드가 컴파일 되는 과정에서 `브라우저 API`의 코드 또한 함께 포함되어 당신의 컴퓨터로 이동하는데, 브라우저 API는 브라우저와 당신의 자바스크립트 코드간의 연결고리라고 생각하면 된다.

# 자바스크립트 엔진 - 힙과 스택

`힙HEEP` 은 장기 메모리로, 메모리를 할당작업이라 생각하면 된다. 프로그램 내에서 다루는 데이터가 저장되는데, 장기메모리리이다.

`스택STACK`은 단기 메모리로, 프로그램의 흐름을 관리하는데, 주로 현재 실행되고 있는 함수를 관리하는 역할을 한다. 어떤 함수가 어떤 데이터를 반환하는지를 관리한다.

그럼 힙과 스택은 어떤 관계일까? 먼저 힙은 장기메모리답게, 스크립트에서 정의한 함수를 저장한다. 그리고 스택에서, 힙에서 저장한 함수의 실행을 관리하는데, 어떤 함수가 현재 동작하며, 어떤 함수가 언제 종료될 지 등을 관리한다.

```javascript
function getName() {
  return "KIM";
}

function hello() {
  console.log(getName());
}
hello();
```

위 코드를 통해 스택의 작동방식을 이해해보자. 먼저 당신이 스크립트 파일을 실행할 경우, 스크립트 전체는 '익명 함수'라고 불리는 함수의 형태로 스택에서 가장 처음 쌓인다. 스크립트가 실행되는 과정에서 함수 hello의 호출을 만나게 되면, 익명 함수 위에 hello()가 쌓인다. hello는 console.log()를 호출하며, console.log()안에서는 getName() 함수를 호출한다. 따라서 처음 익명함수 하나 뿐이였던 스택은 함수의 호출 순서에 따라 익명함수 위에 hello(), console.log(), getName()이 쌓인다. 그리고 함수의 실행이 종료되면, 함수의 스택에서 빠지게 되고 최종적으로 스크립트까지 종료되면 스택은 비게 된다. 즉, 후입선출 : 나중에 들어온 것이 먼저 나가는 방식이다.

참고로 자바스크립트 엔진은 싱글 스레드로 동작하기 때문에 스택 또한 하나뿐이다.

# 원시값과 참조값

우리가 사용하는 다양한 자료형을 크게 두 분류로 나눌 수 있다, 원시값을 저장하는 자료형과 참조값을 저장하는 자료형이다

원시값을 저장하는 자료형은 대표적으로 문자열,숫자 등이 있는데, 이들이 저장하는 원시값의 의미는 쉽게 말해서 값 그 자체이다. 다음의 코드를 통해 이해해보자.

```javascript
let name = "KIM";
let name2 = name;
name = "COOK";
console.log(name2); //"KIM"
```

name 변수에 "KIM"을 할당하고, name2를 선언해 name의 값을 복사하는 코드이다. 이 때 복사되는 과정은 상식에 맞게 값 그자체를 복사하는 것이다. 즉 name과 name2는 독립적으로 존재하며, 값 그 자체를 새로운 변수(name2)에 할당한 것이기 때문에 name의 값을 바꾼다고 해서 name2에 영향을 줄 수는 없다.

그러나 참조값을 저장하는 객체라면 애기는 달라진다. 참조값을 저장한다는 말은 포인터 - 즉 객체의 값 그 자체가 아닌 객체의 값이 위치한 "주소"를 저장한다는 말이다. 객체는 값 그자체가 아닌 값의 주소를 저장하기 때문에, 위에서 보여준 예시 코드와는 다른 결과를 보여준다.

```javascript
let player = { name: KIM };
const player2 = name;
player.name = "LEE";
console.log(player2.name); //LEE
player2.name = "MIN";
console.log(player.name); //MIN
player2 = { name: "GOD" }; //런타임 에러
```

먼저 player2를 player로부터 복사한 것을 확인할 수 있다. 그러나 여기서 복사된 것은 값 그자체가 아니라, 값이 저장되어 있는 주소이기 때문에, player를 통해 값에 변화를 주면, 동일한 값을 공유하는 player2에서 또한 반영이 되는 것이다. 그리고 player2가 const로 선언되었어도, 마지막 줄과 같이 직접적으로 새로운 객체 값을 재할당 하는 것이 아니라 기존 값에 변화를 주는 것이면, 그 값의 주소에는 변화가 없기 때문에 가능한 것이다.

따라서 원시값과 참조값에 대한 이해가 없다면, 자바스크립트 코드 작성시 자신이 의도한 대로 복사가 되지 않을 수 있다.

그렇다면 객체의 주소가 아닌 값을 복사하려면 어떻게 할까?

```javascript
const player = { name: KIM };
const player2 = { ...player };
```

...은 자바스크립트의 전개 연산자로 객체의 값을 하나하나 옮기는 행위를 간단하게 ... 으로 표현한 것이다.

따라서 위와 같이 코드를 작성하면 player2에는 player가 저장하고 있는 주소가 저장되는 것이 아니라, player가 저장하고 있는 주소의 실제 값과 동일한 값이 새로 생성되어 그것의 주소가 저장된다.

# 가비지 컬렉션

자바스크립트 엔진에는 가지비 컬렉션을 수행하는 가비지 컬렉터가 존재한다.가비지 컬렉션이란, 쓰레기를 수집하는 것이다. 그게 무슨 뜻이냐, 더 이상 참조되지 않는 객체를 자바스크립트 엔진 내의 메모리 저장소인 '힙'에서 제거하는 것이다. 이 작업이 필요한 이유는 우리 컴퓨터의 운영체제가 브라우저에게 사용할 수 있는 일정 메모리를 할당하는데, 더 이상 사용하지 않는 객체가 계속 저장되는 메모리 누수가 존재하면, 결국 메모리 한계치를 넘었을 때 브라우저가 종료되기 때문이다.

가비지 컬렉터를 가비지를 정의하는 방법은 '참조되지 않은 객체'이다. 이게 무슨 뜻이지 코드로 확인하자.

```javascript
let user = { name: "KIM" };
user = { name: "MIN" };
```

처음 user에 이름이 KIM인 객체를 저장했지만, 이후 이름이 MIN인 객체로 재할당했다. 따라서 더 이상 이름이 KIM인 객체를 참조하는 변수가 없는 것이다. 가비지 컬렉터는 해당 객체를 가비지로 판단하고 메모리(힙)에서 삭제한다.

가비지 컬렉터의 의도는 더 이상 사용되지 않는 객체를 메모리에서 없애 메모리 누수를 최소화 하는 것이다. 그러나 위에서 서술한 가비지의 선정 기준으로 인해, 더 이상 사용되지 않는 개체라 할지라도 여전히 참조하는 곳이 있다면, 가비지로 인식되지 못하고 메모리 누수 또한 발생한다. 따라서 이러한 가비지 컬렉션의 특징을 염두해 두고 자바스크립트 코드를 작성하는 것이 좋다.

# 함수 정복하기

자바스크립트에서 함수는 코드를 줄이기 위한 효과적인 수단이다.

# 매개변수와 인자

매개변수는 함수 내에서 정의하는 인자를 받아오는 변수이며, 인자는 함수를 호출 할 때 전달하는 데이터이다.

# 함수 vs 메서드

함수는 독립적으로 정의하는 것이 처음 자바스크립트를 배울 때 국룰이지만, 함수를 객체 내에서도 정의할 수 있다.

```javascript
const person = {
  greet: function hello() {
    console.log("hola world");
  },
};

person.greet(); //호출은 다음과 같이 한다.

HTML에서_가져온_객체.addEventListener("click", 함수);
//이제 위 문장이 무슨 말인지 이해 했는가? HTML에서 가져온 객체 안에
//이벤트리스터 메서드가 존재하는 것이다.
```

위 와 같이 객체 내의 프로퍼티에서 정의되는 함수를 `메서드` 라고 부른다.

객체의 프로퍼티로서 함수를 정의할 수 있지만, 함수 그 자체가 객체가 될 순 없을까? 당연히 `가능` 하다.

# 사실 함수는 객체이다

뭔 개소라냐고? 반증 사례가 있다고?

```javascript
function greet() {
  console.log("hello");
}

console.log(typeof greet);
```

위의 코드를 실행하면 function이라고 뜨는게 반증 사례라고?

![](https://velog.velcdn.com/images/heeyoon1302/post/af36e320-91bf-40bf-a80b-6eaba695a2dd/image.png)

맞다. 함수는 함수다. 그러나 함수는 객체를 통해 만들어졌다. 그니까 함수는 객체의 특별한 종류인 것이다. 증거가 뭐냐고?

```javascript
function greet() {
  console.log("hello");
}

console.dir(greet);
//"dir메소드는 객체의 속성들을 보여준다"
```

![](https://velog.velcdn.com/images/heeyoon1302/post/41c9e9ea-39a4-409e-b2c3-1e6b83409cb7/image.png)

위와 같이 함수는 다양한 프로퍼티로 구성되어있다. 따라서 함수는 객체가 가지는 특성 - 예를 들어 자바스크립트 엔진에서 힙에 저장되는 것 - 을 물려 받는다.

다시 본론으로 돌아와서, 함수는 객체이기 때문에 함수를 객체처럼 변수에 저장하는 것이 가능하다.

# 함수를 변수에 저장하다. 그리고 익명함수

```javascript
const english = function greet() {
  console.log("hello");
};

console.log(greet);
```

greet()으로 정의한 함수를 english라는 상수에 저장했다. 과연 어떤 결과가 나올까?
![](https://velog.velcdn.com/images/heeyoon1302/post/89cb24ae-1905-49ac-99db-fcb46206d2c4/image.png)

에러가 뜬다. greet() 함수는 english 상수 안에 존재하기 때문에, 함수 실행을 위해선 english를 호출해야 한다.

따라서 변수 안에 존재하는 함수의 이름은 사실상 무의미하다. 그래서 이름을 지우곤 한다. 이때 이름 없는 함수를 `익명 함수` 라고 부른다.

```javascript
const english = function () {
  console.log("hello");
};
```

# 표현식 vs 선언식

위와 같은 함수 `표현식` 은 함수 `선언식` 과는 어떤 차이가 있을까? 그것을 살펴보기 앞서, 표현식은 간단하게 설명하면 '=' 오른쪽에 들어가는 개념을 말하는 것이다.

함수 선언식은 이미 알다시피 호이스팅 개념이 적용되어, 함수 선언과 호출의 순서가 중요하지 않는다. 함수를 호출하는 코드가 함수를 선언하는 코드보다 개발 환경 상에서 위에 있어도 된다는 말이다.

선언식 또한 호이스팅이 되지만 초기화 되지 않는다. 따라서 코드의 순서가 중요해지는데, 함수를 호출하는 코드가 반드시 함수를 선언하는 코드 이후에 등장해야 하는 점이다. 그리고 이러한 특징이 오히려 개발자들로 하여금 오류와 실수를 줄여주는 수단이 되기에, 함수 선언식보다 함수 표현식을 즐겨 사용하기도 한다.

# 익명 함수의 또 다른 쓰임처

앞서 익명함수에 대해 알아보았고, 또 함수를 표현식으로 정의할 수 있음을 알았다. 함수는 또 다른 곳에서 또한 정의할 수 있는데, 바로 `인자`이다. 이벤트 리스너를 통해 어떤 말인지 알아보자.

```javascript
const startGameBtn = document.getElementById("start-game-btn");

startGameBtn.addEventListener(
  "click",
  (function () {
    console.log("hi");
  })()
);
//함수를 정의하고 중괄호 바로 뒤에 () 을 넣어 선언부와 호출부를 결합한다.
```

위와 같이 동일한 함수가 다시 필요하지 않고, 오직 이벤트 리스너에만 사용된다면 다음과 같이 따로 정의하지 않고 익명함수를 이용해 표현할 수 있다.

하지만 이런 형태의 익명함수의 이용에는 문제점이 있다. 만약 이 익명함수에서 문제가 발생할 경우, 일반적인 이름을 가진 함수와는 다르게 오류가 발생할 시 브라우저에서 문제를 일으킨 함수의 이름을 알려주지 못하기 때문이다.

![](https://velog.velcdn.com/images/heeyoon1302/post/64fab268-cd67-4bb6-8658-e1df0dbaa13d/image.png)
정의되지 않은 변수 add를 위에서 작성한 익명함수의 console.log에 넣었을 때 위와 같은 오류 메시지가 출력된다. 어떤 함수에서 오류가 난지 알 수 없기 때문에 디버깅 시 애를 먹을 수 잇다. 물론 어떤 줄에서 오류가 난지는 알 수 있으나 만약 코드가 길어질 경우 문제가 된다.

따라서 이와 같은 문제를 해결하기 위해 함수를 인자로 전달하는 경우에는 익명함수 보다는 함수의 이름을 정의하는 것이 좋다.

```javascript
const startGameBtn = document.getElementById("start-game-btn");

startGameBtn.addEventListener(
  "click",
  (function greet() {
    console.log("hi");
  })()
);
```

# 화살표 함수

익명함수는 화살표 함수로 바꿀 수 있다. 그래서 화살표 함수는 뭔데?

```javascript
const userSelection = () => {
  let userInput = prompt(`${ROCK}, ${SCISSORS}, ${PAPER}!`, "").toUpperCase();
  if (userInput != ROCK && userInput != SCISSORS && userInput != PAPER) {
    console.log(`you enter invalid value, so i will set you ${ROCK}`);
    userInput = ROCK;
  }
  return userInput;
};
```

()을 기준으로 앞에 `function` 키워드는 사라지고, 뒤에 `=>`가 생겼다.

그래서 이게 뭐하는건데 0. 일단 function 키워드를 사용하지 않는다.

1. 하나의 매개변수를 받는 경우 더 짧게 작성 가능
   const funName = (a) => { 를
   const funName = a => { 로...
2. 표현식이 하나면 {를 생략 가능

```javascript
const funName = (a, b) => a + b;

const funName = (inputName) => ({ name: inputName });
// 객체를 감싸는 소괄호는 객체 생성과 함수 본문을 구분짓는 역할을 한다.
```

> 결국 화살표 함수가 성능이 더 뛰어나는 것은 아니지만 더 짧은 구문을 가능하게 한다.

# 유동적인 인자 전달

## 매개변수 초기화

만일 함수의 매개변수를 2개로 설정했는데, 실제로 전달하는 인자값은 1개라면 어떻게 될까? 일반적인 프로그래밍 언어라면 오류가 나겠지만, 우리 관대한 자바스크립트 형님은 자체적으로 undefined를 매개변수에 할당한다.

만일 이 전략이 싫다면, 매개변수 기본값을 초기화 해줄 수 있다.

```javascript
const greed = (name, age = 20) => {
  console.log(`my name is ${name} and age is ${age}`);
};

greed("KIM");
```

다음과 같이 인자를 전달할 경우 name에는 KIM이 할당되고, age에 대해서는 전달되는 인자가 없으므로 기본값인 20이 할당된다.

## 유동적인 개수의 인자 받기

여러 데이터를 함수에 전달하고자 할 때, 만약 데이터의 개수가 유동적이라면 어떻게 처리해야 할까?

먼저 `스프레드 연산자`를 사용하면 된다 `...`을 매개변수 앞에 붙이면 된다.

```javascript
const sumAll = (...numbers) => {
  let sum = 0;
  for (const num in numbers) {
    sum += num;
  }
  return sum;
};

console.log(sumAll(1, 34, 43, 1, 35, 42, -13));
console.log(sumAll(2, 3, 1));
```

이렇게 함수의 매개변수에서 스프레드 연산자를 사용하면 그 매개변수를 `rest` 매개변수라고 부른다. rest로 전달된 값들은 배열의 형태가 된다. 따라서 위와 같은 for - in 문이 사용 가능한 것이다.

물론 다른 매개변수와 rest 매개변수를 사용할 수 있다. 주의할 점은 다른 매개변수가 rest 매개변수 뒤에 있으면 안된다. 왜냐하면 rest 매개변수는 이름답게 남은 모든 인자를 잡아먹기 때문이다.

```javascript
const sumAll = (name, age, ...numbers) => {
  let sum = 0;
  for (const num in numbers) {
    sum += num;
  }
  console.log(name + "" + age);
  return sum;
};
```

# 콜백 함수

함수의 인자로 함수를 전달할 수 있으며, 다른 함수의 매개변수로 전달되는 함수를 `콜백 함수`라고 부른다. addEventListner() 같은 경우에도 함수를 매개변수로 받기 때문에 우리는 이미 콜백 함수를 이용하고 있던 것이다.

```javascript
const getResult = (showResult, userChoice, computerChoice) => {
  let result;
  if (userChoice === computerChoice) {
    result = RESULT_DRAW;
  } else if (
    (userChoice === ROCK && computerChoice === SCISSORS) ||
    (userChoice === SCISSORS && computerChoice === PAPER) ||
    (userChoice === PAPER && computerChoice === ROCK)
  ) {
    result = RESULT_USER_WIN;
  } else {
    result = RESULT_COMPUTER_WIN;
  }
  showResult(result);
};

const showResult = (result) => {
  console.log(`the reslt is ${result}`);
};

getResult(showResult, userChoice, computerChoice);
```

getResult 호출 시 showResult라는 함수를 매개변수로 전달하고 있다. 즉 showResult가 여기서 콜백 함수가 되는 것이다. getResult는 자신이 맡은 임무를 수행하고 도출된 결과물을 showResult 함수에 인자로 전달하여 실행한다. 따라서 콜백 함수의 특징은 바로 실행되는 것이 아닌 특정 사건 이후에 실행되는 것이다.

## bind()로 콜백 함수 유용하게 사용

우리 모두가 아는 콜백함수 addEventListner의 경우 함수를 매개변수로 전달할 때 인자는 전달하지 못한는 점을 알고 있을 거다. 그러나 bind()를 사용하면 이런 문제점을 해결할 수 있다. bind()는 함수를 새로 만들어주는 역할을 한다.

```javascript
const greed = name => {
  console.log(`hi~ ${name}`);
}

HTML객체.addEvnetListner('click', greed.bind(this, "KIM");
```

텍스트브라우저는 HTML 파일을 분석하여, 다른 여러 언어(자바스크립트에 제한되어있지 않음)를 통해 HTML 요소에 접근할 수 있도록 Document Object Model을 만든다. 이것을 줄임말이 DOM이다. 따라서 자바스크립트에서 DOM에 접근하여 HTML 요소를 이용하는 것이다.

자바스크립트에서 DOM을 이용할 때 크게 두 가지 전역객체를 이용한다.

- document 객체
- window 객체

# Window 객체

window객체를 통해 브라우저 API에 접근할 수 있다. 대표적인 예로 alert()이다. 우리가 평소 alert()을 사용할 때 앞에 window를 붙이지 않아도 되는 이유는 브라우저가 알아서 window객체를 찾아주기 때문이다.
console.dir(window)을 통해 window객체를 살펴보면 document도 존재하는 것을 알 수 있다. 따라서 document객체도 결국 window객체 안에 존재한다.

윈도우 객체를 통해 스크립트가 실행하는 브라우저의 창에 대해서 접근 가능하다. 따라서 윈도우 객체를 통해 스크립트가 실행중이지 않은 다른 탭의 웹 페이지와는 상호작용이 불가능하다.

HTML문서의 각각의 태그는 브라우저에 의해 각각 element node(요소 노드)로 저장된다. HTML 태그가 위계적으로 작성되어있기 때문에, 노드트리가 만들어지며, 노트 트리의 최상위에는 HTML 노드가 존재한다. 그리고 head 노드와 body 노드가 자식 노드가 된다. 여기서 신기한 점은, HTML 문서의 태그들이 객체로 생성되어 노드 트리를 구성할 때, HTML문서에 존재하는 공백과 문자들이 Text Node라는 이름으로 노드 트리의 구성원이 된다.

# 노드 vs 요소

DOM을 구성하는 객체는 노드이며, 요소는 노드의 종류 중 하나라 볼 수 있다.
노드를 크게 요소노드와 텍스트노드로 나눌 수 있으며, 요소노드는 HTML의 태그가 객체화 된 것이며, 텍스트 노드는 들여쓰기, 텍스트 등이 객체화 된 것이다.

요소노드는 HTML요소와 관련된 다양한 메소드가 제공되며, 여러가지를 수정할 수 있지만

텍스트 노드는 단순히 텍스트 내용을 바꿀 수 있다.

_**쿼리(선택)은 요소 노드에 대해서만 가능하다.
**_

> 우리가 크롬 개발자 도구의 elements(요소) 탭에서 볼 수 있는 HTML 태그들은 사실 DOM에서 가져온 노드들이다.

# Document 객체

document.body
document.head
document.documentElement(HTML 요소노드 선택)
과 같이 점 접근법을 이용할 수 도 있지만, 쿼리 메서드를 주로 이용한다.

## querying elements

### 요소 단일 선택

DOM 객체의 참조값을 리턴해줌.

#### 1. querySelector()

CSS 선택자를 이용

- 클래스로 선택할 경우 앞에 .
- id로 선택할 경우 앞에 #
- 태그도 이용 가능

```javascript
document.querySelector(".list-item");
document.quertSelector("ul li:first-of-type");
```

querySelector는 처음으로 조건과 부합하는 객체를 내놓는다.

만약 이미 어떤 노드를 선택하고, 그 노드의 자식 노드를 선택하고자 할 때에는 quertSelector()나 querySelectorALl()을 이용해야 한다.

#### 2. getElementById()

HTML의 id로 선택, id는 페이지에서 고유하기 때문에 오직 하나만 반환
id를 선택할 때 앞에 #을 붙이지 않아도 됨

### 요소 다중 선택

유사 배열 객체인 요소 집합(노드 리스트)을 리턴함

#### 1. querySelectorAll()

querySelector의 여러개 버전 - 일치하는 모든 항목을 반환
정적 노드리스트를 반환

#### getElementsByClassName() & getElementsByTagName()

동적 노드리스트를 반환
옛날 선택자.
HTMLCollection이라는 유사 배열을 반환한다.

> CSS선택자를 이용해 유연하게 선택할 수 있는 querySelector와 querySelectorAll을 사용하자

# DOM 프로퍼티 설정

DOM을 querySelector나 점 접근법으로 선택했다면, 활용할 수 있다.

```javascript
const ul = document.querySelector("ul li:last-of-type");
ul.textContent = ul.textContent + " Changed";
```

query메소드로 가져온 객체를 변수에 저장한 뒤, 점 접근법으로 프로퍼티에 접근해 수정할 수 있다. 위의 코드는 ul리스트의 가장 마지막 li의 내용을 기존 내용에 'Changed' 라는 텍스트를 덧붙이는 결과를 낳는다.

요소 조작에 관해서 속성과 프로퍼티의 차이점을 알고 있어야 한다.

## 속성(Attribute) VS 프로퍼티(Property)

attribute는 HTML의 태그에서 태그명 이후에 태그에 대한 추가 정보를 설정하는 태그 내의 설명이다.

쉽게 말해서

```html
<h1 class="heading">안녕하세요</h1>
```

여기선 class가 Attribute라는 말이다.

프로퍼티는 브라우저가 이러한 html의 태그들을 객체화 할 때 태그의 어트리뷰트들이 관리되는 곳이다. 즉 속성이 프로퍼티로 변환된다는 의미이다.

속성과 프로퍼티는 1대1로 실시간 동기화 되어있다. 따라서 속성을 바꾸면 프로퍼티에 업데이트되며, 프로퍼티를 바꿔도 속성에 반영된다.

주의할 점은 속성과 프로퍼티가 매칭된 관계에서 반드시 이름이 동일하지 않으며, 항상 쌍방향의 업데이트가 일어나진 않는다.

input태그의 경우 value 속성을 바꾸면 프로퍼티가 업데이트 되지만, 프로퍼티를 바꿔도 속성값은 변화가 없다.

![](https://velog.velcdn.com/images/heeyoon1302/post/50188cfa-685e-4564-ad33-2a7c7f643dfc/image.png)

다음과 같은 input 박스가 존재하며, 개발자 도구 상에서 프로퍼티를 업데이트 했을 때 어떤 일이 일어나는지 보여주겠다

![](https://velog.velcdn.com/images/heeyoon1302/post/97666e2b-6d94-4603-b5ec-02d3023731a6/image.png)
사진을 보면 value를 hello로 변경하였을 때 ui가 업데이트되었다. 이는 프로퍼티를 변경하여 이것이 프로퍼티 상에서는 일단 저장되었다는 것이다. 그러나 ![](https://velog.velcdn.com/images/heeyoon1302/post/bedd1bed-8fc8-403e-87ba-57651a547ae1/image.png)

HTML 태그에서 변경된 요소노드의 속성에서는 변화가 없다. 이것은 value의 특징이다. input의 type 프로퍼티를 변경하면 개발자 도구의 요소 탭에서도 type의 속성값이 업데이트 됨을 알 수 있다.

value와 같은 경우에 프로퍼티를 변경했을 때 속성 또한 변경하고자 한다면
`setAttribute()` 메소드를 이용하면 된다.

```javascript
inputBox.setAttribute("value", "new value");
```

# 부모,자식,선조,후손

querySelector로 dom을 선택할 때 분명 한계는 존재한다. 예를 들어 ul 태그 내의 여러개의 li 태그 중에서 4번째 요소를 선택하고자 할 때, class가 li들이 모두 같은 경우에는 선택할 수 없다. 이 대 부모,자식,선조,후손 관계를 이용한다

## 자식,후손 관계

자식은 요소의 바로 아래 요소를 말하며, 후손은 그 이하의 요소 - 즉 최소 2단계는 아래로 들어가는 관계인 경우를 말한다 -

querySelctor로 ul요소를 선택한 후, 해당 요소를 `children` 또는 `choldNodes`로 자식과 후손 노드에 접근한다.

- children
  유사 배열 객체인 HTMLCollection을 반환하여, 인덱스로 원하는 노드에 접근 가능하다.
  텍스트 노드는 반환하지 않고 오직 요소 노드만 반환한다.
- choldNodes
  NodeList를 반환하며, 인덱스로 접근가능하다.
  텍스트 노드 또한 반환한다.

첫번째 혹은 마지막 노드만을 반환할 수 도 있다.
`firstElementChild`와 `lastElementChild`는 첫번째와 마지막 요소노드에 접근가능하며,
`firstChild`와 `lastChild`는 첫번째와 마지막 노드에 접근가능하다.

## 부모,선조 관계

- parentNode와 parentElement 두 방법으로 접근가능하며, document 그 자체의 부모를 찾으려고 하지 않는 이상 두 방법 모두 사용할 수 있다.
- 부모는 기본적으로 한 요소만 존재한다.
- 선조를 선택하고자 한다면 closet메소드를 이용하면 된다. CSS선택자를 지원한다.

```javascript
const firstLi = document.querySelector("ul");
const ul = firstLi.parentNode;
//parentElement도 가능
const input = firstLi.closet("input");
//input이 firstLi의 조성이어야 가능 아니면 null이 반환됨.
```

# 형제 관계

- HTML 코드 상에서 위쪽의 요소를 선택하고자 한다면
  `previousElementSibling` 또는 `previousSibling`
  전자를 추천한다. 왜냐하면 전자는 해당 요소노드에서 가장 가까운 위쪽의 요소노드를 탐색하고, 후자는 해당 요소노드에서 가장 가까운 위쪽의 노드를 탐색한다. 따라서 후자를 사용할 경우 대부분은 텍스트 노드가 반환된다.
- 반대방향으로는
  `nextElementSibling` 과 `nexrSibling` 이 존재한다.

형제를 찾을 경우 위의 키워드를 사용하는 것은 querySelector를 사용하는 방식보다 수행 속도가 빠르다.

# DOM 요소 스타일링

요소에 접근하여 스타일을 변경하는 방법으로 크게 3가지가 있다.

## 1.인라인 CSS 변경하기

점 접근법을 통해 CSS 코드를 수정하면, 인라인 CSS를 수정할 수 있다.

```javascript
const ul = document.querySelector("ul");
ul.style.backgroundColor = "red";
```

## 2. css 클래스를 활용하기

```css
    <style>
      .red-bg {
        background-color: red;
        color: white;
      }
      .visible {
        display: block;
      }
      .invisible {
        display: none;
      }
      .modalDesign {
        position: fixed;
        background-color: lightblue;
        color: black;
        width: 50%;
        height: 50%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
      }
    </style>
```

위와 같은 css 클래스들이 존재할 때, 자바스크립트에서 요소의 className을 css 클래스 이름으로 지정하면 스타일을 적용할 수 있다.

```javascript
button.addEventListener("click", () => {
  if (modal.className === "invisible") {
    console.log("show");
    modal.className = "modalDesign";
  } else {
    console.log("안보이게");
    modal.className = "invisible";
  }
});
```

## 3.classList이용하기

```javascript
ul.className = "red-bg visibe";
```

위 코드와 같인 하나의 요소에 대해 여러 스타일을 적용할 수 있다. 이렇게 className을 통해 직접 지정할 수 있지만, classList를 이용할 수 도 있다.
classList를 사용하면 `contains` 를 이용해 해당 CSS class가 존재하는지 알거나, `add`로 추가할 수 있고 `remove`로 삭제할 수 있고, `replace`로 old CSS class를 new CSS class로 교체할 수 있으며, `toggle`로 토글 기능을 이용할 수 있다. 토글 기능은 이항대립적으로 작용하여 A클래스를 B클래스로 바꿔주고, B클래스를 A클래스로 바꿔준다.

토글의 예시는 다음과 같다.

```javascript
button.addEventListener("click", () => {
  modal.classList.toggle("invisible");
});
```

토글을 이용하면 위와 같이 모달창을 껏다 키는 기능을 간단하게 구현할 수 있다.

# DOM에 요소 추가하기

지금까지의 과정은 DOM에 있는 기존 요소를 선택하고 수정하는 작업이었다.
그렇다면 DOM에 요소를 추가하기 위해서는 어떤 작업이 필요할까?

## innerHTML과 insertAdjancetHTML

innerHTML은 선택한 해당 요소를 내가 작성한 HTML 코드로 완전히 봐꾸는 작업을 수행한다. 따라서 내가 만약 ul안에 li를 마지막에 하나 더 추가하고 싶다면 다음과 같이 코드를 작성한다.

```javascript
div.innerHTML = div.innerHTMl + "<li> 4th list </li>";
```

코드의 작성이 불편한 것도 있지만, 위 작업을 수행할 경우 단순히 li 추가되는 것이 아니라 div 전체가 재렌더링되기 때문에 성능 저하가 발생한다.

이와 달리 insertAdjancetHTML은 선택한 요소의 앞 또는 뒤에 추가할 새 요소만 렌더링하여 성능 부화가 덜하다.

```javascript
div.insertAdjancentHTML('beforeend', <li>4th list </li>
```

그러나 이러한 접근 방식은 새롭게 추가된 요소에 접근할 수 없으며 복잡한 작업이 불가능하다. 새롭게 추가된 요소에 대해 이벤트 리스너를 추가하지 못한다.

## document.createElement

위에서 제시한 문제를 해결하는 방법은 `document.createElement`이다.
이는 내가 원하는 종류의 요소를 생성하고, appenChild를 통해 선택한 요소에 내가 만든 요소를 추가하면 된다.

```javascript
const newLi = document.createElement("li"); //태그명을 입력
list.appendChild(newLi);
newLi.textContent = "4th list";
newLi.style.backgroundColor = "red";
```

위와 같이 코드를 작성하면 내가 생성한 요소를 선택할 수 있다는 큰 장점이 생기고, 재상용의 가능성도 높아진다.

특정 요소의 앞,뒤에 새로운 요소를 추가하는 방법으로 `before`,`after` 등이 존재하지만, safri에서는 지원하지 않는 큰 단점이 존재한다. 따라서 위에서 소개한 `insertAdjancetHTMl`을 통해 더 쉽게 이용 가능하다.

```javascript
const newLi = document.createElement("li");
newLi.textContent = "4th list";
const secondLi = list.childeren[1];
secondLi.insertAdjacentHTML("afterend", newLi);
//secondLi 이후에 추가하는 명령이다.
```

> 요소를 복사하고 싶을 때에는 선택한 요소에 대해`clineNode`라는 메소드를 이용하면 된다.

# 정적 리스트 VS 동적(live) 리스트

`querySelectorAll` 를 사용하면 정적 노드 리스트가 반환된다. 그렇다면 정적이라는 말은 무슨 뜻일까? 먼저 한 번 반환된 노드 리스트는 업데이트 되지 않는다. 따라서 ul요소의 노드 리스트를 반환받고, 이후 ul에 요소를 추가한다 하더라도 노드 리스트에는 변경사항이 업데이트 되지 않는다. 이러한 의미에서 `정적` 이라는 용어를 사용한다. 노드리스트는 DOM의 스냅샵과도 같다. 그러나 이 스냅샷은 DOM과 참조 관계를 유지한다. 따라서 노드리스트의 객체 접근해 정보를 수정하면 실시간으로 UI에 반영된다. 이러한 점에서는 정적인 특성과는 반대되는 모습을 보이기도 한다.

동적 리스트는 이와 반대로 요소가 추가되면 추가된 요소가 동적 리스트에 반영되고, 리스트를 통해 접근 또한 가능해진다.

# 요소 삭제

요소를 삭제하는 방법은 두 가지다. 먼저 요소에 접근해 `remove` 메소드를 이용하거나, 부모 요소에 접근해 `removeChild` 메소드를 이용하는 것이다.
전자는 간편하지만 인터넷 익스플로러에서 지원하지 않아, 이 경우를 고려해야 한다면 후자의 방법을 사용하면 된다.

```javascript
const list = document.querySelector("ul");
list.remove();
또는;
list.parentElement.removeChild(list);
```

# Toggle

classList의 toggle 기능을 활용하면 쉽게 모달을 켜고 끌 수 있다.

```javascript
const backDropToggle = () => {
  backDrop.classList.toggle("visible");
};
```

toggle은 해당 CSS 클래스가 존재하면 CSS 클래스를 삭제하고, 존재하지 않으면 추가하는 방식이다. 따라서 만약 display : block 등의 내용을 담고 있는 CSS 클래스 visible이 존재한다면, 위와 같이 활용할 수 있다. classList는 DOM이 가지고 있는 모든 CSS 클래스를 반환한다.

# DOM에 추가하기

게시판 기능을 구현하고자 할 때, 내가 input창에 기입한 정보를 토대로 그것이 리스트의 구성요소가 되어 추가되어야 한다.

DOM 객체를 만들고 추가하는 순서는 다음과 같다(리스트를 추가하는 상황 가정)

1. `createElement`를 통해 DOM 객체를 만든다
2. `className`을 지정해 스타일을 입힌다.(CSS 클래스가 만들어져있다는 가정 하에)
3. `innerHTML`을 통해 아까 만든 DOM객체에 내용을 추가한다.
4. 만든 객체를 `append`를 통해 리스트를 추가한다.

```javascript
const renderNewMovie = (imageUrl, title, rating, id) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class = "movie-element__image">
      <img src ="${imageUrl}" alt=${title}>
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  const listRoot = document.getElementById("movie-list");
  newMovieElement.addEventListener("click", deleteModal.bind(null, id));
  //바로 위 라인 코드는 새로 만든 객체에 이벤트리스너를 달아주는 것이다.
  listRoot.append(newMovieElement);
  console.log(listRoot);
};
```

# 이벤트 리스너의 재생성을 방지하는 방법

만약 반복적으로 실행되는 함수안에 이벤트 리스너를 지정하는 코드가 작성되어있다면, 함수가 실행될 때 마다 이벤트 리스너가 생성되어, 이벤트가 발생하였을 때 생성된 이벤트 리스너만큼 이벤트 리스너에 연결딘 함수가 실행될 것이다. 이러한 상황은 끔찍하기 때문에 피해줘야 한다.

## 호출되는 함수에 bind()를 사용하지 않은 경우

이러한 경우는 간단하게 `removeEventListner`를 이용하면 된다. 주의할 점은 이것을 먼저 호출한 뒤에 이벤트리스너를 등록해야 한다. 왜냐하면 remove가 뒤에 호출되면 앞전에 존재하는 모든 이벤트 리스너가 삭제되기 때문이다. 하나를 남겨놓기 위해 다음과 같이 코드를 작성한다.

```javascript
cancleButton.removeEventListener("click", closeConfirmModal);
cancleButton.addEventListener("click", closeConfirmModal);
```

## 호출되는 함수에 bind()를 사용한 경우

이러한 경우는 복잡해진다. 왜냐하면 removeEventListner가 먹지를 않기 때문이다.

1. DOM에서 객체를 가져오고
2. 그 객체를 복제하여 기존 것을 대체하고
3. 대체된 객체를 다시 선택해 이벤트리스너를 추가한다

```javascript
// 1. DOM에서 객체를 가져옴
let approveButton = cancleButton.nextElementSibling;
// 2. 가져온 객체를 복제하여 가져온 객체를 대체함
// 이 과정은 새로운 객체를 만들어서 대체하는 것이므로 이벤트리스너가 없고,
// 변수 approveButton의 참조도 끊긴다.
approveButton.replaceWith(approveButton.cloneNode(true));
// 3. 따라서 새로 만들어서 대체한 객체를 다시 참조한다.
approveButton = cancleButton.nextElementSibling;
// 4. 이벤트 리스너를 추가한다.
approveButton.addEventListener(
  "click",
  approveMovieDeleteHandler.bind(null, id)
);
```

정말 쉽게 말하면 초기화 한다음에 이벤트 리스너를 추가하는 것이다. 위의 상황이랑 원리는 동일하다는 뜻이다.

# input창의 값을 가져와 객체를 만들고 배열에 저장하는 과정

```javascript
const modalAddButtonHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;
  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    ratingValue < 1
  ) {
    alert("올바르게 입력하시오");
  } else {
    //객체를 만듦
    const movie = {
      id: Math.random().toString(),
      title: titleValue,
      imageUrl: imageUrlValue,
      rating: ratingValue,
    };
    //만든 객체를 배열에 저장함
    movies.push(movie);
    updateBanner();
    closeModal();
    renderNewMovie(imageUrlValue, titleValue, ratingValue, movie.id);
    console.log(movies);
  }
};
```

# 배열 생성 방법

- 기본적인 생성 방식

```javascript
const arr1 = [1, 2, 3];
```

- new를 이용한 생성 방식

```javascript
const arr1 = new Array(1, 2, 3);
```

- new 생략

```javascript
const arr1 = Array(1, 2, 3);
```

- of함수 이용

```javascript
const arr1 = Array.of(1, 2, 3);
```

<br />

만약 인자로 숫자 하나를 제공하면, 숫자 크기의 빈 배열이 생성됨

```javascript
const arr1 = Array(5);
//크기가 5인 빈 배열 생성
```

- 이터러블, 유사 배열 객체를 진짜 배열로 변환

```javascript
const listItems = document.querySelector("li");
const listItemsArray = Array.form(listItems);

const name = Array.form("KIM");
console.log(name);
//['K','I','M']
```

# 자바스크립트의 배열은 관대하다

자바스크립트에서 배열 안 요소가 서로 다른 타입이더라도, 그것을 허용하고 있다. 예를 들어

```javascript
const arr1 = ["DOG", 2, true];
```

위와 같이 작성하여도 오류가 발생하지 않는다.

또한 자바스크립트에서는 중첩 배열을 사용할 수 있다.

```javascript
const arr1 = [
  [212, 31],
  ["dsvds", "dsvs"],
];
for (const insideArr of arr1) {
  for (const data of insideArr) {
    console.log(data);
  }
}
//212 31 dsvds dsvs
```

중첩 배열 사용 중에서도 자바스크립트는 관대하기 때문에, 내부 배열의 데이터 타입이 서로 달라도 문제 없다.

# 배열의 삽입,삭제

배열의 아이템을 삽입하는 방법은 다음과 같다.

- push
  배열 끝 부분에 새로운 아이템 추가

```javascript
const hobbies = ["Sports", "Cooking"];
hobbies.push("Coding");
console.log(hobbies);
//['Sports','Cooking','Coding']
```

- unshift
  배열 앞 부분에 새로운 아이템 추가

```javascript
const hobbies = ["Sports", "Cooking"];
hobbies.unshift("Coding");
console.log(hobbies);
//['Coding','Cooking']
```

- pop
  배열 마지막 요소를 삭제,리턴

```javascript
const hobbies = ["Sports", "Cooking"];
hobbies.pop();
console.log(hobbies);
//['Sports']
```

- shift
  배열 첫 번째 요소를 삭제,리턴

```javascript
const hobbies = ["Sports", "Cooking"];
hobbies.shift();
console.log(hobbies);
//['Cooking']
```

**배열의 할당되지 않은 인덱스에 아이템 저장을 시도한다면?**

```javascript
const hobbies = ["Sports", "Cooking"];
hobbies[5] = "Coding";
console.log(hobbies[5]);
console.log(hobbies[3]);
//'Coding'
//undefined
```

자바스크립트는 관대하기 때문에 할당을 허용하고, 배열을 해당 인덱스만큼 늘리기 때문에, 중간은 비어있게 되는 것이다.

## splice()

기본적으로 배열의 양 끝이 아닌, 아이템 사이에 새로운 아이템을 추가하기 위해 사용되는 메소드이다.

```javascript
const hobbies = ['Sports','Cooking'];
hobbies.splice(1,1,'Soccer'];
console.log(hobbies);
//['Sports','Soccer'];
```

splice의 첫 번째 인자는 기준 인덱스이다. 두 번째 인덱스는 삭제할 아이템의 개수이다. 기준 인덱스에서 시작하여 인자의 크기만큼 아이템을 삭제한다.
세 번째 인자는 추가할 아이템이다. 세 번째 인자부터는 여러 개의 인자를 넣을 수 있으며, 배열의 아이템으로 추가된다.

```javascript
const hobbies = ['Sports','Cooking'];
hobbies.splice(1,1,'Soccer','Golf'];
console.log(hobbies);
//['Sports','Soccer','Golf'];
```

세 번째 인자를 제공하지 않으면, 아이템이 그저 삭제될 뿐이다. 따라서 아이템 삭제를 위해 splice 메소드를 사용하기도 한다.

```javascript
hobbies = ["Socccer", "Drawing", "Coding"];
hobbies.splice(0);
condole.log(hibbues);
//[]
```

splice에 그저 인자로 0을 전달하면, 배열이 초기화 된다.

splice메소드의 인자로 음수 값을 이용할 수 있는데, -1은 배열 맨 뒤의 아이템을, -2는 뒤에서 두 번째의 아이템을 접근할 수 있다. 이는 splice()에서 사용할 수 있는 개념이지 자바스크립트 전체에서 보편적으로 사용할 수 있는 개념은 아니다.

# slice()

slice()는 기본적으로 새로운 배열을 리턴한다. 따라서 만약 배열을 진정한 의미로 복사(배열의 메모리 위치 복사가 아닌 값 복사)를 원한다면 slice()를 이용하면 된다.

```javascript
arr = [1, 2, 3, 4, 5];
arr2 = arr.slice();
arr.pop();
console.log(arr2);
//[1,2,3,4,5]
```

slice의 원래 용도는 이름 그대로 자르기 또는 여러개의 요소 선택이라고 할 수 있다.

- 하나의 인자를 제공할 경우
  배열이 그 인자를 시작으로 마지막 요소까지 포함하여 새로운 배열을 리턴한다

```javascript
arr = [1, 2, 3, 4, 5];
arr2 = arr.slice(2);
console.log(arr2);
//[3,4,5]
```

- 두 개의 인자를 제공할 경우
  배열의 첫번째 인자의 인덱스를 시작으로 두 번째 인자의 인덱스를 포함하지 않고 그 전까지의 요소로 새로운 배열을 리턴한다.

```javascript
arr = [1, 2, 3, 4, 5];
arr2 = arr.slice(1, 3);
console.log(arr2);
//[2,3]
```

음수 인덱스를 인자로 제공할 수 있지만, 만약 그렇다면 두 인자 모두 음수로 제공해야 한다.

# concat()

concat() 은 두 배열을 연결해주는 메소드이다. 인자로 제공한 배열과 기존 배열을 합쳐 새로운 배열을 리턴한다.

```javascript
arr = [1,2,3,4,5];
arr2 = arr.concat([2,3]
console.log(arr2);
//[1,2,3,4,5,2,3]
```

# 요소 찾기 - indexOf(), lastIndexOf()

indexOf() 특정 요소가 배열에 존재하는지, 만약 존재한다면 인덱스는 무엇인지를 알려주는 메소드이다. indexOf는 인덱스0을 시작으로 각각의 요소가 사용자가 제공한 값과 일치하는 지 비교하며, 만약 일치한다면 함수는 그 값의 인덱스를 리턴하며 종료된다. 따라서 동일한 값이 배열에 여러개 존재한다고 하더라도, 모든 값들의 인덱스를 한 번에 알 수 없다. 배열 탐색의 기준을 마지막 요소로 하고 싶다면(즉 맨 처음이 아니라 맨 끝부터 탐색하고 싶으면) lastIndexOf()를 사용하면 된다.
두 메소드 모두 요소를 찾지 못하면 -1을 리턴한다.

```javascript
arr = [1, 2, 3, 2, 5];
console.log(arr.indexOf(2));
//1
console.log(arr.lastIndexOf(2));
//3
```

그런데 만약 배열에 객체가 저장되어있다면, indexOf와 last... 는 사용하지 못한다. 즉 다음과 같이 이용이 불가능하다는 뜻이다.

```javascript
arr = [{ name: "KIM" }, { name: "LEE" }];
console.log(arr.indexOf({ name: "KIM" }));
//-1  -> 어떤 요소도 찾지 못함.
```

# find()

find()는 배열 안에 객체 또한 탐색할 수 있는 함수이며 인자는 콜백함수를 받는다. 콜백함수는 3개의 인자를 받는데, 현재 처리중인 배열의 요소, 현재 처리중인 배열의 index, find()가 호출하는 배열이다.
콜백 함수를 따로 정의해도 좋지만, 익명함수를 이용해 find()에서만 이용하게 하는 것이 효율적이다.

```javascript
arr = [{ name: "KIM" }, { name: "LEE" }];
const lee = arr.find((person, index, persons) => {
  return person.name === "LEE";
});
console.log(lee);
//{name : 'LEE'}
lee.name = "PARK";
console.log(arr);
//[{name : 'KIM'}, {name : 'PARK'}]
```

find()는 발견한 해당 요소를 리턴한다. 주의할 점은 이 요소는 새로운 요소가 아니다. 즉 기존의 메모리 주소를 그대로 가지고 있다. 따라서 이 요소를 수정하면, 기존의 배열또한 수정된다.

`findIndex` 를 사용하면 요소 그 자체가 아닌 요소의 인덱스를 알 수 있다.

# includes()

includes는 배열 안에 원소가 존재하는 지 확인하는 메소드이다. indexOf와 동일한 기능을 수행하지만, 그와 다르게 인덱스를 리턴하지 않고 단순히 존재 여부만을 리턴한다. 따라서 리턴값도 `true` 와 `false` 밖에 없다. 당연하게도 존재하면 true, 존재하지 않으면 false를 리턴한다.

# forEach()

forEach는 배열의 모든 원소를 순회하여 접근하기 용이한 메소드이다.

```javascript
arr = [1, 2, 3, 4, 5];
arr.forEach((price) => {
  console.log(price * 100);
});
//100
//200
//300
//400
//500
```

find와 마찬가지로 콜백함수를 인수로 받으며, 콜백함수는 현재 접근하고 있는 원소와 그 원소의 인덱스, 그리고 전체 배열을 인자로 받는다.

# map()

map은 forEach()와 거의 동일하지만, 새로운 배열을 리턴한다.

```javascript
arr = [1, 2, 3, 4, 5];
const arr2 = arr.map((price) => {
  return price * 100;
});

console.log(arr2);
//[100,200,300,400,500]
```

# sort()

sort()는 배열을 정렬하기 위해 사용한다. 인자에 아무값도 전달하지 않으면 숫자 혹은 문자의 오름차순으로 정렬된다. 그러나 다음과 같은 경우에는 문제가 생긴다.

```javascript
arr = [10, 4, 3, 2, 5];
console.log(arr.sort());
//[10,2,3,4,5]
```

sort()는 배열의 원소를 정렬할 때 원소가 숫자라 할 지라도 문자열로 판단하여 배열을 정렬한다. 그리고 문자열을 비교할 때에는 문자열의 첫 글자끼리 비교한다. 따라서 10은 2보다 크지만 10의 첫 문자인 1과 2를 비교하게 되어서 10이 2보다 작다고 결과가 산출된다. 이러한 현상을 막기 위해서 자체적인 콜백함수를 이용해야 한다.
콜백함수는 두 개의 인자를 받으며 이 인자들 끼리 비교하게 된다.
콜백함수의 리턴값이 양수일 경우 비교하는 두 원소(a,b)중 b를 a보다 낮은 인덱스로 조정한다. 음수면 a를 b보다 낮은 인덱스로 조정하며, 0이면 그대로 둔다.
따라서 다음과 같이 이용한다.

```javascript
arr = [10, 4, 3, 2, 5];
console.log(
  arr.sort((a, b) => {
    if (a === b) {
      return 0;
    } else if (a > b) {
      return 1;
    } else {
      return -1;
    }
  })
);
//[2,3,4,5,10]
```

# filter()

filter는 배열을 특정 조건으로 필터링하기 위해 사용된다. filter는 새로운 배열을 리턴한다.

```javascript
arr = [10, 4, 3, 2, 5];
console.log(
  arr.filter((obj) => {
    return obj > 3;
  })
);
//[4,5,10]
console.log(arr);
//[10,4,3,2,5]
```

# 화살표 함수로 간편하게 콜백함수를 작성하자

filter함수의 예시에서 그리고 다른 수 많은 배열함수들의 콜백함수는 3가지의 인자를 갖지만 보통 첫 번째 인자만을 이용하는 경우가 대다수이다 따라서 콜백함수를 화살표 함수로 다음과 같이 간단하게 표현할 수 있다.

```javascript
arr = [10, 4, 3, 2, 5];
console.log(arr.filter((obj) => obj > 3));
//[4,5,10]
console.log(arr);
//[10,4,3,2,5]
```

# reduce()

reduce()는 배열의 원소를 순회하며 콜백함수의 실행값을 누적해 하나의 값을 반환한다. 기존 배열은 수정되진 않는다. 예시를 통해 알아보자

```javascript
arr = [10, 4, 3, 2, 5];
console.log(
  arr.reduce((pre, cur, preInx, curInx) => {
    return pre + cur;
  }, 0)
);
```

콜백함수는 4가지의 인자를 받으며, 이전 실행값, 현재 요소 값, 그리고 인덱스들이다.
최초의 콜백함수의 실행에는 이전값이 존재하지 않기 때문에 reduce의 두 번째 인자로 콜백함수의 최초 실행의 이전값을 전달할 수 있다. 나는 0으로 전달한 것이다. 내가 정의한 콜백함수를 통해 나는 모든 원소들의 합을 구할 수 있었다.

# 메소드 체인 - map과 reduce를 연속으로 사용하기

```javascript
const originalArray = [{ price: 10.99 }, { price: 5.99 }, { price: 29.99 }];
const sum = originalArray
  .map((obj) => obj.price)
  .reduce((sumVal, curVal) => sumVal + curVal, 0);
//46.97
```

위와 같이 먼저 map 함수가 실행된 뒤 반환된 배열을 reduce함수로 실행하여 처리할 수 있다.

# join과 split

`split` 은 문자열을 배열로 만들어주는 메소드이다. 정확히는 말 그대로 문자열을 특정 기준으로 쪼개어서 배열에 저장해준다.

```javascript
const a = "kim;min;ju";
console.log(a.split(";"));
//[kim,min,ju]
```

split에는 반드시 하나 이상의 인자를 전달해야 하는데, 첫 번째 인자는 쪼개기 기준이고, 두 번째 인자는 새로 생성되는 배열의 원소 최대 개수이다.

`join`은 split의 역과정으로 배열을 하나의 문자열로 만들어준다.

```javascript
const a = "kim;min;ju";
const b = a.split(";");
const c = b.join(" ");
console.log(c);
```

join은 반드시 인자를 전달하지 않아도 되지만 그렇게 하면 문자열로 접합할 때 이어지는 부분을 ','로 처리한다. 따라서 인자를 통해 연결부위를 정해주는 것이 좋다. 나는 " "로 한 것이다.

# 스프레드 연산자

`...`을 통해 사용하는 스프레드 연산자는 배열의 전체 원소를 배열이 아닌 형태로 반환한다. 따라서 배열을 복사할 때 유용하게 사용할 수 있다.

```javascript
const num = [1, 2, 3, 4];
const num2 = [...num, 5, 6];
console.log(num2);
//[1,2,3,4,5,6]
```

또한 스프레드 연산자를 다음과 같이 이용할 수 있다.

```javascript
const num = [1, 2, 3, 4];
console.log(Math.min(...num));
//1
```

배열 복사 시에 스프레드 연산자를 이용할 때 주의할 점은 배열의 원소가 객체일 때이다. 객체는 참조값으로 값이 아닌 값의 주소가 복사되기 때문에 진정한 의미의 복사가 되지 않는다. 따라서 원소가 객체인 배열을 완전한 형태로 복사하기 위해서는 map함수를 이용해야 한다.

```javascript
const persons = [{ name: "KIM" }, { name: "MIN" }];
const coppiedPersons = persons.map((person) => ({
  name: person.name,
}));
```

# 구조 분해 할당과 레스트 연산자

배열의 각 원소를 개별 변수에 쉽게 저장해준다.

```javascript
const num = [1, 2, 3, 4, 5];
const [fn, sn, ...restN] = num;
console.log(fn, sn, restN);
//1 2 [3, 4, 5]
```

배열의 첫 번째 원소를 첫 번재 변수에 저장하고, 이후 같은 방식으로 진행된다. 여기서 사용되는 `...`은 스프레드 연산자가 아닌 레스트 연산자로 불리며, 구조 분해 할당에서 남은 나머지 값들을 배열로 저장한다.

# 배열 이외의 이터러블

## Set

Sets는 배열과 비슷하게 이터러블 자료구조 중 하나이며, 중복을 허용하지 않고 인덱스로 접근하지 않는다.
Set은 다음과 같이 생성한다.

```javascript
const a = new Set();
const b = new Set([1, 2, 3]);
```

생성자의 인자로 아무것도 전달하지 않으면 빈 Set이 생성되고, 다른 이터러블 객체를 전달하면 이터러블 객체의 값이 Set의 원소가 된다.
`add` 나 `delete` 를 통해 원소를 삽입 삭제 할 수 있으며 `has` 를 통해 원소가 존재하는 지 확인한다.

```javascript
const b = new Set([1, 2, 3]);
b.add(4);
b.delete(1);
console.log(b.has(1));
//false
```

`values`와 for문을 이용하면 모든 원소를 순회할 수 있다. 왜냐하면 values가 setIterator라는 이터러블 객체를 반환하기 때문이다.

```javascript
const b = new Set([1, 2, 3]);
for (const number of b.values()) {
  console.log(number);
}
//1
//2
//3
console.log(b.values());
//SetIterator {1, 2, 3}
```

## Map

map은 키-값 형태로 데이터를 저장하는 이터러블 자료구조이다.
set과 동일하게 생성자 함수를 이용한다.

```javascript
const b = new Map();
const a = new Map([
  [1, "a"],
  [2, "b"],
]);
a.set(3, "c");
console.log(a);
//Map(3) {1 => 'a', 2 => 'b', 3 => 'c'}
```

생성자에 인자를 전달하지 않으면 빈 Set이 생성되고 인자를 전달하면 초기화 할 수 있다. 먼저 가장 외부 배열이 필수적으로 들어가야 하며, 그 안에 여러 배열들을 넣는다. 각 배열 안은 키 - 벨류 쌍으로 구분된다.

다양한 Map 메소드가 존재한다

- set
- get
  키로 값 찾기
- delete
- clear

size는 프로퍼티이며, 원소 개수를 저장한다.

entries 이용하면 for문을 이용할 수 있다.

```javascript
const a = new Map([
  [1, "a"],
  [2, "b"],
  [3, "c"],
]);
for (const [key, value] of a.entries()) {
  console.log(key, value);
}
//1 'a'
//2 'b'
//3 'c'
```

구조 분해 할당 시 key만 저장할 수도 있다.
