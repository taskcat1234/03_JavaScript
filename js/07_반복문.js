/* [작성법]
  for([1]초기식  ; [2]조건식 ; [4]증감식){
    // [3] 조건식이 true일 경우 수행할 코드;
  } 
  * 처음 for이 수행 될 때만 [1] 초기식을 수행
    -> 두 번째 반복부터는 [2],[3],[4] 만 반복  
*/

/** 콘솔에 12345 출력하기 */
function check1(){
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
  console.log(5);
  console.log("--------------------------------");
  /* for 문 버전 */
  //num 값이 1부터 5 까지 1씩 증가하는 동안 반복
  for(let num = 1; num <= 5 ; num++){
    console.log(num);
    // [초기식] let num = 1;
    // -> 1이 저장된 변수 num을 선언

    // [조건식] num <= 5
    // -> num 변수에 저장된 값이 5 이하면 true
    //    -> 반복 0 == for문 {} 내부 코드를 수행해라
    // -> num 변수에 저장된 값이 5 이하가 아니면 false
    //    -> 반복 X == for문 {} 내부 코드를 수행하지 말아라! 

    // [증감식] num++
    // -> num 변수에 저장된 반복 때 마다 값을 1 증가

  }
}

function check2(){
  for( let num = 1 ; num <= 10 ; num++ ){
    console.log(num);
  }
}

function check3(){
  for( let num = 5 ; num <= 13 ; num++ ){
    console.log(num);
  }
}

function check4(){
  let result = ""; // 결과를 저장할 변수에 ""(빈칸) 대입
  for( let num = 1 ; num <= 7 ; num++ ){
    result += num; //result = result + num;
  }
  console.log(result); // '1234567'
}

function check5(){
  let result = "";
  // let result;
  // result에 ""(빈칸)을 대입하는 이유
  // -> 변수 선언 시 아무런 값도 대입하지 않으면 undefined
  //  -> undefined는 산술 연산의 대상이 될 수 없음!
  //   -> 산술 연산을 수행하면 NaN(Not a Number) 결과가 반환됨
  for( let num = 4 ; num <= 11 ; num++ ){
    result += num; //result = result + num;
  }
  console.log(result); // '4567891011'
}

// check4, 5과 유사하지만 저장 타입에 따라서 결과가 달라짐
function check6(){
  let sum = 0; // 합계를 저장할 변수를 선언, 0을 대입
               // -> 더하거나 빼을 떄 영향이 없는 숫자 0 대입
  for( let num = 1 ; num <= 10 ; num++ ){
    sum += num;
  }
  console.log(sum);
}

// 입력 받은 값 사이 정수 값들의 합 구하기
function check7(){
  // 모든 값 입력 되어있고
  // b는 모조권 a 보다 크다는 가정하에 작성됨
  const a = Number(document.getElementById("input7a").value)
  const b = Number(document.getElementById("input7b").value)
  let sum = 0;
  for( let num = a ; num <= b ; num++ ){
    sum += num;
  }
  console.log(`${a}부터 ${b} 사이 정수 합 : ${sum}`);
}

// 1부터 10까지 2씩 증가한 숫자 출력 + 합계 구하기
function check8(){
  let sum = 0;
  for( let num = 1 ; num <= 10 ; num += 2 ){
    console.log(num);
    sum += num;
  }
  console.log(sum);
}

// 3부터 30까지 3의 배수만 출력하기
// 방법 1
/* function check9(){
  let sum = 0;
  for( let num = 3 ; num <= 30 ; num += 3 ){
    console.log(num);
    sum += num;
  }
} */
// 방법 2 (이게더 효과 적임)
/* function check9(){
  // 1) 증감식 변경
  let result = "";
  for(let num = 3 ; num <= 30 ; num += 3){
    result += num + " ";
  }
  console.log(result);
} */
// 방법 3
function check9(){
  // 1) 증감식 변경
  let result = "";
  for(let num = 3 ; num <= 30 ; num++ ){
    if(num % 3 === 0){
      result += num + " ";
    }
  }
  console.log(result);
}

//start10,end10,multiple10
//입력 받은 범위 내 지정된 수의 배수를 출력, 합계 구하기
function check10(){
  const a = Number(document.getElementById("start10").value)
  const b = Number(document.getElementById("end10").value)
  const c = Number(document.getElementById("multiple10").value)
  let sum = 0; // 숫자 형태로 지정
  let result = ""; // 문자 형태로 지정
  for(let num = a ; num <= b ; num++ ){ // a부터 시작하고 b 이상일때 종료 1씩 증가하는 for문
    if(num % c === 0){ // num 이 % c값으로 놔눠졌을때 0 인 경우에만 작동
      sum += num; // 숫자를 더하기 10 + 10 = 20
      result += num + " "; // 문자식으로 숫자를 더하기 10 + 10 = 1010
    }
  }
  console.log(result); // 문자식으로 저장한 변수 출력
  console.log("합계 : ",sum); // 숫자식으로 저장한 변수 출력
}

function check11(){
  let sum = 0; // 숫자 형태로 지정
  for(let num = 1 ; num <= 9 ; num++ ){ // a부터 시작하고 b 이상일때 종료 1씩 증가하는 for문
    console.log(`2 x ${num} = ${num *2}`); // 숫자식으로 저장한 변수 출력
  }
}

// 구구단
function check12(){
  const a = document.getElementById("dan12").value;
  if(a.length === 0){ //
    alert("단을 입력해주세요");
    return; // 함수를 즉시 종료하고 호출한 곳으로 돌아감
            // -> 함수를 수행할 수 없는 상태여서 미리 종료
  }
  if(a < 2 || a > 9){
    alert("2 ~ 9단 사이만 입력 해주세요");
    return;
  }
  for(let num = 1 ; num <= 9 ; num++ ){ // a부터 시작하고 b 이상일때 종료 1씩 증가하는 for문
    console.log(`${a} x ${num} = ${num * a}`); // 숫자식으로 저장한 변수 출력
  }
}


// 10부터 1까지 1씩 감소하며 출력하기
function check13(){
  // 감소 형태 반복문은 조건식을 좀금 더 생각해야 된다!
  for( let num = 10 ; num >= 1 ; num-- ){
    console.log(num);
  }
}

// 20부터 3까지 3씩 감소하며 출력하기
function check14(){
  // 감소 형태 반복문은 조건식을 좀금 더 생각해야 된다!
  for( let num = 20 ; num >= 3 ; num -= 3 ){
    console.log(num);
  }
}

// 구구단 3단 거꾸로 출력하기
function check15(){
  let sum = 0; // 숫자 형태로 지정
  for(let num = 9 ; num >= 1 ; num-- ){ // 1씩 감소하는 구문
    console.log(`3 x ${num} = ${num * 3}`); // 구구단 거꾸로 출력
  }
}


//5의 배수마다 @, 10의 배수마다 줄바꿈하면서 출력하기
//[결과 화면 예시]
//    1 2 3 4 @ 5 7 8 9 @
//    11 12 13 14 @ 16 17 18 19 @
//    21 22 23 24 @ 26 27 28 29 @
function check16(){
  let result = "";
  for(let num = 1 ; num <= 30 ; num++ ){
    if(num % 5 === 0){
      result += "@ ";
    } else{
      result += num + " ";
    }
    if(num % 10 === 0){
      result += "<br> ";
    }
  }
  document.getElementById("result16").innerHTML = result;
}

//중첩 반복문
function check17(){
  for(let row = 1 ; row <=3 ; row++){ // 3번 출력
    let result = ""; //빈칸(string)
    for(let col = 1 ; col <=4 ; col++){
      result += col; //문자열 + 숫자 -> 이어쓰기
    }
    console.log(result);
    console.log("----");
  }
}

function check18(){
  for(let row = 1 ; row <=4 ; row++){ // 4번 출력
    let result = ""; //빈칸(string)
    for(let col = 1 ; col <=5 ; col++){
      result += col; //문자열 + 숫자 -> 이어쓰기
    }
    console.log(result);
    console.log("----");
  }
}

// 654321 출력하기
function check19(){
  for(let row = 1 ; row <=3 ; row++){ // 3번 출력
    let result = ""; //빈칸(string)
    for(let col = 6 ; col >=1 ; col--){
      result += col; //문자열 + 숫자 -> 이어쓰기
    }
    console.log(result);
    console.log("----");
  }
}
//1
//12
//123
//1234
//12345
function check20(){
  let result = "";
  let dle = 1; // 또는 필요한 변수를 새로 선언해도된다
  for(let row = 1 ; row <=5 ; row++){
    for(let col = 1 ; col <=1 ; col++){ 
      ++dle
      result += dle; //문자열 + 숫자 -> 이어쓰기
    }
    console.log(result);
    console.log("----");
  }
}

//또는 밑에 처럼 기존 for(맨위)의 변수를 활용해도된다
function check21(){
  for(let row = 1 ; row <=5 ; row++){ 
    let result = "";
    for(let col = 1 ; col <= row ; col++){
      result += col + 2; //문자열 + 숫자 -> 이어쓰기
    }
    console.log(result);
    console.log("----");
  }
}
// * 출력하기
function check22(){
  for(let row = 1 ; row <=3 ; row++){ 
    let result = "";
    for(let col = 1 ; col <= row ; col++){
      result += "*"; //문자열 + 숫자 -> 이어쓰기
    }
    console.log(result);
  }
}

function check23(){
  const input = document.getElementById("input23")
  if(input.value.length === 0){ // 미입력시
    alert("숫자를 입력해주세요");
    return;
  }
  const val = Number(input.value)
  if(val <= 0){ // 0이하의 숫자 입력시 
    alert("0보다 큰수를 입력해주세요");
    return;
  }
  for(let row = 1 ; row <= val ; row++){ 
    let result = "";
    for(let col = 1 ; col <= row ; col++){
      result += "*"; //문자열 + 숫자 -> 이어쓰기
    }
    console.log(result);
  }
}

//별 줄이기
// ****
// ***
// **
// *

function check24(){
  for(let row = 4 ; row >=1 ; row--){ //4부터 1까지 점점 줄어듬
    let result = "";
    for(let col = 1 ; col <= row  ; col++){ //위에 값을 받아와서 실행 col <= 5-row 방식으로도 할수있다
      result += "*"; //문자열 + 숫자 -> 이어쓰기
    }
    console.log(result);
  }
}

//1부터 30 사이의 정수 중 4의 배수는 몆개?
//4,8,12,16,20,24,28
function check25(){
  let count = 0; //처음에는 세어진게 없음
  for(let num = 1 ; num <= 30 ; num++){
    if(num % 4 === 0){
      count++;
    }
  }
  console.log("몆개? : " , count);
}


//1부터 100 사이의 정수 중 입력 받은 값의 배수는 몆개?
function check26(){
  //정상 입력 가정하에
  const input = Number(document.getElementById("input26").value);
  let count = 0;
  for(let num = 1 ; num <= 100 ; num++){
    if(num % input === 0){
      count++;
    }
  }
  console.log(`1~100 사이 ${input}의 배수는 ${count}개 있습니다.`)
}

// const input = Number(document.getElementById("input26").value); //일반 사용시
// const input = document.getElementById("input26").value; // 빈공간 감지 필요시
// const input = document.getElementById("input26"); // 기초 구문

// count를 이용해 숫자 부여하기
//  1 2 3 4
//  5 6 7 8
//  9 10 11 12
function check27(){
  // 3행 4열 반복
  let count = 1; // 1부터 시작
  for(let row = 1 ; row <= 3 ; row++ ){
    let str = "";
    for(let col = 1 ; col <= 4 ; col++ ){
      // str += `${count} `; // count + " "
      // count++; // 1증가
      str += `${count++} `;
    }
    console.log(str)
  }
}

//prompt를 이용해서 입력받은 숫자 모두 더하기
// 단, 취소 입력 시 추가 입력을 받지 않고
// 누적된 합계를 alert로 출력
function check28(){
  // prompt("내용") : 입력이 포함된 알림창
  // - 확인 클릭 : 입력한 내용 반환
  // - 취소 클릭 : null 반환
  let test = 1;
  while(test <=5){
    console.log(test)
    test++;
  }


  let sum = 0; // 합계 누적용 변수
  let val; //prompt에 입력된 값을 저장할 변수
  while( (val = prompt("숫자 입력(취소 클릭시 종료)")) !== null ){
    sum += Number(val);
  }
  alert(`합계 : ${sum}`)
}

/* 메뉴 주문하기 */
function check29(){
  // 메뉴 가격을 상수로 선언
  const gimbap = 4000;
  const ramen = 4500;
  const donkkaseu = 9000;

  // 메뉴별 주문 개수를 저장할 카운트 변수 선언
  let gCount = 0;
  let rCount = 0;
  let dCount = 0;

  // prompt에 저장된 값을 저장할 변수
  let input; //undefined

  // input 변수에 저장된 값이 null이 아닐 경우 반복
  //undefined랑 null은 다름!!
  while(input !== null){
    // prompt에 반환되는 값 종류 : "1", "2", "3" 메뉴없는 숫자(잘못된 입력), null(취소)
    input = prompt("메뉴 번호 입력(1.김밥 2.라면 3.돈까스)")

    switch(input){
      case "1" : gCount++; break;
      case "2" : rCount++; break;
      case "3" : dCount++; break;
      case null : alert("주문 완료!"); break;
      default: alert("잘못 입력 하셨습니다.");
    }
  } // while end
  // innerHTML 사용 필요
  // 주문된 메뉴만 출력(count 변수에 저장된 값이 0 초과)
  let outputHtml = ''; // 출력할 html 코드가 포함된 문자열 저장
  if(gCount > 0){
    outputHtml += `<li>김밥(${gCount}개) : ${gimbap * gCount}원</li>`
  }
  if(rCount > 0){
    outputHtml += `<li>라면(${rCount}개) : ${ramen * rCount}원</li>`
  }
  if(dCount > 0){
    outputHtml += `<li>돈까스(${dCount}개) : ${donkkaseu * dCount}원</li>`
  }
  /* 합계 */
  const sum = (gimbap * gCount) + (ramen * rCount) + (donkkaseu * dCount)
  outputHtml += `<li>합계 : ${sum}원</li>`;
  // #result29의 내용으로 outputHtml 출력(html 요소 해석)
  document.getElementById("result29").innerHTML = outputHtml;
}