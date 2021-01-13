/**
 *
 */

/** SIMPLE BUBBLESORT */
function bubbleSort(arr) {
    const length = arr.length;

    for (let pass = 0; pass < length; pass++) {
        for (let i = 0; i < length - pass - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return console.log(arr);
}

/** BUBBLESORT WITH A FLAG */
function bubbleSortImproved(arr) {
    const length = arr.length;
    let swapped = true;
    for (let pass = 0; pass < length && swapped; pass++) {
        // console.log(`PASS :  ${pass}`);
        swapped = false;
        for (let i = 0; i < length - pass - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                swapped = true;
            }
        }
    }
    console.log(arr);
}

let arr = [10, 1, 8, 2, 89, 4];

// bubbleSort(arr);
bubbleSortImproved(arr)