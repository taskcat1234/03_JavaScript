/* window.setTineout(함수, 지연시간(ms)) */
const check1 = document.querySelector("#check1")
check1.addEventListener("click", () =>{
  console.log("바로 출려되는 문자열")
  window.setTimeout(()=>{
    console.log("3초 후에 출력되는 문자열")
  },3000);

  setTimeout(()=>{
    console.log("2초 후에 출력되는 문자열")
  },2000);
  setTimeout(()=>{
    console.log("1초 후에 출력되는 문자열")
  },1000);
  setTimeout(()=>{
    console.log("4초 후에 출력되는 문자열")
  },4000);
});

/* setInterbal(함수, 지연시간(ms)) 
  지연시간이 흐른 후 함수 수행(반복)
*/

// 즉시 실행 함수
(()=>{
  const clock = document.querySelector("#clock");
  // 페이지가 로딩 되자마자 화면에 시간출력
  // 0~1초 커버
  clock.innerText = new Date();
  // 1초마다 반복을 해라
  setInterval(() => {
    clock.innerText = new Date();
  }, 1000);
})();