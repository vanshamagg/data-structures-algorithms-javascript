#include <iostream>

using namespace std;

int main()
{

    int arr[]{10, 20, 70, 30, 50};
    int n = sizeof(arr) / sizeof(arr[0]);
    int number{0}, index{-1};

    cout << "ENTER THE NUMBER : ";
    cin >> number;

    for (int i = 0; i < n; i++)
    {
        if (arr[i] == number)
        {
            index = i;
        }
    }

    cout << index << endl0;

    return 0;
}