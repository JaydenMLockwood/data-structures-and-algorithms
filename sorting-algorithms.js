const myArray = [9,5,6,3,4,2,1,7,8];

//bubble sort
function bubbleSort(arr) {
    let newArray = [...arr];
    
    for (let i = 0; i < newArray.length - 1; i++) {
        for (let j = 0; j < newArray.length - i - 1; j++) {
            if (newArray[j] > newArray[j + 1]) {
                let temp = newArray[j];
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = temp;
            }
        }
    }
    return newArray;
}

//selection sort
function selectionSort(arr){
    let newArray = [...arr];

    for (let i = 0; i < newArray.length - 1; i++){
        let currentLow = i;
        for(let j = i+1; j < newArray.length; j++){
            if(newArray[j] < newArray[currentLow]){
                currentLow = j;
            }
        }
        let temp = newArray[i];
        newArray[i] = newArray[currentLow];
        newArray[currentLow] = temp;
    }
    return newArray;
}

//insertion sort
function insertionSort(arr){
    let newArray = [...arr];

}

