#include <iostream>
#include <vector>
using namespace std;

int searchRecursively(std::vector<int> arr, int start, int end, int query)
{
    if (end >= start)
    {
        const int mid = (start + end) / 2;

        if (arr[mid] == query)
        {
            return mid;
        }
        else if (query < arr[mid])
        {
            return searchRecursively(arr, start, mid - 1, query);
        }
        else if (query > arr[mid])
        {
            return searchRecursively(arr, mid + 1, end, query);
        }
    }
    return -1;
}

int searchIteratively(std::vector<int> arr, int query)
{
    int start = 0;
    int end = arr.size() - 1;

    while (start <= end)
    {
        int mid = (start + end) / 2;

        if (query == arr[mid])
            return mid;
        else if (query < arr[mid])
            end = mid - 1;
        else if (query > arr[mid])
            start = mid + 1;
    }

    return -1;
}
int main()
{
    std::vector<int> arr{1, 2, 3, 4, 5, 6, 7, 8};
    int n = arr.size();
    int query{0};

    cout << " ENTER THE NUMBER THAT YOU WANNA SEARCH :- ";
    cin >> query;
    
    // cout << "INDEX :- " << searchRecursively(arr, 0, n - 1, query) << endl;
    cout << "INDEX :- " << searchIteratively(arr, query) << endl;
    return 0;
}