// 데이터 타입, 연산자 실습

1 + 1; // 숫자열 + 숫자열 === 숫자열의 합산   숫자열
// 2
1 + '만원'; // 숫자열 + 문자열 === 문자열숫자와 문자열로 나열 표기   문자열
// '1만원'
1 + '1'; // 숫자열 + 문자열숫자 === 문자열숫자 문자열숫자로 나열 표기(합산이 안 됨)   문자열
// '11'
1 - '1'; // 숫자열 - 문자열숫자 === 숫자열 (*, /도 마찬가지)   숫자열
// 0
'코드' + '캠프'; // 문자열 + 문자열 === 문자열의 나열 표기
// '코드캠프'
'123' == 123; // 문자열숫자 == 숫자열 === 참, 느슨한 동치 연산자에 의해 보이는 값이 같으면 참. 사용하지 않는 것을 추천함.
// true
'123' === 123; // 문자열숫자 === 숫자열 === 거짓, 엄격한 동치 연산자에 의해 양쪽 값이 완전 일치하지 않으면 거짓(완전 일치 === 참). 문자열숫자와 숫자열은 완전히 다른 값이다.
// false
true && true; // A and B의 개념, A와 B가 둘 다 참이어야 참으로 나옴. 1/4만 참.
// true
true && false; // 하나만 거짓이어도 거짓. '둘 다 거짓이어도 거짓', 3/4가 거짓.
// false
false || true; // A or B의 개념, A 또는 B가 하나라도 참이면 참. 3/4이 참.(둘 다 거짓이어야 거짓. 1/4 거짓.)
// true
!false; // not A의 개념, A가 아니다(거짓이 아니다)라는 개념으로. 반대의 개념을 가지게 됨. 거짓이 아니기 때문에 참. 참이 오게 되면 거짓이 됨. 거짓과 참, 둘을 뒤집는 반전 요소.
// true

// 조건문 실습 1

if (1 + 1 === 2) {
  console.log('정답입니다');
} else {
  console.log('틀렸습니다');
}
// index.44669fcd.js:28 정답입니다
// undefined
if (true) {
  console.log('정답입니다');
} else {
  console.log('틀렸습니다');
}
// index.44669fcd.js:28 정답입니다
// undefined
if (!true) {
  console.log('정답입니다');
} else {
  console.log('틀렸습니다');
}
// index.44669fcd.js:28 틀렸습니다
// undefined
if (0) {
  // 0, -0, null, NaN, undefined 등 false와 같이 취급되는 것들이 있다. 이외에는 아무거나 넣어도 true가 된다. 다만, "문자열" 또는 숫자열 등의 앞에 !를 붙이면 false가 나온다. 이때 문자열은 반드시 따옴표 밖에 !를 써야 한다.
  console.log('정답입니다');
} else {
  console.log('틀렸습니다');
}
// index.44669fcd.js:28 틀렸습니다
// undefined
if (1) {
  console.log('정답입니다');
} else {
  console.log('틀렸습니다');
}
// index.44669fcd.js:28 정답입니다
// undefined

// 조건문 실습 2

const profile = {
  // 등호 하나는 대입한다는 뜻이다.
  name: '철수',
  age: 12,
  school: '다람쥐초등학교',
};
// undefined
if (profile.age >= 20) {
  // 예제의 내용을 그대로 코드로 입력한 것.
  console.log('성인입니다');
} else if (profile.age >= 8 && profile.age <= 19) {
  console.log('학생입니다');
} else if (profile.age <= 7) {
  console.log('어린이입니다');
}
// index.44669fcd.js:28 학생입니다
// undefined
profile;
// {name: '철수', age: 12, school: '다람쥐초등학교'}
if (profile.age >= 20) {
  console.log('성인입니다');
} else if (profile.age >= 8) {
  // 리팩토링. 20세 이상이 전부 날아가서 19부터 시작이라 굳이 쓸 필요 없다. 이렇게 코딩하는 습관을 들여야 한다. 효율적이고 경제적으로.
  console.log('학생입니다');
} else if (profile.age > 0) {
  // 에러 핸들링(예외 처리). 0 또는 음수 입력을 방지하기 위해 조건을 삽입한다. 나이가 아니라 단순 숫자 범위라면 여기서 조건문을 안 붙이는 게 가장 효율적(경제적)이다.
  console.log('어린이입니다');
} else {
  // 에러 핸들링(예외 처리). 을 위한 알림을 추가하였다. 이렇게 오류를 사전에 방지하는 코드를 작성하는 게 좋다.
  console.log('잘못 입력하셨습니다');
}
// index.44669fcd.js:28 학생입니다
// undefined
