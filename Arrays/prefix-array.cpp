#include <iostream>
using namespace std;
int print(int arr[], int n)
{

    for (int i = 0; i < n; i++)
        cout << arr[i] << endl;

    return 0;
}

int sum(int prefix[], int start, int end)
{
    return 0;

}
int* generatePrefixArray(int arr[], int n)
{
    static int *prefix;
    
    prefix[0] = arr[0];

    for (int i = 1; i < n; i++)
        prefix[i] = prefix[i - 1] + arr[i];

    print(prefix, n);
    return prefix;
}

int main()
{

    int arr[] = {1, 2, 3, 4, 5, 6, 7};
    int n = sizeof(arr) / sizeof(arr[0]);

    int *prefix = generatePrefixArray(arr, n);
    return 0;
}
