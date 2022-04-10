let $ = (q) => document.querySelector(q);
let $box = $('.box');
let $box1 = $('.box1');

let DragAndDrop = (b) =>{
    b.addEventListener('mousedown',(e)=>{
        b.addEventListener('mousemove',moving)
    })
    
    b.addEventListener('mouseup',(e)=>{
        b.removeEventListener('mousemove',moving)
    })
    let moving = (e) => {
        b.style.left = `${e.pageX-b.offsetWidth/2}px`;
        b.style.top = `${e.pageY-b.offsetHeight/2}px`;
    }
}

DragAndDrop($box);
DragAndDrop($box1);

// let moving = (e)=>{
//     $box.style.left = `${e.pageX-$box.offsetWidth/2}px`;
//     $box.style.top = `${e.pageY-$box.offsetHeight/2}px`;
// }
// $box.addEventListener('mousedown',(e)=>{
//     $box.addEventListener('mousemove',moving)
// })

// $box.addEventListener('mouseup',(e)=>{
//     $box.removeEventListener('mousemove',moving)
// })

