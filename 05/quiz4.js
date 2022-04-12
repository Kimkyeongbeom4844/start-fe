let $box = document.querySelector(".box");
let $box1 = document.querySelector(".box1");

let mouseMove = (e) => {
    $box.addEventListener('mousemove',moving)
}

let mouseStop = (e) => {
    $box.removeEventListener('mousemove',moving);
}

let moving = (e)=>{
    $box.style.left = `${e.pageX-$box.offsetWidth/2}px`;
    $box.style.top = `${e.pageY-$box.offsetHeight/2}px`;
}

$box.addEventListener('mousedown',mouseMove);
$box.addEventListener('mouseup',mouseStop);