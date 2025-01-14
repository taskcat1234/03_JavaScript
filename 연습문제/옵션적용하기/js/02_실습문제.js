
const numbers = document.getElementsByClassName("number")
const v2 = document.querySelector("#result")
const boxes = document.querySelector(".box")
const v3 = document.querySelector("#reset")

for (let number of numbers){
  number.addEventListener("click",(e) => {
    if(v2.innerText.length<10){
    v2.innerText += e.target.innerText;
    }else{
      alert("10자 까지만 입력할 수 있습니다.")
    }
  });
}

v3.addEventListener("click",() => {
  v2.innerHTML ="";
});