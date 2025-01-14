/* JS 객체 생성 + 다루기 */
const btn1 = document.querySelector("#btn1")
btn1.addEventListener("click", () => {
  // 1. 객체 생성
  // 2) {} - JS 객체 리터럴을 이용한 생성
  // 2) new Object - 새 객체 생성 === {}
  const person = new Object();

  /* 객체 내부에 값을 추가하는 방법 */
  // 1) 객체명.key = value;
  person.name = "철수";
  person.age = 22;
  // 2) 객체명["key"] = value;
  person["height"] = 178.9;
  person["weight"] = 73;
  console.log("person : ", person)

  // * key는 무조건 string 타입!!! (고정)
  // -> "", '' 없어도 string으로 인식된다!
  const product = {
    "productName" : "새우깡", // const productName = "새우깡"; 이랑 같음
    'brand' : "농심",
    price : 1700

  };

  console.log("product : ", product)

  // 생성된 객체 내부 값 얻어오는 방법
  // 1. 객체명.key : 일반적인 방법
  console.log(product.productName)
  console.log(product.brand);
  console.log(product.price);


  // 2. 객체명["key"] : key에 특수문자, 공백 포함 시 사용
  //    + for문과 같이 사용 하는 경우
  console.log(product["productName"]);
  console.log(product["brand"]);
  console.log(product["price"]);

  // ---------------------------------------------------------------

  // 2. 객체에 저장된 값 수정.삭제

  // 1) 수정 - key가 중복되면 새로운 value 덮어쓰기
  // 객체.기존key = 새 value;
  // 객체["기존key"] = 새 value;

  product.price = 1500;

  person["age"] = 23;
  console.log("수정된 product : ", product)
  console.log("수정된 person : ", person)

  // 2) 삭제 - 객체 내에서 key가 일치하는 요소(k:v) 삭제
  // delete 객체명.key
  // delete 객체명["key"]

  delete person.weight; //person.weight 삭제
  console.log("삭제 확인 : ", person)

});

/* JS 객체에 메서드(함수) 추가 */
const btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", () => {
  const student = {}; // 빈 객체 생성

  // 점 연산자(.) : 객체(object) 내부 접근
  student.name = "홍길동";
  student.age = 20;

  // 객체에 존재하는 함수 == 메서드(method)
  // + 메서드 작성 시 화살표 함수 X (this 문제 발생 할수있음)
  student.introduce = function(){
    const gender = "남자"; // {} block scope

    // 저는 20세 남자 홍길동 입니다.
    alert(`저는 ${this.age}세 ${gender} ${this.name} 입니다.`);

    // 메서드 내에서 this
    // === 메서드가 작성된 객체(여기서는 student)
  }
  //student의 introduce() 호출
  student.introduce();

  //메서드 추가
  student.study = function(subject){
    const str = `${this.name}은 ${subject} 공부를 합니다`
    console.log(str)
  }

  student.study("수학");
  student["study"]("영어");


});


/* 
  this 참조 변수 위치에 따른 의미
  1) 객체 메서드(함수)에서 this === 현재 객체

  2) 
  <button onclick="testFn(this)">테스트</button>
  btn.onclick = function() { console.log(this);}
  btn.addEventListener("click", function(){
    console.log(this);
  })
  
  3) 일반 함수, 화살표 함수, 전역 변수에서 this
      === window 객체
*/

/* 생성자 함수 */
/** 학생 생성자 함수 정의 
 * @param garde  : 전달 받은 학년 
 * @param ban    : 전달 받은 반
 * @param number : 전달 받은 번호
 * @param name   : 전달받은 이름
*/
function Student(grade, ban, number, name){
  // 전달 받은 값을
  // 생성된 객체의 필드로 대입

  // 생성된 Student 객체의 key가 grade인 필드에
  // value로 전달 받은 grade를 대입
  this.grade = grade;
  this.ban = ban;
  this.number = number;
  this.name = name;

  //메서드(객체의 함수)
  this.inform = function(){
    let str =  `${this.grade}학년 ${this.ban}반 ${this.number} 번 ${this.name}`;
    return str;
  };
};


/* ---------------------------------------------------------------------------------- */

/* 추가된 학생 객체를 모아둘 객체 배열 생성 */
// 객체 배열 : 객체만 저장된 배열
const studentList = [
  new Student(1, 1, 1, "고현우"),
  new Student(1, 1, 2, "김관민"),
  new Student(1, 1, 3, "김구남"),
];

/* 학생 추가 버튼 클리 시  입력 된 값을 모두 얻어와
    학생 객체 배열에 추가하기 */

const inputGrade = document.querySelector("#inputGrade")
const inputBan = document.querySelector("#inputBan")
const inputNumber = document.querySelector("#inputNumber")
const inputName = document.querySelector("#inputName")
const addStudent = document.querySelector("#addStudent")

addStudent.addEventListener("click", () => {

  const values = [
    inputGrade.value,
    inputBan.value,
    inputNumber.value,
    inputName.value
  ];

  // 입력되지 않은 값이 있는지 확인
  for(let val of values){
    if(val.trim() === ''){ //입력 안한 칸이있을 경우
      alert("모든 값을 입력 해주세요")
      return;
    }
  }
  // 학생 객체 생성
  const std = new Student(
    Number(values[0]), 
    Number(values[1]), 
    Number(values[2]),
    values[3]);
  // 생성된 학생 객체를
  // 학생 객체 배열 studentList의 제일 마지막으로 추가
  studentList.push(std); // 배열.push(값) : 배열 마지막 요소로 추가
  
  // 추가 완료후 input에 작성된 값 모두 제거
  inputGrade.value = "";
  inputBan.value = "";
  inputNumber.value = "";
  inputName.value = "";
  inputGrade.focus(); //초점 맞추기
});

// ----------------------------------------
/* 학생 조회 버튼 클릭시 
  studentList에 저장된 모든 내용을
  #tbody에 요소를 만들어서 출력
*/
const selectStudent = document.querySelector("#selectStudent");
const tbody = document.querySelector("#tbody");

selectStudent.addEventListener("click", () => {
  tbody.innerHTML = ""; // tbody 내부 내용 모두 삭제
  // studentList를 반복 접근 하면서 tr,th,td 여서 민들어 추가

  const createEl = (tag, text) => {
    const el = document.createElement(tag); //요소 생성
    el.innerHTML = text; //내용추가
    return el; //만들어진 요소 반환
  }

  studentList.forEach((std, index) => {
    // std : studentList에서 하나씩 꺼낸 학생 객체
    // index : 현재 index

    // tr 만들기
    const tr = document.createElement("tr");
    
    const th = createEl("th", index + 1);
    const td1 = createEl("td", std.name);
    const td2 = createEl("td", std.grade);
    const td3 = createEl("td", std.ban);
    const td4 = createEl("td", std.number);

    // tr 조립
    tr.append(th, td1, td2, td3, td4);

    // tbody에 tr추가
    tbody.append(tr)

    // 이름이 작성된 요소(td1)가 클릭 되었을 떄
    td1.addEventListener("click",() => {
      alert(std.inform()); // inform 메서드 반환 결과 alert 출력
    });



  });
  
  // #total에 인원 수 출력
  document.querySelector("#total").innerText = `${studentList.length}명`

});


/* 배열.forEach((item, index) => {
    // item : for문 반복 시 0 인덱스 부터 차례대로 꺼낸 요소
    // index : 현재 반복 접근 중인 index 값

  }) */

/* JSON */
const checkJson = document.querySelector("#checkJson");
checkJson.addEventListener("click", ()=>{
  //JS 객체 생성
  const user = {
    "id" : "user01",
    "pw" : "pass01",
    "email" : "user01@naver.com",
    "phone" : "010-1234-1234"
  };

  console.log("user : ", user, typeof user);

  // JSON.stringify(JS객체) : JS객체 -> JSON(문자열)
  console.log("JSON.stringify(user) :",JSON.stringify(user),typeof JSON.stringify(user));

  const menu = '{"name" : "김밥","price" : 4000}';
  console.log("menu : ", menu , typeof menu);

  // JSON.parse(JSON문자열) : JSON문자열 -> JS 객체
  console.log(JSON.parse(menu), typeof JSON.parse(menu));


});