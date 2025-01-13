const btn = document.querySelector("#btn")
const input1 = document.querySelector("#input1");
const sumBtn = document.querySelector("#sumBtn");
btn.addEventListener("click", function(){ //밑에 생성
  // #input1인 요소에 작성된 값을 얻어와 number타입으로 변화
  container.innerHTML ="";
  let val = Number(input1.value);
  for(let i = 0 ; i < val ; i++){
    const input = document.createElement("input");
    input.className = "input-number"; // 클래스 추가
    input.type = "number"
    container.append(input);
  }
});
sumBtn.addEventListener("click", () =>{ //결과값 구하기
  // 계산 버튼이 클릭되는 시점에 존재하는
  // .input-number 요소를 모두 얻어와
  // 작성된 값의 합계를 구해서 출력하기
  const inputs = document.querySelectorAll(".input-number");
  let sum = 0;
  for(let input of inputs){
    sum += Number(input.value);
  }
  const result = document.querySelector("#result");
  result.innerHTML = `<span id="result">${sum}</span>`;

});