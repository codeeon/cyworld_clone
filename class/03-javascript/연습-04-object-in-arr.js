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
