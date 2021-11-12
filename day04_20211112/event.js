const ele1 = document.getElementById('id2')
// addEventListener('이벤트 종류', 실행할 함수)
// 매개변수 2개
// id2로 지정된 요소를 클릭했을 때 아래 내용을 출력
// 익명함수
// ele1.addEventListener('click',function(){
//     console.log('id2가 지정된 요소 클릭됨');
// });

// id2 요소를 클릭했을 때 fun2 함수 호출
ele1.addEventListener('click',fun2);

function fun2(){
    console.log("fun2 함수 호출");
}

function fun1(){
    console.log('함수 호출됨.');
}