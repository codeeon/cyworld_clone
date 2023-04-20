// 반복문 for

const children = ['철수', '영희', '훈이']; // 배열 생성
// undefined
for (let i = 0; i < 3; i++) {
  // for(변수 지정; 범위(조건); 증감식(++ === + 1 )) {}
  console.log(children[i] + '입니다');
}
// index.44669fcd.js:28 철수입니다
// index.44669fcd.js:28 영희입니다
// index.44669fcd.js:28 훈이입니다
// undefined
for (let i = 0; i < 4; i++) {
  // 범위가 넘어서 값을 못 찾으면 출력되는 undefined
  console.log(children[i] + '입니다');
}
// index.44669fcd.js:28 철수입니다
// index.44669fcd.js:28 영희입니다
// index.44669fcd.js:28 훈이입니다
// index.44669fcd.js:28 undefined입니다
// undefined
for (let i = 0; i < children.length; i++) {
  // 범위를 해당 배열 전체로 둘 때, 배열을 수정하거나 하여도 사용 가능한 식
  console.log(children[i] + '입니다');
}
// index.44669fcd.js:28 철수입니다
// index.44669fcd.js:28 영희입니다
// index.44669fcd.js:28 훈이입니다
// undefined

//
// for 반복문, 객체 사용법

let people = [
  // 객체 지정
  { name: '철수', age: 17 },
  { name: '영희', age: 22 },
  { name: '도우너', age: 5 },
  { name: '그루트', age: 65 },
  { name: '토비', age: 3 },
];
// undefined
for (let cnt = 0; cnt < people.length; cnt++) {
  // 반복문으로, 객체를 대상으로 성인 미성년자 구별
  if (people[cnt].age >= 19) {
    console.log('성인입니다');
  } else {
    console.log('미성년자입니다');
  }
}
// index.44669fcd.js:28 미성년자입니다
// index.44669fcd.js:28 성인입니다
// index.44669fcd.js:28 미성년자입니다
// index.44669fcd.js:28 성인입니다
// index.44669fcd.js:28 미성년자입니다
// undefined
for (let cnt = 0; cnt < people.length; cnt++) {
  // 반복문으로, 객체의 키 값 활용 + 객체 대상 성인 미성년자 구별
  if (people[cnt].age >= 19) {
    console.log(people[cnt].name + '님은 성인입니다');
  } else {
    console.log(people[cnt].name + '님은 미성년자입니다');
  }
}
// index.44669fcd.js:28 철수님은 미성년자입니다
// index.44669fcd.js:28 영희님은 성인입니다
// index.44669fcd.js:28 도우너님은 미성년자입니다
// index.44669fcd.js:28 그루트님은 성인입니다
// index.44669fcd.js:28 토비님은 미성년자입니다
// undefined
