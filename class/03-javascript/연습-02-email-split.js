const email = 'codecamp@gmail.com';
// undefined
email.includes('@'); // "@"가 있는지 유무를 확인한다. (이메일인지 아닌지 판단하는 과정)
// true
email.split('@'); // "@"를 기준으로 나눈다.(나누는 녀석은 삭제된다)
// (2) ['codecamp', 'gmail.com']
email.split('@')[0]; // 나누었을 때 인덱스 0번
// 'codecamp'
email.split('@')[1]; // 위와 동일, 1번
// 'gmail.com'
let userMail = email.split('@')[0];
// undefined
userMail;
// 'codecamp'
let company = email.split('@')[1];
// undefined
company;
// 'gmail.com'
let maskingMail = []; // 새 배열 생성
// undefined
maskingMail.push(userMail[0]); // 문자열 배열에서 하나씩 꺼낸다
// 1
maskingMail.push(userMail[1]);
// 2
maskingMail.push(userMail[2]);
// 3
maskingMail.push(userMail[3]);
// 4
//maskingMail.push(*); // (넘버나 변수가 아닌)문자열의 경우 반드시 따움표 또는 큰따옴표를 쓰도록...
// VM2979:1 Uncaught SyntaxError: Unexpected token '*'
maskingMail.push('*');
// 5
maskingMail.push('*');
// 6
maskingMail.push('*');
// 7
maskingMail.push('*');
// 8
maskingMail; // 하나씩 넣어서 이렇게 나뉘어졌다.
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingMail.join('-'); // 배열이 가진 값을 하나로 이어 붙여 만들어주며, 그 값들 사이에 추가하고 싶은 것이 있을 경우 추가 가능.
// 'c-o-d-e-*-*-*-*'
maskingMail.join('/');
// 'c/o/d/e/*/*/*/*'
maskingMail.join(''); // 그냥 하나로 만들기만 하려고, 빈 칸 씀(공백인데 따옴표 써야 함. 안 쓰면 반점이 디폴트값으로 들어감)
// 'code****'
maskingMail.join('');
+'@' + company; // 중간에 세미콜론을 넣어서 NaN이 됨 @도 NaN에 한 몫 한 듯...
// 'NaNgmail.com'
maskingMail.join('') + '@' + company;
// 'code****@gmail.com'
let result = maskingMail.join('') + '@' + company; // 앞전에 했던 것과 마찬가지로 result를 이용해서 만든 식을 사용한다.
// undefined
result;
// 'code****@gmail.com'
