let classmates = ['철수', '영희', '훈이'];
// undefined
classmates;
// (3) ['철수', '영희', '훈이']
classmates[0]; // 인덱스는 0부터, 길이는 1부터
// '철수'
classmates[1];
// '영희'
classmates[2];
// '훈이'
classmates.includes('훈이'); // A.includes("B");는 A배열에 B가 있나? 확인하는 불리언.
// true
classmates.includes('맹구');
// false
classmates.length;
// 3
classmates.push('맹구');
// 4
classmates.includes('맹구');
// true
classmates;
// (4) ['철수', '영희', '훈이', '맹구']
classmates.length;
// 4
classmates.pop(); // A.pop();은 A배열 가장 뒤의 요소?를 제거(방출)하는 것.
// '맹구'
classmates.length;
// 3
classmates;
// (3) ['철수', '영희', '훈이']

let developer = [
  '워라밸',
  '연봉수준',
  '커리어점프',
  '신분상승',
  '개쩌는 개발자의 명성',
];
// undefined
developer[2];
// '커리어점프'
let dream = ['커리어점프', '성공', '할수있다'];
// undefined
developer;
// (5) ['워라밸', '연봉수준', '커리어점프', '신분상승', '개쩌는 개발자의 명성']
dream;
// (3) ['커리어점프', '성공', '할수있다']
developer.concat(dream); // A.concat(B)은 A배열에 B배열을 이어 붙여 더하는 식이다.
// (8) ['워라밸', '연봉수준', '커리어점프', '신분상승', '개쩌는 개발자의 명성', '커리어점프', '성공', '할수있다']
let result = developer.concat(dream); // result 변수에 developer와 dream을 합친 배열을 할당한 것. 플러스이기 때문에 혹시 나중에 developer 또는 dream이 수정이 될 경우 같이 적용됨.
// undefined
result;
// (8) ['워라밸', '연봉수준', '커리어점프', '신분상승', '개쩌는 개발자의 명성', '커리어점프', '성공', '할수있다']
