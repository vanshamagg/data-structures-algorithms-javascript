#include <iostream>
void simpleReverse(int arr[], int length);
void efficientReverse(int arr[], int length);
void recursiveReverse(int arr[], int start, int end);
void print(int arr[], int length);
using namespace std;

int main()
{
    int length = 5;
    int arr[length] = {1, 2, 3, 4, 5};
    // simpleReverse(arr, length);
    // efficientReverse(arr, length);
    recursiveReverse(arr, 0, length -1);
    print(arr, length);
    return 0;
}

void efficientReverse(int arr[], int length)
{

    for (int i = 0, j = length - 1; i < length / 2; i++, j--)
    {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
void simpleReverse(int arr[], int length)
{
    int temp[length];

    for (int i = 0; i < length; i++)
    {
        temp[i] = arr[i];
    }

    for (int i = length - 1, j = 0; i >= 0; i--, j++)
    {
        arr[j] = temp[i];
    }
}
void recursiveReverse(int arr[], int start, int end)
{
    if (start >= end)
        return;

    // swap
    int temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    return recursiveReverse(arr, start + 1, end - 1);
}
void print(int arr[], int length)
{
    for (int i = 0; i < length; i++)
    {
        cout << arr[i] << endl;
    }
}