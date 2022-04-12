let $add_red = document.querySelector(`.add-red`);
let $box = document.querySelector(`.box`);
let $add_btn = document.querySelector(`.add-btn`);
let $delete_btn = document.querySelector(`.delete-btn`);
let $text_btn = document.querySelector(`.text-btn`);
let $txt = document.querySelector(`.txt`);
let $reset_btn = document.querySelector(`.reset-btn`);
let $toggle_btn = document.querySelector(`.toggle-btn`);
let $image_btn = document.querySelector(`.image-btn`);


let OnOff = true;

$add_red.addEventListener(`click`,(e)=>{
    $box.classList.add(`red`);  
})

$add_btn.addEventListener(`click`,(e)=>{
    // let $box = document.querySelector(`.box`);
    // console.log($box.classList);
    let $div = document.createElement(`div`);
    for(let i=0; i<$box.classList.length; i++){
        $div.classList.add($box.classList[i]);
    }
    document.body.appendChild($div);
})

$delete_btn.addEventListener(`click`,(e)=>{
    let $box = document.querySelectorAll(`.box`);
    document.body.removeChild($box[$box.length-1]);
})

$text_btn.addEventListener(`click`,(e)=>{
    let $box = document.querySelectorAll(`.box`);
    let $txt = document.querySelector(`.txt`);
    for(let i=0; i<$box.length; i++){
        $box[i].innerHTML = `${$txt.value}`;
    }
})

$reset_btn.addEventListener(`click`,(e)=>{
    let $box = document.querySelectorAll(`.box`);
    for(let i=0; i<$box.length; i++){
        document.body.removeChild($box[i]);
    }
})

$toggle_btn.addEventListener(`click`,(e)=>{
    let $box = document.querySelectorAll(`.box`);
    if(OnOff == true) {
        for(let i=0; i<$box.length; i++){
            $box[i].style.visibility = `hidden`; 
        }
        return OnOff = false;
    }
    else {
        for(let i=0; i<$box.length; i++){
            $box[i].style.visibility = `visible`; 
        }
        return OnOff = true;
    }
})

$image_btn.addEventListener(`click`,(e)=>{
    let $box = document.querySelectorAll(`.box`);
    // console.log($box.length);
    if($box.length == 0){
        let $div = document.createElement(`div`);
        let $img = document.createElement(`img`);
        $img.setAttribute(`src`,`https://i.imgur.com/69NjYBH.png`);
        $div.appendChild($img);
        $div.classList.add(`box`);

        document.body.appendChild($div);
    }
    else{
        let $img = document.createElement(`img`);
        $img.setAttribute(`src`,`https://i.imgur.com/69NjYBH.png`);
        for(let i=0; i<$box.length; i++){
            $box[i].appendChild($img);
        }
    } 
})  