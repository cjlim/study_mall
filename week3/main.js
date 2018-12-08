// bubbling 을 이용해 버튼 상위요소에 이벤트를 넣어서 탭 적용
document.getElementById('js-tab-buttons').addEventListener('click', (e)=>{
  console.log(e.target)
  console.log(e.currentTarget)

  var target = e.target;
  var buttons = e.currentTarget

  target.classList.add('active');
});