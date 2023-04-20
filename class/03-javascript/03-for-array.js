// for 반복문 활용법

const fruits = [
  // 객체 배열 생성
  { number: 1, title: '레드향' },
  { number: 2, title: '샤인머스켓' },
  { number: 3, title: '산청딸기' },
  { number: 4, title: '한라봉' },
  { number: 5, title: '사과' },
  { number: 6, title: '애플망고' },
  { number: 7, title: '딸기' },
  { number: 8, title: '천혜향' },
  { number: 9, title: '과일선물세트' },
  { number: 10, title: '귤' },
];
//   undefined
for (let cnt = 0; cnt < fruits.length; cnt++) {
  console.log(fruits[cnt].number + ' ' + fruits[cnt].title);
} // number와 title을 붙여서 표기해주는 반복문
//   index.d98c13ae.js:28 1 레드향
//   index.d98c13ae.js:28 2 샤인머스켓
//   index.d98c13ae.js:28 3 산청딸기
//   index.d98c13ae.js:28 4 한라봉
//   index.d98c13ae.js:28 5 사과
//   index.d98c13ae.js:28 6 애플망고
//   index.d98c13ae.js:28 7 딸기
//   index.d98c13ae.js:28 8 천혜향
//   index.d98c13ae.js:28 9 과일선물세트
//   index.d98c13ae.js:28 10 귤
//   undefined
for (let cnt = 0; cnt < fruits.length; cnt++) {
  console.log(`${fruits[cnt].number} ${fruits[cnt].title}`);
} // 백팁을 이용하여 표기__변수와 문자열을 섞어서 쓸 때 이용하기 좋음. 변수는 반드시 ${}로 표기, 그외는 문자열로 간주
// index.d98c13ae.js:28 1 레드향
// index.d98c13ae.js:28 2 샤인머스켓
// index.d98c13ae.js:28 3 산청딸기
// index.d98c13ae.js:28 4 한라봉
// index.d98c13ae.js:28 5 사과
// index.d98c13ae.js:28 6 애플망고
// index.d98c13ae.js:28 7 딸기
// index.d98c13ae.js:28 8 천혜향
// index.d98c13ae.js:28 9 과일선물세트
// index.d98c13ae.js:28 10 귤
// undefined
for (let cnt = 0; cnt < fruits.length; cnt++) {
  console.log(`과일 차트 ${fruits[cnt].number}위는 ${fruits[cnt].title}입니다`);
} // 백팁으로 변수와 문자열이 혼재된 식을 활용하는 방법. 그 예시.
// index.d98c13ae.js:28 과일 차트 1위는 레드향입니다
// index.d98c13ae.js:28 과일 차트 2위는 샤인머스켓입니다
// index.d98c13ae.js:28 과일 차트 3위는 산청딸기입니다
// index.d98c13ae.js:28 과일 차트 4위는 한라봉입니다
// index.d98c13ae.js:28 과일 차트 5위는 사과입니다
// index.d98c13ae.js:28 과일 차트 6위는 애플망고입니다
// index.d98c13ae.js:28 과일 차트 7위는 딸기입니다
// index.d98c13ae.js:28 과일 차트 8위는 천혜향입니다
// index.d98c13ae.js:28 과일 차트 9위는 과일선물세트입니다
// index.d98c13ae.js:28 과일 차트 10위는 귤입니다
// undefined
