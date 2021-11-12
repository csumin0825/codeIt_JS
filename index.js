 // 실습 : for문 연습하기

 // 여기에 코드를 작성해 주세요.
 for(let i = 1; i<= 100; i++){
     if (i %2 == 0){
         console.log(i);
     }
 }


// 실습 : for문 더 연습하기

 function printTriangle(height) {
    plus='';
        // 여기에 코드를 작성해 주세요.
        for(let i = 0; i<height; i++){
            plus += '*';

            console.log(plus);
        }
    }
    
    
    // 테스트 코드
    console.log('높이: 1');
    printTriangle(1);
    
    console.log('높이: 3');
    printTriangle(3);
    
    console.log('높이: 5');
    printTriangle(5);