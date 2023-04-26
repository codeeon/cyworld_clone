setTimeout(function () {
  // setTimeout(function, ms 단위의 시간)은 function의 실행을 ms만큼 지연시키는 함수
  console.log('펑');
}, 3000);
// 10978
// index.a5bc2b7a.js:28 펑 // 3000ms 뒤에 나타난 "펑"

setTimeout(function () {
  console.log('펑');
}, 3000);
// 13095
// index.a5bc2b7a.js:28 펑

setInterval(function () {
  // setInterval(function, ms 단위의 시간)은 function의 실행을 ms마다 반복 실행하는 함수. 새로고침 하거나 PC를 종료하기 전까지 계속 반복 실행된다.
  console.log('펑');
}, 1000);
// 14159
// 52index.a5bc2b7a.js:28 펑 // 1000ms마다 "펑"이 반복하여 52번 찍혔다

var time = 10;
// undefined

setInterval(function () {
  // 카운트다운 생성
  console.log(time);
  time = time - 1;
}, 1000); // 이렇게 만들면, 음수 이후로도 계속 -1이 적용된다. 또한 위의 "펑"의 반복과 마찬가지로, 새로고침 하거나 PC를 종료하기 전까지 계속 반복 실행된다.
// 26964
// index.a5bc2b7a.js:28 10
// index.a5bc2b7a.js:28 9
// index.a5bc2b7a.js:28 8
// index.a5bc2b7a.js:28 7
// index.a5bc2b7a.js:28 6
// index.a5bc2b7a.js:28 5
// index.a5bc2b7a.js:28 4
// index.a5bc2b7a.js:28 3
// index.a5bc2b7a.js:28 2
// index.a5bc2b7a.js:28 1
// index.a5bc2b7a.js:28 0
// index.a5bc2b7a.js:28 -1
// index.a5bc2b7a.js:28 -2
// index.a5bc2b7a.js:28 -3

setInterval(function () {
  if (time >= 0) {
    console.log(time);
    time = time - 1;
  }
}, 1000); // 0까지 실행된다. 다만 실행이 중단된 것은 아니므로, let time = 10으로 기입하면, 다시 카운트가 다운된다(콘솔 기준이며, 위의 조건과 겹친다면 1초에 time값이 0이 될 때까지 -2씩 적용된다.)
// 19517
// index.a5bc2b7a.js:28 10
// index.a5bc2b7a.js:28 9
// index.a5bc2b7a.js:28 8
// index.a5bc2b7a.js:28 7
// index.a5bc2b7a.js:28 6
// index.a5bc2b7a.js:28 5
// index.a5bc2b7a.js:28 4
// index.a5bc2b7a.js:28 3
// index.a5bc2b7a.js:28 2
// index.a5bc2b7a.js:28 1
// index.a5bc2b7a.js:28 0

// 3분 타이머 만들기. min:sec
var time = 180;
// undefined

setInterval(function () {
  if (time >= 0) {
    // 0:00이 마지막이 되게끔
    const min = Math.floor(time / 60); // 나머지를 버림 하는 Math.floor() 사용
    let sec = String(time % 60).padStart(2, '0'); // String().padStart(number, "string")을 통해 나머지 값이 한 자리일 때, 앞에 0이 오게끔 설정
    console.log(min + ':' + sec); // 콜론은 반드시 문자열로 표기하여 추가
    time = time - 1;
  }
}, 1000);
// 9505
// index.a5bc2b7a.js:28 3:00
// index.a5bc2b7a.js:28 2:59
// index.a5bc2b7a.js:28 2:58
// index.a5bc2b7a.js:28 2:57
// index.a5bc2b7a.js:28 2:56
// index.a5bc2b7a.js:28 2:55
// index.a5bc2b7a.js:28 2:54
// index.a5bc2b7a.js:28 2:53
// index.a5bc2b7a.js:28 2:52
// index.a5bc2b7a.js:28 2:51
