let sendNumber = () => {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
  document.getElementById('randomNumber').innerText = token;
  document.getElementById('randomNumber').style.color = '#' + token;

  let time = 180;
  setInterval(function () {
    if (time >= 0) {
      const min = Math.floor(time / 60);
      const sec = String(time % 60).padStart(2, '0');
      document.getElementById('timer').innerText = min + ':' + sec;
      time = time - 1;
    } else {
      document.getElementById('finish').disabled = true; // 0:00이 되면 인증완료 버튼을 비활성화 시키는 것
    }
  }, 1000);
};

// 인증번호 전송 눌렀을 때, randomNumber에 적용되는 sendNumber()가 있으니, 안에 코드를 추가해주면 된다.

// let time = 180;
// let timer = () => {
//   setInterval(function () {
//     if (time >= 0) {
//       const min = Math.floor(time / 60);
//       let sec = String(time % 60).padStart(2, '0');
//       document.getElementById('timer').innerText = min + ':' + sec;
//       time = time - 1;
//     }
//   }, 1000);
// };
