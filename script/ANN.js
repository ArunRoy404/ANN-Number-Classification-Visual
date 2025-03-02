const clearAllBtn = getElement('clear-all')
clearAllBtn.addEventListener('click',function(){
    boxClear()
})


let isMouseDown = false
const boxContainer = getElement('box-container')
boxContainer.addEventListener('mousedown',function(e){
    console.log(1)
    isMouseDown = true
})

boxContainer.addEventListener('mouseup',function(){
    console.log(2)
    isMouseDown = false
})

boxContainer.addEventListener('mousemove',function(e){
    if(isMouseDown){
        const box = e.target
        if(box.classList.contains('box')){
            box.style.backgroundColor = 'black'
        }
    }
})