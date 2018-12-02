// 버튼 0 을 누르면,
// 모든 버튼들의 active가 없어지고, 버튼 0이 active가 되고,
// 모든 내용들에 show-tab 삭제, 내용 0 이 show-tab 들어감.

var tabs = document.querySelectorAll('.tab-button');
var tabContents = document.querySelectorAll('.tab-content');

for (let i = 0; i < tabs.length; i++){
  // 버튼 하나하나에 이벤트를 달아줌..
  tabs[i].addEventListener('click', function(e){
    for(let i = 0; i < tabs.length; i++){
      tabs[i].classList.remove('active');
      tabContents[i].classList.remove('show-tab');
    }
    tabs[i].classList.add('active');
    tabContents[i].classList.add('show-tab');
  });
}

// bubbling 을 이용해 버튼 상위요소에 이벤트를 넣어서 탭 적용


// tabs.forEach(function(tab, i) {
//   tab.addEventListener('click', function(e){
//     tabs.forEach(function (a) {
//       a.classList.remove('active');
//     });
//     // tabs.classList.remove('active');
//     // tabs[1].classList.remove('active');
//     // tabs[2].classList.remove('active');
//
//     this.classList.add('active');
//     tabContents.forEach(function (a) {
//       a.classList.remove('show-tab');
//     });
//
//     // tabContents[0].classList.remove('show-tab');
//     // tabContents[1].classList.remove('show-tab');
//     // tabContents[2].classList.remove('show-tab');
//
//     tabContents[i].classList.add('show-tab');
//   });
// });