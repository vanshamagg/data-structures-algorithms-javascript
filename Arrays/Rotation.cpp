#include <iostream>
int simpleRotate(int arr[], int, int);
int simpleWithoutExtraSpace(int arr[], int, int);
int juggling(int arr[], int, int);
int gcd(int, int);

void print(int arr[], int);

using namespace std;

int main()
{

    int length = 6;
    int k = 7;
    int arr[length] = {1, 2, 3, 4, 5, 6, 7, 8, 9};

    // simpleRotate(arr, length, 3);

    // simpleWithoutExtraSpace(arr, length, k);

    juggling(arr, length, k);

    return 0;
}
void print(int arr[], int length)
{
    for (int i = 0; i < length; i++)
    {
        cout << arr[i] << endl;
    }
}

int gcd(int a, int b)
{
    // cout << "A :: " << a << "  B :: " << b << "  B%A " << b % a << endl;
    if (a == 0)
        return b;

    return gcd(b % a, a);
}
int simpleRotate(int arr[], int length, int k)
{
    // store first k elements in a temp[]
    int temp[k];
    for (int i = 0; i < k; i++)
    {
        temp[i] = arr[i];
    }

    // shift the rest of the array by K elements
    for (int i = k; i < length; i++)
    {
        arr[i - k] = arr[i];
    }

    // put the displaced elemtns at the end;

    for (int i = length - k, j = 0; i < length; i++, j++)
    {
        arr[i] = temp[j];
    }

    // print the array
    for (int i = 0; i < length; i++)
    {
        cout << arr[i] << endl;
    }
    return k;
}

int simpleWithoutExtraSpace(int arr[], int length, int k)

{

    for (int i = 0; i < k; i++)
    {
        int temp = arr[0];
        for (int j = 1; j < length; j++)
        {
            arr[j - 1] = arr[j];
        }
        arr[length - 1] = temp;
    }

    print(arr, length);

    return 0;
}

int juggling(int arr[], int length, int k)
{

    int g_c_d = gcd(k, length);

    cout << "GCD : " << g_c_d << endl;

    for (int i = 0; i < g_c_d; i++)
    {
        int temp = arr[i];
        int j = i;
        while (1)
        {
            int s = j + k;

            if (s >= length)
            {
                s = s % length;
            }

            if (s == i)
                break;

            arr[j] = arr[s];

            j = s;
        }

        arr[j] = temp;
    }

    print(arr, length);

    return 0;
}