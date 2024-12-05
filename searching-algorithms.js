const myArray = [9,5,6,3,4,2,1,7,8];
const searchNum = 2;

function linearSearch(arr, value){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == value){
            return i;
        }
    }
    return -1;
}

function binarySearch(arr,value){
    
}