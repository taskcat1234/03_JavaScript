/** if 예제 - 양수인지 검사  */
function check1(){
  // id가 "input1"인 요소를 얻어와 in1 상수에 저장
  const input1 = document.getElementById("input1");
  // id가 "input1"인 요소에 작성된 값을 얻어와 숫자로 변환 하여
  // val 변수에 저장
  const val = Number(input1.value);
  
  //양수(0보다 큰수)가 맞는지 검사
  if(val > 0){
    // 조건식이 true인 경우 수핼할 코드;

    alert(`${val} 은/는 양수 입니다.`); 
    //alert : 브라우저 알림창 띄우기
  }

  // 양수가 아닌경우
  if(val <= 0){
    alert(`${val} 은/는 양수가 아닙니다.`); 
  }
}

//-----------------------------------------------------------------------

//* 1 ~ 100 사이의 난수를 발생 시켜 홀/짝 판별하기 */
function check2(){
  //난수 발생 : Math.random();
  // 0.0 <= 난수 < 1.0

  // 1 ~ 100 사이 난수 발생
  // Math.random(); -> 0.0 <= 난수 < 1.0
  // Math.random() * 100 -> 0.0*100 <= 난수*100 < 1.0*100
  //                     -> 0.0 <= 난수 * 100 < 100.0
  
  // Math.random() * 100 + 1 -> 1.0 <= 난수*100+1 < 101.0

  // 내림 처림 Math.floor(실수);

  // Math.floor(Math.random() * 100 + 1) -> 1 <= 난수 < 101

  const randomNumber = Math.floor(Math.random() * 100 + 1);

  //발생된 난수가 홀수인지 검사
  if(randomNumber % 2 === 1){
    alert(`${randomNumber} 은/는 홀수입니다.`); 
  }
  else{
    alert(`${randomNumber} 은/는 짝수입니다.`); 
  }
}

/** 양수, 음수, 0 판별기 */
function check3(){

  const input3 = document.getElementById("input3")
  const val = Number(input3.value);
  let result; // 결과를 저장할 변수 선언 (현재 undefined 상태)

  //양수 판별
  if(val > 0){
    alert(`양수`);
  }
  //음수 판별
  else if(val < 0){
    alert(`음수`);
  }
  //양수, 음수 아닌 경우
  else{
    alert(`${val}은/는 ${result} 입니다.`);
  }
  // if / else if / else에 모두 result 값 대입 코드 작성
  // -> 모조건 result에는 값이 대입되도록 되어있다!
}

//* 나이 체크하기 ( 자작 )/
function ageCheck(){
  const inputAge = document.getElementById("inputAge")
  const age = Number(inputAge.value);
  // 또는 if(age >= 0 && age <= 13)
  if(age < 0){
    alert(`잘못 입력 하셨습니다.`);
  }
  else if(age < 14){
    alert(`어린이 입니다.`);
  }
  else if(age < 20){
    alert(`청소년 입니다.`);
  }
  else if(age < 121){
    alert(`성인 입니다.`);
  }
  else{
    alert(`잘못 입력 하셨습니다.`);
  }
}

function ageCheck2(){
  const inputAge = document.getElementById("inputAge")
  const age = Number(inputAge.value); //입력받은 나이
  let result;
  // 잘못 입력된 경우
  if(age < 0 || age >120){
    result = "잘못 입력 하셨습니다";
  } else if(age <=13){
    result ="어린이 입니다.";
  } else if(age <=19){
    result ="청소년 입니다.";
  } else{
    result ="성인 입니다.";
  }
  alert(result)
}

/* 
  input 요소에 작성된 값 얻어오기 : input요소.value
  html 요소에 작성된 내용 얻어오기 : html요소.innerText
*/

/** 두 수 A,B를 입력 받아 A가 B의 배수가 맞는지 확인 */
function check4(){
  const inputA = document.getElementById("inputA");
  const inputB = document.getElementById("inputB");
  //1) A, B 중 하나라도 입력되지 않을 경우
  //   -> "입력되지 않은 값이 존재합니다"(라고 출력)

  // "string".length : 문자열의 길이 반환

  // inputA 또는 inputB 중 하나라도 입력되지 않은 경우
  if(inputA.value.length === 0 || inputB.value.length === 0){
    alert("입력되지 않은 값이 존재합니다.");
    return; // 함수를 즉시 종료하고 호출한 곳으로 돌아감
            // -> 함수를 수행할 수 없는 상태여서 미리 종료
  }
  // 위 if문을 건너 뜀 === 둘 다 입려된 상태
  const v1 = Number(inputA.value);
  const v2 = Number(inputB.value);
  // v1 보다 v2가 더 클경우 실행
  if(v1 < v2){
    alert("A가 B보다 작습니다")
    return;
  }
  // 위 if문 건너뜀
  // == A,B가 모두 입력됨 + A가 B보다 크거나 같음
  // 3) A가 B보다 클 경우
  //    -> 배수 판별 수행
  if(v1 % v2 === 0){ // A가 B의 배수가 맞을 경우
    alert(`${v1} 은 ${v2}의 배수가 맞습니다.`);
    return;
  }
  alert(`${v1} 은 ${v2}의 배수가 아닙니다.`)

}

function check5(){
  const input5 = document.getElementById("input5");
  // 입력된 값이 없을경우
  if(input5.value.length === 0){
    alert("숫자를 입력 해주세요");
    return; // 함수를 즉시 종료하고 호출한 곳으로 돌아감
            // -> 함수를 수행할 수 없는 상태여서 미리 종료
  }
  let result;
  switch(Number(input5.value)){
    case 3 : result = "3이 입력 되었습니다"; break;
    case 4 : result = "4이 입력 되었습니다"; break;
    case 5 : result = "5이 입력 되었습니다"; break;
    default : "3,4,5 가 아닌 다른 숫자가 입려되었습니다.";
  }
  alert(result);
  let result2;
  if( Number(input5.value) === 3){
    result2 = "3이 입려되었습니다.";
  } else if( Number(input5.value) === 4){
    result2 = "4이 입려되었습니다.";
  } else if( Number(input5.value) === 5){
    result2 = "5이 입려되었습니다.";
  } else {
    result2 = "3,4,5 가 아닌 다른 숫자가 입려되었습니다.";
  }
  alert(result2);
}

// 매개 변수(Parameter)
// - 함수가 호출될 때 전달된 값(전달 인자, Argument)을 
//   저장하기 위한 변수

/** switch 문을 이용한 계산기 */
function calc(op) {
  console.log("매개 변수 op 확인 : ", op, typeof op);

  // 숫자가 입력되는 input 요소 얻어와 변수에 저장
  const Number1 = document.getElementById("number1");
  const Number2 = document.getElementById("number2");
  // 숫자가 둘 중 하나라도 입력되지 않은 경우
  if(Number1.value.length === 0 || Number2.value.length === 0){
    alert("숫자를 모두 입력 해주세요");
    return; // 함수 종료
  }

  // number 타입으로 입력 받은 값 변경
  const n1 = Number(Number1.value);
  const n2 = Number(Number2.value);

  // 전달 받은 매개 변수(op) 값에 따라 서로 다른 연산 수행
  let result;
  switch(op){
    // 전달 받은 매개 변수가 '+'인 경우
    case '+' : result = n1 + n2; break;
    case '-' : result = n1 - n2; break;
    case '*' : result = n1 * n2; break;
    case '/' : result = n1 / n2; break;
    case '%' : result = n1 % n2; break;
    default : result = "잘못된 연산자"
  }
  // 결과를  #calcResult 요소의 내용으로 출력
  document.getElementById("calcResult").innerText = result;

}

//봄 3,4,5, 여름 6,7,8, 가을 9,10,11, 겨울 12,13,1,2
/** 입력 받은 월(달)의 알맞은 계절 출력(break; 관련 예제) */
function check6(){
  const input6 = document.getElementById("input6");
  // 입력된 값이 없을 경우
  if(input6.value.length === 0){
    alert("월(달)을 입력해주세요");
    return;
  }

  // break(멈추다) : 현재 case 까지만 해석하고 swutch문을 멈춤

  // -> break 미작성 시
  //  다음 case(케이스) 수행 후 멈추지 않고
  // 다음 case를 연달아서 수행

  // (break 또는 switch 끝) 를 만날 때 가지 계속 연달아 수행

  let result
  switch(Number(input6.value)){
    // case 3,4,5 : Java만 사용가능 (JS 안됨)
    case 3: case 4: case 5: result = "봄"; break;
    case 6: case 7: case 8: result = "여름"; break;    
    case 9: case 10: case 11: result = "가을"; break;
    case 12: case 1: case 2: result = "겨울"; break;
    default : result = "잘못 입력하였습니다.";
  }
  alert(result);
}