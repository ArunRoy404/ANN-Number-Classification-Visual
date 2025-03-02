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


const data = [];
function addData(){
    const label = document.getElementById('number').value
    const dataCell = [label,a]
    data.push(dataCell)
    boxClear()
}
document.getElementById('add-data').addEventListener('click',function(){
    addData()
})

document.getElementById('download-data').addEventListener('click',function(){
    const csvData = data.map(e => e.join(",")).join("\n");
    const blob = new Blob([csvData], { type: 'text/csv' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "data.csv";
    link.click();
})

