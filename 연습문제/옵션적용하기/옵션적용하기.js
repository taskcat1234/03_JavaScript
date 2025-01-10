const radiog1 = document.querySelectorAll("[name = g1]");
const radiog2 = document.querySelectorAll("[name = g2]");
const radiog3 = document.querySelectorAll("[name = g3]");
const fs = document.querySelector(".input3")
const box = document.querySelector(".box");
for(let i = 0 ; i < radiog1.length ; i++){
  // 라디오 버튼의 값이 변했을 때를 감지
  radiog1[i].addEventListener("change", function(e){
    box.style.fontWeight = e.target.value;
  });
};
for(let i = 0 ; i < radiog2.length ; i++){
  // 라디오 버튼의 값이 변했을 때를 감지
  radiog2[i].addEventListener("change", function(e){
    box.style.textAlign = e.target.value;
  });
};
for(let i = 0 ; i < radiog3.length ; i++){
  // 라디오 버튼의 값이 변했을 때를 감지
  radiog3[i].addEventListener("change", function(e){
    box.style.fontWeight = e.target.value;
  });
};
//글자크기
//box.style.fontSize = fs.value + "px";



document.querySelector("#userInput")
  .addEventListener("keydown", function(e){
    console.log(e.key);
    if (e.key ==="Enter"){
      readValue();//
    }
  });

function readValue(){
  /* 채팅이 출력 되는 화면(배경) 요소 선택 */
  const bg = document.querySelector("#userOut");
  /* 입력되는 채팅 내용 input 요소 선택 */
  const input = document.querySelector("#userInput")

  if(input.value.trim().length === 0){
    alert("채팅 내용을 입력 해주세요");
    input.value = ""; //입력된 공백을 모두 제거
    input.focus(); // input 요소에 초점을 맞춤
    return;
  }
  /* 입력된 값을 읽어와 채팅화면에 누적 */
  bg.innerHTML += `${input.value}<br>`;
  // 채팅화면 출력 후 입력 값 제거
  input.value = ""; //입력된 공백을 모두 제거
  input.focus(); // input 요소에 초점을 맞춤
  bg.scrollTop = bg.scrollHeight;
}