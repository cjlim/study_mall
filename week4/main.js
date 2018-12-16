// bubbling 을 이용해 버튼 상위요소에 이벤트를 넣어서 탭 적용
//ul에 addEventListener를 달아줌

// 복습2
function activeTab(buttons, contents, activeId){
  for (var i = 0; i < tabs.length; i++){
    buttons[i].classList.remove('active');
    contents[i].classList.remove('show-tab');
  }
  buttons[activeId].classList.add('active');
  contents[activeId].classList.add('show-tab');
}


//숙제1. 간단한 class 만들기
//(배경) 여러분은 모쏠남 모임을 개최하고 있습니다. 모쏠참가자에 대한 정보를 자바스크립트를 이용해 관리하기로 합니다.

//참가자1. 박명수, 28, 고려대 공대
//참가자2. 김철수, 33, 연세대 전기전자
//참가자3. 박호홍, 40, 서울대 생명과학

//- 다음 참가자들의 name, age, school 정보가 담긴 object들을 만들려고 합니다.
//(문제) class만들어 각각 참가자1,2,3이라는 이름을 가진 object 세개를 뽑아내보세요. console.log(참가자1.name); 이렇게 쓰면 콘솔창에 박명수라는 이름이 나오는게 목표입니다.

function MossolNam(name, age, school){
  this.name = name;
  this.age = age;
  this.school = school;
}

var chamgaja01 = new MossolNam('박명수', 28, '고려대 공대');
var chamgaja02 = new MossolNam('김철수', 33, '연세대 전기전자');
var chamgaja03 = new MossolNam('박호홍', 40, '서울대 생명과학');

console.log(chamgaja01.name);

//숙제2. class 응용
//(배경) 생각해보니 모쏠남 모임에 유저들의 성별값을 집어넣는걸 까먹었습니다. 다행히 모든 참가자는 남자입니다.

//(문제) console.log(참가자1.gender); 라고 입력하면 '남자'라는 값이 나오도록 모든 참가자의 gender 값에 남자라는 value를 부여해보세요. 단, 치사하게 class 내부 코드를 건들지 맙시다.

MossolNam.prototype.gender = '남자';
console.log(chamgaja02.gender);



//숙제3. class 응용 어려운거
//(배경) 아까 거기에 모쏠 스타일 인사기능을 하나씩 만들려고 합니다.

//(문제)

//참가자1.sayHi()를 입력하면 콘솔창에 "안녕하세요, 28살 박명수입니다."
//참가자2.sayHi()를 입력하면 콘솔창에 "안녕하세요, 33살 김철수입니다."
//참가자3.sayHi()를 입력하면 콘솔창에 "안녕하세요, 40살 박호홍입니다."

//이렇게 나오도록 아까 만든 class에 sayHi()기능을 추가해보세요. 한두줄만 추가하면 되는데, 이번엔 class 내부 코드 건드려도 봐드립니다. 아마도 구글 검색이 조금 필요할듯 합니다.

MossolNam.prototype.sayHi = function(){
  return "안녕하세요, " + this.age + "살 " + this.name + "입니다.";
};

console.log(chamgaja01.sayHi());
console.log(chamgaja02.sayHi());
console.log(chamgaja03.sayHi());


// 메뉴 투명화
// 스크롤바를 50px정도 내리면
// a.navbar-brand 에.small-font 클래스 추가

$(window).on('scroll', function () {
  var top = $(this).scrollTop();
  console.log(top);
  if(top > 50){
    $('.top-nav').addClass('none-transparent');
    $('a.navbar-brand').addClass('small-font');
  }else{
    $('.top-nav').removeClass('none-transparent');
    $('a.navbar-brand').removeClass('small-font');
  }
});