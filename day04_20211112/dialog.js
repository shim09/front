// id2가 적용된 요소를 가져옴
const btn1=document.getElementById('id2')
// id3가 적용된 요소를 가져옴
const btn2=document.getElementById('id3')

// addEventListener를 이용해 id2가 적용된 버튼을 눌렀을 때 익명 함수 호출
// 익명함수 : function()만 쓰면 됨.
btn1.addEventListener('click',function(){
    console.log('악명 함수 호출')
    const result=confirm('컨펌함수입니다.')
    if(result) {
        console.log('확인') // true
    } else {
        console.log('취소') // false
    }
})

// addEventListener를 이용해 id3가 적용된 버튼을 눌렀을 때 promtFunction 함수 호출
btn2.addEventListener('click',promptFunction)

function promptFunction(){
    console.log('promptFunction 호출')
}

function alertFunction(){
    console.log('alertFunction 호출')
    alert('안녕하세요')
}