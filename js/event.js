// output-btnというidを持つHTML要素を取得し、定数に代入する
const outputBtn = document.getElementById('output-btn');

// HTML要素がクリックされたときにイベント処理を実行する
outputBtn.addEventListener('click', () => {
  console.log('クリックされました！');
});

// add-btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('add-btn');
// parent-listというidを持つHTML要素を取得し、定数に代入する
const parentList = document.getElementById('parent-list');

addBtn.addEventListener('click', () => {
  const childList = document.createElement('li');
  
  childList.textContent = 'これはリスト要素です';

  parentList.appendChild(childList);
});  

// count-btnというidを持つHTML要素を取得し、定数に代入する
const countBtn = document.getElementById('count-btn');

// HTML要素がクリックされたときにイベントっ処理を実行する
countBtn.addEventListener('click', () => {
  // テキストボックスに入力された文字列を取得する
  const text = document.forms.textForm.textBox.value;

  // 取得した文字列の文字数を出力する
  console.log(text.length + '文字');
});

const areaBtn = document.getElementById('area-btn');

areaBtn.addEventListener('click', () => {
  const areaValue = document.forms.areaForm.area.value;

  console.log(areaValue);
});

const osBtn = document.getElementById('os-btn');

osBtn.addEventListener('click', () =>{
  const osCheckList = document.forms.osForm.os;

  for (let i = 0; i < osCheckList.length; i++) {
    if (osCheckList[i].checked) {
      console.log(osCheckList[i].value);
    }
  }
});