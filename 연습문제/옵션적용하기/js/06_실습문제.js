document.getElementById('updateBtn').addEventListener('click', function() {
  // 수정 버튼 위의 div에 b-hidden 추가
  document.querySelector('.normal-container').classList.add('b-hidden');
  
  // 밑에 div에서 b-hidden 클래스 제거
  document.querySelector('.edit-container').classList.remove('b-hidden');
});

document.getElementById('exitBtn').addEventListener('click', function() {
  // 수정 버튼 위의 div에서 b-hidden 클래스를 제거
  document.querySelector('.normal-container').classList.remove('b-hidden');
  
  // 밑에 div에 b-hidden 클래스를 다시 추가
  document.querySelector('.edit-container').classList.add('b-hidden');
});