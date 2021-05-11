#include <iostream>

using namespace std;

int maxWindowSum(int arr[], int n, int k)
{
    int maxSum = 0, windowSum;

    // sum of window of first 'k' elements
    for (int i = 0; i < k; i++)
        maxSum += arr[i];

    windowSum = maxSum;

    for (int i = k; i < n; i++)
    {
        windowSum += arr[i] - arr[i - k];
        maxSum = max(windowSum, maxSum);
    }
    return maxSum;
}

int main()
{
    int arr[] = {1, 4, 2, 10, 2, 3, 1, 0, 20};
    int n = sizeof(arr) / sizeof(arr[0]);
    int k = 4;

    const int maxSum = maxWindowSum(arr, n, k);

    cout << "MAX WINDOW SUM : " << maxSum << endl;

    return 0;
}
