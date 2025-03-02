function getElement(id){
    return document.getElementById(id)
}
function boxClear(){
    const allBox = document.querySelectorAll('.box')
    for(const box of allBox){
        box.style.backgroundColor = 'lightGray'
    }
}