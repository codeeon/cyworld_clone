function greeting() {
  document.getElementById('target').innerText = 'World'; // text는 innerText
  document.getElementById('input').value = 'World'; // input 태그는 value
} // 04-document.html에 기입한 주석을 참고하자. 동작이 발생하는 조건은 문서(html)에 표기하고 동작 함수의 식별자( greeting() ) 부여하며, 지정된 대상(id = "target")에 작동한다
