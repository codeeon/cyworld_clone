let isStarted = false;

let sendNumber = () => {
  if (isStarted === false) {
    //타이머가 작동 중이 아닐 때
    isStarted = true;
    document.getElementById('finish').disabled = false;

    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    document.getElementById('randomNumber').innerText = token;
    document.getElementById('randomNumber').style.color = '#' + token;

    let time = 7;
    let timer;

    timer = setInterval(function () {
      if (time >= 0) {
        const min = Math.floor(time / 60);
        const sec = String(time % 60).padStart(2, '0');
        document.getElementById('timer').innerText = min + ':' + sec;
        time = time - 1;
      } else {
        document.getElementById('finish').disabled = true; // 0:00이 되면 인증완료 버튼을 비활성화 시키는 것
        isStarted = false;
        console.log('타이머 작동 중'); // 타이머 작동 이, isStarted = false와 같이, 1000ms 마다 하나씩 계속 찍히는 걸 확인 가능.
        clearInterval(timer); // 인터벌 기능을 종료하는 것. 타이머 작동 중이 한 번만 딱 찍힘.
      }
    }, 1000);
  } else {
    //타이머가 작동 중일 때
  }
};
