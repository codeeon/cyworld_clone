// JS의 수학 객체( Math.abcdef() )

Math.floor(Math.random() * 1000000); // 100만 아래의 랜덤숫자 생성. 버림( Math.floor() )을 통한 정수화. 숫자열. Math.random()은 가챠, 인증번호 등의 수단으로 활용 가능.
// 896396
String(Math.floor(Math.random() * 1000000)); // String()을 통해 위의 랜덤 숫자를 숫자열이 아닌 문자열숫자로 사용.
// '299443'
String(Math.floor(Math.random() * 1000000));
// '240526'
String(Math.floor(Math.random() * 1000000));
// '405869'
String(Math.floor(Math.random() * 1000000));
// '41826'   // 6자리 아래의 경우, 맨앞의 숫자가 0일 경우 표기되지 않음.
String(Math.floor(Math.random() * 1000000));
// '763151'
String(Math.floor(Math.random() * 1000000)).padStart(6, '0'); // .padStart(A, B)를 통해 활용 가능한데, A자리가 아닐 때, 앞 부분에 B를 채워달라는 뜻이다. 여기서 도출한 것은 문자열(문자열숫자)이기 때문에 B가 문자열이어야 하니 숫자에도 따옴표(문자열숫자)를 사용한다.
// '949063'
String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
// '681955'
String(Math.floor(Math.random() * 1000000)).padStart(6, '0'); // 6자리가 아닐 때(6자리가 될 때까지?) '0'을 앞에 붙이는 목적 달성.
// '032400'
let result = String(Math.floor(Math.random() * 1000000)).padStart(6, '0'); // 이 식도 변수로 지정하여 사용.
// undefined
result;
// '028407'
result;
// '028407'
result; // 하지만 그 결과 값이 변하지는 않음
// '028407'
