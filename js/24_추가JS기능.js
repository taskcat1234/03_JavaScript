/* for in 확인하기 */
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", ()=>{
  //JS 객체 생성
  const obj = {
    menu   : "제육볶음",
    preice : 8000,
    option : {
      spicy : ["기본","안맵게", "아주맵게"],
      rice   : ["기본", "적게", "많이"]
    }
  };
  for(let key in obj){
    /* console.log(key); */ // 객체의 key 출력

    // 객체에 저장된 값 얻어오기
    // 1) 객체명.key
    // 2) 객체명["key"]

    // 객체에 저장된 모든 값 출력하기
    console.log(`obj[${key}] : ${obj[key]}`);

    /* 만약 꺼내온 key 가 "option인 경우" */
    if(key === "option"){
      for(let key2 in obj[key]){
        // obj[key] === obj["option"]
        // === {
        //   spicy : ["기본","안맵게", "아주맵게"],
        //   rice   : ["기본", "적게", "많이"]
        // }

        // key2 === rice, spicy

        // obj[key][key2] === obj["option"]["rice"]
        // obj[key][key2] === obj["option"]["spicy"]


        console.log(key2, obj[key][key2]);
      }
    }

  }
  console.log(obj["menu"]); 
  // menu가 문자열이 아닌 변수명으로 인식되어 오류!
  // -> 해결 방법 : 문자열로 인식할 수 있게 "",'' 감싸기
  // (참고 : JS객체의 Key는 모두 string 자료형이다)
});