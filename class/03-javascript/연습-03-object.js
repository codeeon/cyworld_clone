let friend = {
  //콘솔에서의 줄바꿈 = shift + enter
  name: '철수',
  age: 13,
  camp: '코드캠프',
}; //프렌드라는 객체(object)의 키(key)와 값(value)을 입력해줌. 키는 필수, 값은 비워도 됨. 키는 그냥, 값은 string일 경우 따옴표 사용.
// undefined
friend;
// {name: '철수', age: 13, camp: '코드캠프'}
friend.name; // dot notation 점으로 해당 키의 값을 추출
// '철수'
friend['name']; // bracket notation, 닷 노태이션을 주로 씀
// '철수'
friend.age;
// 13
friend.camp;
// '코드캠프'
friend.drink; // 없는 것 -> undefined
// undefined
