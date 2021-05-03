#include <iostream>
int numberOfDigits(int);

using namespace std;

int main()
{
    cout << numberOfDigits(536) << endl;
}

int numberOfDigits(int number)
{
    if (number == 0)
        return 0;

    unsigned int digitCount = 1;

    while (number / 10 != 0)
    {
        number = number / 10;
        digitCount++;
    }

    return digitCount;
}

