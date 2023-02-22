# JavaScriptPerfectGuide
유데미의 `자바스크립트 완벽 가이드` 강의에서 작성한 소스코드와 배운 내용을 정리한 레포지토리 <br/>
해당 강의 정리 내용은 README 파일과 벨로그에 정리해놓았습니다. <br/>
벨로그 바로 가기 : https://velog.io/@heeyoon1302/series/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%99%84%EB%B2%BD-%EA%B0%80%EC%9D%B4%EB%93%9C

# js의 데이터 타입
- numbers
- String
- Booleans
- Objects -> { name : 'Max', age : 31} 객체 내부에 key - value 쌍 존재 
  -  => 데이터를 그룹화 하고 연관 지음
- Arrays -> `[]`
  - Array.push -> 배열 끝에 값 추가
  - `Array[i]` 배열 값 접근
  - 배열은 모든 종류의 데이터의 목록이다.
객체란 키-값 쌍으로 구조화된 그룹화된 데이터이다.

# null, undefined, NaN
- null - 비었음을 의미하는 "값" -> 데이터 타입은 객체이다.
- Undefined - 변수가 초기화 되지 않음을 나타냄(데이터 타입)
- NaN - 숫자가 아니다를 의미하는 값 -> 데이터 타입은 number이다
- typeof -> 리터럴의 타입을 알려줌


# 스크립트 import 방식
우리는 스크립트를 HTML에서 body태그 안쪽 하단에 script태그로 임포트를 한다. 그러나 이렇게 하면 최적의 상태는 아니다.

크롬의 개발자 독 - 퍼포먼스 탭 =>  페이지를 로드할 때 브라우저의 동작을 자세히 알 수 있음, 스크립트가 어떻게 로드-분석-실행 되는지 알 수 있음

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

