//옵셔널 파라미터

function introduce(name, age = 15){
    console.log(`${name}님, 당신의 나이는 ${age}살입니다.`);
}

introduce('수민', 22);
introduce('재현');
introduce();