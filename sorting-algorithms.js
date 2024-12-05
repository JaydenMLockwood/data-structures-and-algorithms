const myArray = [9,5,6,3,4,2,1,7,8];

//bubble sort
function bubbleSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//selection sort
function selectionSort(arr){

    for (let i = 0; i < arr.length - 1; i++){
        let currentLow = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[currentLow]){
                currentLow = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[currentLow];
        arr[currentLow] = temp;
    }
    return arr;
}

//insertion sort
function insertionSort(arr){

    for(let i = 1; i < arr.length; i++){
        let index = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > index){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = index;
    }
    return arr;
}

//quick sort
function quickSort(arr){
    function partition(arr, low, high){
        let pivot = arr[high];
        let i = low - 1;

        for(let j = low; j < high; j++){
            if(arr[j] <= pivot){
                i++;
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        let temp = arr[i+1];
        arr[i+1] = arr[high];
        arr[high] = temp;
        return i+1;
    }

    function sorting(arr, low, high){
        if(low < high){
            let pivotIndex = partition(arr,low,high);
            sorting(arr,low,pivotIndex-1);
            sorting(arr,pivotIndex+1,high);
        }
    }
    sorting(arr, 0, arr.length-1);

    return arr;
}

//counting sort
function countingSort(arr){

    let highest = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > highest){
            highest = arr[i];
        }
    }

    let countingArray = new Array(highest+1).fill(0);
    for(let i = 0; i < arr.length; i++){
        countingArray[arr[i]] += 1;
    }

    let newArray = [];
    for(let i = 0; i < countingArray.length; i++){
        while(countingArray[i] > 0){
            newArray.push(i);
            countingArray[i] = countingArray[i]-1;
        }
    }
    return newArray;
}

//bogo sort
function bogoSort(arr){
    let count = 0;
    while(true){
        count++;
    //Fisher-Yates algoritm
        for (let i = arr.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            let k = arr[i];
            arr[i] = arr[j];
            arr[j] = k;
        }

        let sorted = true;
        for(let j = 0; j < arr.length-1; j++){
            if(arr[j] < arr[j+1]){
                continue;
            }else{
                sorted = false;
                break;
            }
        }
        if(sorted){
            break;
        }
    }
    console.log(count);
    return arr;
}

//miracle sort
function miracleSort(arr){
    return arr;
}

