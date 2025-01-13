const v1 = document.getElementById("1");
const v2 = document.getElementById("2");
const v3 = document.getElementById("3");
const v4 = document.getElementById("apple");
const v5 = document.getElementById("banana");
const v6 = document.getElementById("melon");
const sumBtn = document.querySelector("btn");

const apple = 2000;
const banana = 3000;
const melon = 5000;

// 메뉴별 주문 개수를 저장할 카운트 변수 선언
let aCount = 0;
let bCount = 0;
let mCount = 0;
let Count = 0;
let v7 = "";

btn.addEventListener("click", function(){
  result.innerHTML ="";
  if(v4.checked){
    Count += v1 * apple
    if (aCount){
      v7 += `사과 ${aCount}개`
    }
  } 
  if(v5.checked){
    Count += v2 * banana
    v7 += `사과 ${aCount}개`
  } 
  if(v6.checked){
    Count += v3 * melon
    v7 += `사과 ${aCount}개`
  } 
  Count = aCount + bCount + mCount
  //총합 23000원
  result.innerHTML = `종합 ${Count}원`;
});













































function check29(){
    // 메뉴 가격을 상수로 선언









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