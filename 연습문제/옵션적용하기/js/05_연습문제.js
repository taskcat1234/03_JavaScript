const numbers = document.getElementsByClassName("number");
const btnOut = document.querySelector("#btn-out");
const btnOut2 = document.querySelector("#btn-out2");
const btnIn = document.querySelector("#btn-in");
const btnx = document.querySelector("#btnx");
const listItems = document.querySelectorAll('li');


for (let number of numbers){
  number.addEventListener("click",(e) => {
    if(btnOut.innerText.length<11){
      btnOut.innerText += e.target.innerText;
    }else{
      alert("11자 까지만 입력할 수 있습니다.");
    }
  });
}

btnIn.addEventListener("click",() => {
  let ad = btnOut.innerText;
  const div = document.createElement("div");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  const span3 = document.createElement("span");
  span1.innerText = ad;
  span2.innerText = "☆";
  span2.addEventListener("click", () => {
    console.log(span2);
    if( span2.innerText === "☆"){
      span2.innerText = "★";
      span2.style.color = "red";
      span1.style.color = "red";
    }else{
      span2.innerText = "☆";
      span2.style.color = "black";
      span1.style.color = "black";
    }
  });
  span3.innerText = "×";
  span3.addEventListener("click", () =>{
    div.remove();
  });
  div.append(span1,span2,span3);
  btnOut2.append(div);
  btnOut.innerHTML ="";
  // btnOut2.innerHTML +=`<div><span>${ad}</span><span>☆</span><span>×</span></div>`;
});

btnx.addEventListener("click",() => {
  btnOut.innerHTML ="";
});