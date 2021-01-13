function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }

        // swapping the minimum of the selection and the first element
        // of the selection

        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    console.log(arr);
    return arr;
}

selectionSort([5, 4, 3, 2, 1]);
selectionSort([6, 1, 90, 2, 56, 3]);
