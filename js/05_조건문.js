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