'use strict'

const maru = [ball1,ball2,ball3,ball4,ball5,ball6,ball7,ball8,ball9,ball10];
console.log(maru);
const btn = document.getElementById('btn');
btn.addEventListener('click',() => {
    window.location.reload();
});

for(let i = 0; i<maru.length+1; i++) {
    console.log(i);


maru[i].onmousedown = function(event) {

    let shiftX = event.clientX - maru[i].getBoundingClientRect().left;
    let shiftY = event.clientY - maru[i].getBoundingClientRect().top;
  
    maru[i].style.position = 'absolute';
    maru[i].style.zIndex = 1000;
    document.body.append(maru[i]);
  
    moveAt(event.pageX, event.pageY);
  
    // ボールを（pageX、pageY）座標の中心に置く
    function moveAt(pageX, pageY) {
      maru[i].style.left = pageX - shiftX + 'px';
      maru[i].style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (3) mousemove でボールを移動する
    document.addEventListener('mousemove', onMouseMove);
  
    // (4) ボールをドロップする。不要なハンドラを削除する
    maru[i].onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      maru[i].onmouseup = null;
    };
  
  };
  
  maru[i].ondragstart = function() {
    return false;
  };

}



