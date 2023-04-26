const startWord = () => {
  let myword = document.getElementById('myword').value;
  let word = document.getElementById('word').innerText;

  let lastword = word[word.length - 1]; // 마지막 글자
  let firstword = myword[0]; // 첫 번째 글자

  if (lastword === firstword) {
    //정답일 때
    document.getElementById('result').innerText = '정답입니다!';
    document.getElementById('word').innerText = myword;
    document.getElementById('myword').value = ''; // 빈 문자열로 만들기
  } else {
    //오답일 때
    document.getElementById('result').innerText = '땡!';
    document.getElementById('myword').value = '';
  }
};
