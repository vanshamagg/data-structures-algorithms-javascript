/**
 * THE MERGE SORT
 */

 /**
  * Merges the elements of the two halves in ascending order
  * @param {Array} arr Array
  * @param {Number} l left starting index
  * @param {Number} mid Mid Point
  * @param {Number} r Right ending index 
  */
function merge(arr, l, mid, r) {

    // copy of left array
    const left = arr.slice(l, mid + 1);

    // copy of right array
    const right = arr.slice(mid + 1, r + 1);

    // initial index of left
    let i = 0;

    // intial index of right
    let j = 0;

    // initial index of the sorted array
    let k = l;

    // inserting the samllest element first
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }

    // inserting remaining elements of LEFT
    for (let start = i; start < left.length; start++ ){
        arr[k] = left[start];
        k++;
    }

    // inserting remaining elements of RIGHT
    for (let start = j; start < right.length; start++) {
        arr[k] = right[start];
        k++;
    }
}
/**
 * Divides the array into two halves
 * @param {Array} arr The Array
 * @param {Number} l Left Starting Index 
 * @param {Number} r Right Ending Index
 */
function mergeSort(arr, l, r) {
    // for breaking the recursion
    if (l >= r) return;

    // finding the mid point of the current array
    let mid = Math.floor((l + r) / 2);

    // breaking the left part of the array into 2 halves recursively
    mergeSort(arr, l, mid);

    // breaking the right part of the array into 2 halves recursively
    mergeSort(arr, mid + 1, r);

    // merging the halves
    merge(arr, l, mid, r);

    return arr;
}

// DRIVER

let arr = [1, 10, 2, 9, 3];
let arr2 =  [90, 80, 70, 60, 1, 50, 40]

console.table(mergeSort(arr2, 0, arr2.length - 1));
