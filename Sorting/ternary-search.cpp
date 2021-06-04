#include <iostream>
#include <vector>

using namespace std;

int ternaryRecursive(std::vector<int> arr, int start, int end, int query)
{

    // divide arr into 3 parts
    const int mid1 = start + (end - start) / 3;
    const int mid2 = end - (end - start) / 3;

    if (end >= start)
    {
        // if query is equal to mid1
        if (query == arr[mid1])
            return mid1;

        // if query is equal to mid2
        else if (query == arr[mid2])
            return mid2;

        // if query is less than mid1 recurse for 1st part of the array
        else if (query < mid1)
            return ternaryRecursive(arr, start, mid1 - 1, query);

        // if query is greater than mid2 recurse for 3rd part of the array
        else if (query > mid2)
            return ternaryRecursive(arr, mid2 + 1, end, query);

        // query lies in the middle part, recurse for the 2nd part
        else
            return ternaryRecursive(arr, mid1 + 1, mid2 - 1, query);
    }
    return -1;
}

int ternaryIterative(std::vector<int> arr, const int query)
{

    int start = 0;
    int end = arr.size() - 1;

    while (end >= start)
    {
        const int mid1 = start + (end - start) / 3;
        const int mid2 = end - (end - start) / 3;

        if (query == arr[mid1])
            return mid1;

        else if (query == arr[mid2])
            return mid2;

        else if (query < arr[mid1])
            end = mid1 - 1;

        else if (query > arr[mid2])
            start = mid2 + 1;

        else
        {
            start = mid1 + 1;
            end = mid2 - 1;
        }
    }

    return -1;
}

int main()
{
    std::vector<int> arr{1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    int query{0};

    cout << "ENTER THE NUMBER YOU WANNA SEARCH : ";
    cin >> query;

    // cout << ternaryRecursive(arr, 0, arr.size() - 1, query) << endl;
    cout << ternaryIterative(arr, query) << endl;

    return 0;
}