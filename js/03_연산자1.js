/* (중요!!!)
  HTML 문서에서 얻어온 값의 자료형은 무조건 string(문자열)!! 
*/

// 계산기 동작 코드

//전역 변수(어디서든 사용 가능한 변수) 선언

// document : HTML 문서
// . (점 연산자) : 내부(하위)접근 연산자
// get : 얻다
// Element : HTML 요소
// ById("input1") : id 가 "input1"으로 일치하는
// -> 문서 내에서 id가 일치하는 요소 얻어오기
// id가 일치하는 input 요소를 얻어와 변수에 저장
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const calcResult = document.getElementById("calcResult");

/*  Number(input2.value);가 계속 반복되는데
    전역 변수로 선언하면 안될까?
    -> 안된다!!
    
    왜? 전역 변수는 페이지 로딩 시점에 해석되어서 값이 결정된다!!
    -> input에 작성된 값이 없어서 Number(input1.value) == 0

    -> (해결 방법)
      값을 입력한 후 함수를 호출해서
      함수가 호출되는 시점의
      입력된 값을 읽어올 수 있게 만든다!!
*/

const test1 = Number(input1.value); 
const test2 = Number(input1.value); 

/** 더하기 함수 (DOC 주석, 함수 설명 작성용 주석) */
function plusFn(){
  // input1.value : #input1 요소에 작성된 값(string) 얻어오기
  // Number('숫자형태 문자열') : '숫자형태 문자열' -> 숫자로 변경
  // 단, '숫자형태 문자열'이 아닐 경우 NaN(Not a Number) 결과 반환
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);

  console.log("두 수의 합 : ", value1 + value2);
  // string + string -> 이어쓰기
  // number + number -> 덧셈

  // 결과(#calcResult)의 내용(innerText)으로 출력
  calcResult.innerText = value1 + value2;
}

function minusFn(){
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);
  console.log("두 수의 합 : ", value1 - value2);
  calcResult.innerText = value1 - value2;

  console.log("test1 : ", test1);
  console.log("test2 : ", test2);
  console.log("test1 - test2 : ", value1 - value2);
}

function multiFn(){
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);

  console.log("두 수의 합 : ", value1 * value2);

  calcResult.innerText = value1 * value2;
}

function divFn(){
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);

  console.log("두 수의 합 : ", value1 / value2);

  calcResult.innerText = value1 / value2;
}

function modFn(){
  const value1 = Number(input1.value);
  const value2 = Number(input2.value);

  console.log("두 수의 합 : ", value1 % value2);

  calcResult.innerText = value1 % value2;
}

// -----------------------------------------------------------------------------

/* 산술 연산자 응용 */

const input3 = document.getElementById("input3")
const input4 = document.getElementById("input4")
const calcResult2 = document.getElementById("calcResult2");

/** 첫 번째 값 X2 */
function doubleFn(){
  const value3 = Number(input3.value);

  console.log("두 수의 합 : ", value3 * 2);

  calcResult2.innerText = value3 * 2;
}

function squareFn(){
  const value4 = Number(input4.value);

  console.log("두 수의 합 : ", value4 * value4);

  calcResult2.innerText = value4 * value4;
}

function allOperationFn(){
  //해당 함수가 적용될떄 인수값을 가져옴
  const v1 = Number(input3.value);
  const v2 = Number(input4.value);

  // 각각의 연산 결과를 별도의 변수에 저장
  const plus = v1 + v2;
  const minus = v1 - v2;
  const multi = v1 * v2;
  const div = v1 / v2;
  const mod = v1 % v2;
  // 요소.innerText = "문자열";
  // -> <span>내용</span> 내용 부분에 "문자열" 대입(출력)
  // -> HTML 코드 해석 X

  // 요소.innerHTML = "문자열";
  // -> <span>내용</span> 내용 부분에 "문자열" 대입(출력)
  // -> HTML 코드 해석 O

  calcResult2.innerHTML = 
    "<ul>" 
    + "<li> + 결과 : " + plus + "</li>"
    + "<li> - 결과 : " + minus + "</li>"
    + "<li> * 결과 : " + multi + "</li>"
    + "<li> / 결과 : " + div + "</li>"
    + "<li> % 결과 : " + mod + "</li>"
    + "</ul>";
}

// -----------------------------------------------------------------
const countResult = document.getElementById("countResult");

/* 증감 연산자를 이용해 1씩 증가하는 함수 */
/* 증감 연산자를 이용해 1씩 감소하는 함수 */

function increase(){

  //요소.innerText = "문자열"; // 문자열 화면에 출력
  //요소.innerText // 요소에 작성된 내용 얻어오기
  let count = Number(countResult.innerText);

  countResult.innerText = ++count; // 플러스 1
}

function decrease(){
  let count = Number(countResult.innerText);
  countResult.innerText = --count; // 마이너스 1
}

/* 전위/후위 연산 확인하기 */
// 연산이란?
// - 컴퓨터가 코드/값을 읽고 실행하는 행위
// +, -, *, /
//변수에 값 대입, consile 출력, innerText .. 모두다


function checkFn(){
  let num = 100;
  // 전위 연산 : 다른 연산 보다도 최우선으로 실행

  // num 값이 1 증가한 후 console에 출력
  console.log("++num : ", ++num); //101
  console.log("++num : ", ++num); //102
  console.log("++num : ", ++num); //103
  // 후위 연산 : 다른 연산 보다도 나중에 실행
  console.log("----------------");
  num = 100;
  console.log("num++ : ", num++); //100 -> num 1 증가(101)
  console.log("num++ : ", num++); //101 (변수 호출후 연산을 하기때문에 변수 값은 변하나 출력은 이전 변수값이 출력됨)
  console.log("num++ : ", num++); //102
  console.log("num++ : ", num++); //103 최종값은 104
  console.log("num 확인 : ", num);

  let a =10;
  let b =5;
  let c = ++a * b--;
  /* 최종 a,b,c의 값은? */
  // a : 11
  // b : 4
  // c : 55
  console.log("c 확인 : ",a , b, c);
}