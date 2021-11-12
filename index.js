// switch문
myChoice = Number(prompt('당신의 선택은? (1 or 2)'));

switch(myChoice){
    case 1:
        console.log('토끼');
        break;
    case 2:
        console.log('거북이');
        break;
    default:
        console.log('다시 입력!');
}