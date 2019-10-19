let inputs = document.getElementsByClassName('buts');
let text = document.getElementById('text');

function getValue(value) {
   
    text.value += value;
    
}
function doSums() {
    alert(eval(text.value))
}



function removeLast() {
    let index = text.value.length;
    console.log(index);
    text.value = text.value.substring(0, index-1);
}
function lolikop() {
    text.value = ''
}

