/**
 * Selection Sort: It's a simple sorting algorithm that works by selecting the smallest element from the
 * array and putting it at the beginning of the array. And then selecting the second smallest and so on.
 * @param arr
 */

function selectionSort(arr: number[]): number[] {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        // Swap the found minimum element with the first element
        if (minIdx !== i) {
            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
        }
    }
    return arr;
}

const arr = [64, 25, 12, 22, 11];
console.log(selectionSort(arr));