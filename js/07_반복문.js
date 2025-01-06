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