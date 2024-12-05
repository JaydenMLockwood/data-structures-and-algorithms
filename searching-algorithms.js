import { quickSort } from './sorting-algorithms.js';

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
    let sortedArray = quickSort(arr);
    let left = 0;
    let right = sortedArray.length - 1;

    while(left <= right){
        let mid = Math.floor((left+right)/2)

        if(sortedArray[mid] == value){
            return mid;
        }

        if(sortedArray[mid] < value){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return -1;
}
