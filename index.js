// Scope : 범위, 영역
let x = 3;

function myFunction(){  // 블록문
    let x = 5;
    console.log(x);
}

myFunction();
console.log(x);