// bubbling 을 이용해 버튼 상위요소에 이벤트를 넣어서 탭 적용
//ul에 addEventListener를 달아줌

var tabs = document.querySelectorAll('.tab-button');
var tabContents = document.querySelectorAll('.tab-content');

function activeTabs(n){
  // - 모든 버튼에 active 제거
  // - 누른 버튼 0에 active 추가
  // 컨텐츠 모두 안보이게 처리
  // 누른 버튼과 같은 0번 컨텐츠만 보여줌

  for(var i = 0; i < tabs.length; i++){
    tabs[i].classList.remove('active');
    tabContents[i].classList.remove('show-tab');
  }
  tabs[n].classList.add('active');
  tabContents[n].classList.add('show-tab');
}

document.getElementById('js-tab-buttons').addEventListener('click', (e)=>{

  var target = e.target;

  //1 지금 누른게 버튼 0일경우 if

  //data attribute
  var id = target.dataset.id;
  activeTabs(id);
  //activeTabContent(id);
});


// 장바구니 추가 기능 만들기

//1. addCart 버튼을 눌렀을때
// - form data를 가져와야함.
// - 오브젝트 data를 만든다 {data}
// - 오브젝트 data를 문자열로 만든다 JSON.stringify()
// - 로컬 스토리지에 저장한다.
// $('#add').on('click', ()=>{
//   var data = {
//     name : 'Blossom Dress',
//     number: $('#quantity').val(),
//     size: $('#size').val(),
//     color: $('#color').val(),
//   };
//
//   var stringData = JSON.stringify(data);
//   localStorage.setItem('cart', stringData);
//   console.log(data)
// });

document.getElementById('add').addEventListener('click', ()=>{
  var num = document.getElementById("quantity").value || null;
  var size = document.getElementById("size").value || null;
  var color = document.getElementById("color").value || null;

  if(!num){
    alert('수량을 입력 해 주세요.');
    document.getElementById("quantity").focus();
  }

  var data = {
    name : 'Blossom Dress',
    number: num,
    size: size,
    color: color,
  };

  var stringData = JSON.stringify(data);
  localStorage.setItem('cart', stringData);
});