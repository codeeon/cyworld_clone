//폰번호 커서 자동 이동
const changeFocus1 = () => {
  let phone1 = document.getElementById('phone1').value;
  if (phone1.length === 3) {
    document.getElementById('phone2').focus(); // 포커스를 이동하는 기능. 대상은 옮겨 갈 곳으로 지정한다.
  }
};

const changeFocus2 = () => {
  let phone2 = document.getElementById('phone2').value;
  if (phone2.length === 4) {
    document.getElementById('phone3').focus();
  }
};

//버튼 비활성화/활성화
const checkValidation = () => {
  let email = document.getElementById('email').value;
  let named = document.getElementById('name').value;
  let pw1 = document.getElementById('pw1').value;
  let pw2 = document.getElementById('pw2').value;

  // input에 0을 넣어도 아래 조건에서 false가 나오지 않는 이유는 0이 string이기 때문이다. text라서 그렇기도 하지만, input에 들어간 것은 value값으로 취급되어 string이 된다. 원래는 if(email !== "" && pw1 !== "" && pw2 !== "")이 들어가는 게 기본이다.
  if (email && named && pw1 && pw2) {
    //모든 input이 비어 있지 않을 때
    document.getElementById('send').disabled = false;
    document.getElementById('check').disabled = false;
    document.getElementById('submit').disabled = false;
  } else {
    //하나라도 비어 있을 때
    document.getElementById('send').disabled = true;
    document.getElementById('check').disabled = true;
    document.getElementById('submit').disabled = true;
  }
};

//인증번호 & 타이머
let isStarted = false;

let sendNumber = () => {
  if (isStarted === false) {
    //타이머가 작동 중이 아닐 때
    isStarted = true;
    document.getElementById('check').disabled = false;

    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, '0');
    document.getElementById('randomNumber').innerText = token;
    document.getElementById('randomNumber').style.color = '#' + token;
    //아래 타이머는 테스트용으로 7, 180으로 수정 필요
    let time = 7;
    let timer;

    timer = setInterval(function () {
      if (time >= 0) {
        const min = Math.floor(time / 60);
        const sec = String(time % 60).padStart(2, '0');
        document.getElementById('timer').innerText = min + ':' + sec;
        time = time - 1;
      } else {
        document.getElementById('check').disabled = true; // 0:00이 되면 인증완료 버튼을 비활성화 시키는 것
        isStarted = false;
        // console.log('타이머 작동 중'); // 타이머 작동 중이, isStarted = false와 같이, 1000ms 마다 하나씩 계속 찍히는 걸 확인 가능.
        clearInterval(timer); // 인터벌 기능을 종료하는 것. 타이머 작동 중이 한 번만 딱 찍힘.
      }
    }, 1000);
  } else {
    //타이머가 작동 중일 때
  }
};
