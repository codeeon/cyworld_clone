const checkValidation = () => {
  let email = document.getElementById('email').value;
  let pw1 = document.getElementById('pw1').value;
  let pw2 = document.getElementById('pw2').value;

  // input에 0을 넣어도 아래 조건에서 false가 나오지 않는 이유는 0이 string이기 때문이다. text라서 그렇기도 하지만, input에 들어간 것은 value값으로 취급되어 string이 된다. 원래는 if(email !== "" && pw1 !== "" && pw2 !== "")이 들어가는 게 기본이다.
  if (email && pw1 && pw2) {
    //모든 input이 비어 있지 않을 때
    document.getElementById('submit').disabled = false;
  } else {
    //하나라도 비어 있을 때
    document.getElementById('submit').disabled = true;
  }
};
