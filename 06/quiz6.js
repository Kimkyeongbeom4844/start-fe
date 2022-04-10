let $num = document.querySelector(`#num`);
let $result = document.querySelector(`#result`);
let $btn = document.querySelector(`#btn`);

$btn.addEventListener(`click`,(e)=>{
    let numCheck = parseInt($num.value);
    if(isNaN(numCheck)){
        alert(`숫자가 아닙니다`);
    }
    else {
        let $del = document.querySelectorAll(`.del`);
        for(let i=0; i<$del.length; i++){
            $result.removeChild($del[i]);
        }
        for(let i=1; i<=9; i++){
            let $div = document.createElement(`div`);
            let $Text = document.createTextNode(`${numCheck} X ${i} = ${numCheck*i}`);
            $div.setAttribute(`class`,`del`);
            $div.appendChild($Text);
            $result.appendChild($div);
        }
    }
})