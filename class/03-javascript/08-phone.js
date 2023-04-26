const changeFocus1 = () => {
  let phone1 = document.getElementById('p1').value;
  if (phone1.length === 3) {
    document.getElementById('p2').focus(); // 포커스를 이동하는 기능. 대상은 옮겨 갈 곳으로 지정한다.
  }
};

const changeFocus2 = () => {
  let phone2 = document.getElementById('p2').value;
  if (phone2.length === 4) {
    document.getElementById('p3').focus();
  }
};
