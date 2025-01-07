/* 구구단 표 만들기 */
function createTable(){
  /* 시작, 종료 단 input 요소 얻어오기 */
  const startInput = document.getElementById("start");
  const endInput = document.getElementById("end");

  /* 테이블 머리(단 입력 영역) */
  const thead = document.getElementById("thead");
  /* 테이블 몸통(구구단 표 출력 영역) */
  const tbody = document.getElementById("tbody");

  // ---------------------------------------------------------------------

  // 기존에 남아있던 표를 삭제하는 작업
  thead.innerHTML = ""; // 시작/종료 태그 사이 내용을 빈칸을 바꿈 -> 삭제 효과
  tbody.innerHTML = "";

  //시작 또는 종료 단이 입력되지 않은 경우
  // -> alert("양수만 입력 해주세요");

  // 시작 단이 종료 단 보다 큰 경우
  // -> alert("시작 단이 종료 단 보다 클수 없습니다.");
  if(startInput.value.length === 0 || endInput.value.length === 0){
    alert("시작/종료 단을 입력 해주세요");
    return;
  }
  let v1 = Number(startInput.value)
  let v2 = Number(endInput.value)
  let outputHtml1 = '';
  let outputHtml2 = '';
  if(v1 <= 0 || v2 <= 0){
    alert("1 이상의 수만 입력해주세요");
    return;
  }
  if(v1 > v2){
    alert("시작 단이 종료 단 보다 클수 없습니다.");
    return;
  }


  outputHtml1 += `<tr>`;
  for(let num = 1 ; num <= 9 ; num++){
    outputHtml2 += `<tr>`;
    for(v1 ; v1 <= v2 ; v1++){
      outputHtml2 += `<td>${v1} x ${num} = ${num * v1}</td>`; //<tr><td></td>
    }
    outputHtml2 += `</tr>`;
    v1 = Number(startInput.value)
  }
  for(v1 ; v1 <= v2 ; v1++){
    outputHtml1 += `<td>${v1}단</td>`;
  }
  outputHtml1 += `</tr>`;
  document.getElementById("thead").innerHTML = outputHtml1;
  document.getElementById("tbody").innerHTML = outputHtml2;


}
/* 위에 코드는 내가 만든것 */
























/** 강사님 코드 */
function d(){
  const startInput = document.getElementById("start");
  const endInput = document.getElementById("end");
  const thead = document.getElementById("thead");
  const tbody = document.getElementById("tbody");
  thead.innerHTML = "";
  tbody.innerHTML = "";
  if(startInput.value.length === 0 || endInput.value === ""){ // "" 이랑 0이랑 같다
    alert("시작/종료 단을 입력 해주세요");
    return;
  }
  const start = Number(startInput.value)
  const end = Number(endInput.value)
  if(start <= 0 || end <= 0){
    alert("1 이상의 수만 입력해주세요");
    return;
  }
  if(start > end){
    alert("시작 단이 종료 단 보다 클수 없습니다.");
    return;
  }
  // #thead에 들어갈 html 코드 생성
  let output1 = '<tr>';
  for(let num=start ; num <=end ; num++){
    output1 += `<th>${num}단</th>`
  }
  output1 = '</tr>';
  thead.innerHTML = output1;
  // 구구단 표 몸통 부분
  for(let num = 1 ; num <= 9 ; num++){
    let tr = "<tr>"
    for(let dan=start ; dan <=end ; dan++){// <td> 단 x num = 결과 
      tr += `<td>${dan} x ${num} = ${dan * num}</td>`
    }
    tr += "</tr>"
    tbody.innerHTMLhtml += tr;
  }
}