const clearAllBtn = getElement('clear-all')
clearAllBtn.addEventListener('click',function(){
    boxClear()
})


let isMouseDown = false
document.addEventListener('mousedown',function(e){
    isMouseDown = true
    console.log(1)
})

document.addEventListener('mouseup',function(){
    isMouseDown = false
    console.log(2)
})

document.addEventListener('mousemove',function(e){
    if(isMouseDown){
        console.log(3)
        const box = e.target
        e.preventDefault()
        e.stopPropagation()
        if(box.classList.contains('box')){
            box.style.backgroundColor = 'black'
        }
    }
})