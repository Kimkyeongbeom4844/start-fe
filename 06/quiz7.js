let qs = (a) => document.querySelector(a);
let PI = (a) => parseInt(a);

let $point = qs('#point');
let $life = qs('#life');
let $box = qs('.box');
let $bug = qs('#bug');


let pointInt = PI($point.innerHTML);
let lifeInt = PI($life.innerHTML);


let lifeInnerHTML = () => {
    $life.innerHTML = lifeInt;
}
let bugPosition = () => {
    //범위는 0px ~ 380px(bug가 20px)
    let randomX = Math.random() * 380;
    let randomY = Math.random() * 380;
    $bug.style.left = `${randomX}px`;
    $bug.style.top = `${randomY}px`;
    // console.log(`X : ${randomX}px, Y : ${randomY}px`);
}
let addPoint = (e)=>{
    e.stopPropagation(); //이벤트 전파 방지
    pointInt += 1;
    $point.innerHTML = pointInt;
}
let loseLife = (e)=>{
    if(lifeInt > 1){
        lifeInt -= 1;
        lifeInnerHTML();
    }
    else {
        lifeInt = 0;
        lifeInnerHTML();
        alert('GAME OVER');
        window.location.reload();
    }
}


$box.addEventListener('click',loseLife);
$bug.addEventListener('click',addPoint);
setInterval(bugPosition,900);