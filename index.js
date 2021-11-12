// 상수(constant)
const PI = 3.14;  // 상수는 대문자
let radius = 0;

function area(){
    return `반지름의 길이 : ${radius}, 원의 넓이 : ${radius*PI}`;
}

radius = 5;
console.log(area());