let $btn = document.querySelector('#btn');
let $min = document.querySelector('#min');
let $max = document.querySelector('#max');
let $box = document.querySelector('#box');


//------MDN 문서 참고한 정수사이 랜덤 난수 생성법-----
let getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1)) + min;
}
//-----

$btn.addEventListener('click',e=>{
    if($box.hasChildNodes() === false){
        let $div = document.createElement('div');
        $div.classList.add('result');
        $box.appendChild($div);
    }
    let $result = document.querySelector('.result');
    let timer = setInterval(()=>{
        $result.innerHTML = getRandomInt(Number($min.value),Number($max.value));
        $btn.disabled = true;
    },100);
    setTimeout(()=>{
        clearTimeout(timer)
        $btn.disabled = false;
    },1500)
})