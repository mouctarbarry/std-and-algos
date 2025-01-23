/**
 * Bubble Sort
 * It's a simple sorting algorithm that repeatedly steps through the list (array) to be sorted,
 * compares adjacent elements and swaps them if they are in the wrong order.
 * Repeat the process util the two firsts elements are in their right place
 */


const notSorted = [8, 7, 4, 10, 1, 5, 3, 9, 2, 6];

export function simpleBubbleSort(arr: number[]): number[]{
    let n = arr.length;
    for (let i=0; i<n; i++){
        for (let j = i+1; j<n; j++){
            if(arr[j] < arr[i] ){
                [arr[j], arr[i]] = [arr[i], arr[j]];
            }
        }
    }
    return arr;
}

export function improvedBubbleSort(arr: number[]): number[]{
    let n = arr.length;
    for (let i=0; i<n; i++){
        let swapped = false;
        for (let j=0; j < n - 1 - i ; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return arr
}

const sorted1 = improvedBubbleSort(notSorted);
const sorted2 = simpleBubbleSort(notSorted);
console.log(`Bubble sorting ${sorted1}`)
console.log(`Bubble improved sorting ${sorted2}`)


