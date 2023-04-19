let classmates = [
  { name: '철수', age: 13, school: '다람쥐초등학교' },
  { name: '영희', age: 8, school: '공룡초등학교' },
  { name: '훈이', age: 11, school: '거북이초등학교' },
];
// undefined
classmates;
// (3) [{…}, {…}, {…}]   // 아래는 콘솔 기준, 왼쪽 역삼각 토글을 눌렀을 때 나오는 항목.
// 0: {name: '철수', age: 13, school: '다람쥐초등학교'}1: {name: '영희', age: 8, school: '공룡초등학교'}2: {name: '훈이', age: 11, school: '거북이초등학교'}length: 3lastIndex: (...)lastItem: (...)[[Prototype]]: Array(0)
classmates.length;
// 3
classmates[0].school; // classmates의 인덱스 0번, 철수의 학교(키)의 값
// '다람쥐초등학교'
classmates[2].age; // classmates의 인덱스 2번, 훈이의 나이(키)의 값
// 11

// 배열은 데이터 타입 '객체'에 속하는 것이다. null은 값이 없는 것이며 컴퓨터가 리턴하는 경우는 거의 없고 의도한 빈 칸이라고 볼 수 있다. undefined는 정의되지 않은 것이며 의도치 않았는데 값이 나오지 않을 때 리턴될 수 있다.
