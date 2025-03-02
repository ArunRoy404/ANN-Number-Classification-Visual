let a = []
initializeArray()
function initializeArray(){
    for(var i =0;i<400;i++){
        a[i] = 0;
    }    
}
const clearAllBtn = getElement('clear-all')
clearAllBtn.addEventListener('click',function(){
    boxClear()
    initializeArray()
})


let isMouseDown = false
document.addEventListener('mousedown',function(e){
    isMouseDown = true
})

document.addEventListener('mouseup',function(){
    isMouseDown = false
})

document.addEventListener('mousemove',function(e){
    if(isMouseDown){
        const box = e.target
        e.preventDefault()
        e.stopPropagation()
        if(box.classList.contains('box')){
            box.style.backgroundColor = 'black'
            const index = parseInt(box.getAttribute("value")) - 1
            a[index] = 1
        }
    }
})
