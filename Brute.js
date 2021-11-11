function initValues(numValues) {
    const values = new Array(numValues);
    // fill the array with each value
    for (let i = 0; i < values.length; i++) {
        values[i] = i;
    }
    return values;
}

function getValue(array) {
    if (!array.length) {
        throw new Error("array is empty, no more random values");
    }
    const i = Math.floor(Math.random() * array.length);
    const returnVal = array[i];
    array.splice(i, 1);
    return returnVal;
}

// sample code to use it
const rands = initValues(10000);
while(true){
console.log(getValue(rands));
document.getElementById('passcheck').value = getValue(rands)
check()
}
