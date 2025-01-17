document.getElementById("btn1").addEventListener("click", function() {
  // divOut 요소를 선택
  const divOut = document.getElementById("divOut");

  // divOut 안에 기존 자식 요소들이 있으면 모두 제거 (초기화)
  divOut.innerHTML = '';

  // 1부터 45까지의 번호로 div.number 요소를 생성하여 divOut에 추가
  for (let i = 1; i <= 45; i++) {
    const numberDiv = document.createElement("div");
    numberDiv.classList.add("number");
    numberDiv.textContent = i;  // 1부터 45까지 숫자를 텍스트로 추가
    divOut.appendChild(numberDiv);  // divOut에 새로운 div.number 추가
  }

  // 새로운 .number 요소들이 생성되었으므로, divs를 갱신
  const divs = document.querySelectorAll('.number');  // .number 클래스가 있는 div를 다시 선택

  // 각 div에 click 이벤트 리스너 추가
  for (const div of divs) {
    div.addEventListener("click", () => {
      const colors = Array.from(divs).filter(div => div.classList.contains('color1'));
      if (div.classList.contains("color1")) {
        div.classList.remove("color1");
      } else {
        // color1 클래스를 추가하려고 할 때
        if (colors.length >= 6) {
          alert("6개 까지만 선택할 수 있습니다.");
          return;  // 6개 이상일 경우, 추가하지 않고 함수를 종료
        }
        div.classList.add("color1");
      }
    });
  }

  // btn1 클릭 시, id가 'btn'인 요소에 'hidden' 클래스 추가
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  if (btn1) {
    btn1.classList.add("hidden");
    btn2.classList.remove("hidden");
    btn3.classList.remove("hidden");
  }
});

const btn2 = document.getElementById("btn2");
btn2.addEventListener("click", ()=>{
  const numbers = document.querySelectorAll(".number");

  // color1 클래스를 모두 제거 (초기화)
  numbers.forEach(number => {
    number.classList.remove("color1");
  });
});

document.getElementById("btn3").addEventListener("click", function() {
  // 모든 .number 요소를 선택
  const numbers = document.querySelectorAll(".number");

  // 랜덤 번호를 부여하는 함수
  function assignRandomNumbers() {
    // color1 클래스를 모두 제거 (초기화)
    numbers.forEach(number => {
      number.classList.remove("color1");
    });

    // 6개의 랜덤 번호 선택
    const selectedNumbers = [];
    while (selectedNumbers.length < 6) {
      const randomIndex = Math.floor(Math.random() * numbers.length);
      const randomNumber = numbers[randomIndex];

      // 이미 선택된 번호는 다시 선택되지 않도록
      if (!selectedNumbers.includes(randomNumber)) {
        selectedNumbers.push(randomNumber);
        randomNumber.classList.add("color1"); // color1 클래스 추가
      }
    }
  }

  // 0.1초 간격으로 6개의 번호가 랜덤으로 부여되는 작업을 40회 반복
  let count = 0;
  const iterations = 40;
  const interval = 50; // 0.5초 간격

  const intervalId = setInterval(() => {
    assignRandomNumbers(); // 6개의 랜덤 번호를 부여

    count++;

    // 10번 반복 후 종료
    if (count === iterations) {
      clearInterval(intervalId); // 반복 멈추기
    }
  }, interval); // interval초마다 랜덤 번호를 부여
});