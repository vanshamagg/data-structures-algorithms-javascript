// SIMPLE ROTATION

const simpleRotation = (arr, k) => {
    console.log("Original Array");
    console.table(arr);

    let temp = [];
    // copy first k elements in to a temp array
    for (let i = 0; i < k; i++) temp[i] = arr[i];

    // left shift all elements after kth element
    for (let i = 0; i < arr.length - k; i++) arr[i] = arr[i + k];

    console.log("After Soft Copy");
    console.table(arr);

    // fill the empty slots at the end
    for (let i = 0; i < k; i++) arr[i + arr.length - k] = temp[i];

    console.table(arr);
};

// ROTATION WIHTHOUT EXTRA SPACE
const rotationWithoutSpace = (arr, k) => {
    for (let j = 0; j < k; j++) {
        let temp = arr[0];
        for (let i = 0; i < arr.length - 1; i++) arr[i] = arr[i + 1];
        arr[arr.length - 1] = temp;
    }

    console.table(arr);
};

// reversing an array (swapping)
const reversing = (arr) => {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--;
    }

    console.table(arr);
};

// reversing an array (recursion)
const recursivelyReverse = (arr, start, end) => {
    if (start > end) {
        console.table(arr);
        return;
    }

    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    return recursivelyReverse(arr, start + 1, end - 1);
};

// PREFIX SUM
function prefixSum(arr) {
    console.log(arr);

    const n = arr.length;
    const prefix = [];
    prefix[0] = arr[0];

    for (let i = 1; i < n; i++) prefix[i] = prefix[i - 1] + arr[i];

    console.table(prefix);
    return prefix;
}

// calculating the sum of a range using prefix sum
function prefixRangeSum(arr, i, j) {
    const prefix = prefixSum(arr);
    let sum = 0;
    if (i === 0) sum = prefix[j];
    else sum = prefix[j] - prefix[i - 1];
    console.log(" Sum - ", sum);
    return sum;
}

// Equilibrium Index, index where right sum === left sum;
// NAIVE SOLUTION
function equilibriumIndex(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        let leftsum = 0;
        for (let j = 0; j < i; j++) leftsum += arr[j];

        let rightsum = 0;
        for (k = i + 1; k < n; k++) rightsum += arr[k];

        if (leftsum === rightsum) {
            console.log("Equilibrium Index ", i);
            return i;
        }
    }
    if (i === n) {
        console.log("NO EQUILIBRIUM INDEX");
        return -1;
    }
}

// Equilibrium Index, tricky solution

function equilibriumIndexv2(arr) {
    const n = arr.length;
    let sum = 0;
    let leftsum = arr[0];

    // calculating the entire sum
    for (elem in arr) {
        sum += elem;
    }

    for (let i = 0; i < n; i++) {
        // sum is rightsum now
        sum -= arr[i];

        if (sum === leftsum) {
            console.log("Equilibrium Index  - ", i);
            return i;
        }
        leftsum += arr[i];
    }
}

