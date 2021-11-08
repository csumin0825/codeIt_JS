// 10. 실습: 세트메뉴 주문하기

// setMenuOrder라는 이름의 함수를 만드세요.
// 여기에 코드를 작성해주세요.
sandwich = prompt("샌드위치 이름을 입력해주세요.");
drink = prompt("음료 이름을 입력해주세요.");

function orderSetMenu(sandwich, drink){
    console.log(`주문하신 ${sandwich}, ${drink} 세트메뉴 나왔습니다!`);
}

// 테스트 코드
orderSetMenu(sandwich, drink);