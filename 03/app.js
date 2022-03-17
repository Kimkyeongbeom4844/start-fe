console.log("03");

if("test"){  //true 로 자동 변환
    console.log("true");
}
"2"  + 2; // "22"
2 + 5 + "1" // "71"

//참조타입 : 객체, 배열, 함수
//객체
var a = [1];
var b = a;
b[0] = [2];
console.log(a, b);  //a,b둘다 [2]출력

//배열
var a = { x: 1 };
var b = a;
b.x = 2;
console.log(a, b); //a,b둘다 x : 2출력


//함수
//call by value
function byValue(count) {
    count = count + 2;
}
var count = 3;
byValue(count);
console.log(count); //3


//call by reference
function byReference(count) {
    count.push('2');
}
var count = ['1'];
byReference(count);
console.log(count); // ["1","2"]

var gender = isman ? '남자' : '여자'; //삼항연산자

