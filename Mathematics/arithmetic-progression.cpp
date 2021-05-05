#include <iostream>

int nthTerm(int, int, int);
int sumNTerms(int, int, int);

using namespace std;

int main()
{

    int a, d;
    int n;

    cout << "ENTER THE FIRST TERM : " << endl;
    cin >> a;

    cout << "ENTER THE COMMON DIFFERENCE : " << endl;
    cin >> d;

    cout << "ENTER THE NUMBER OF TERMS: " << endl;
    cin >> n;

    cout << "/////////////////////////" << endl;
    cout << "AP SEQUENCE IS AS FOLLOWS" << endl;
    cout << "/////////////////////////" << endl;
    cout << 1 << "."
         << " " << a << endl;
    for (int i = 2; i <= n; i++)
    {
        cout << i << "."
             << " " << nthTerm(a, d, i) << endl;
    }

    cout << "SUM OF FIRST " << n << " TERMS : " << sumNTerms(a, d, n) << endl;

    return 0;
}

int nthTerm(int a, int d, int n)
{
    return a + (n - 1) * d;
}

int sumNTerms(int a, int d, int n)
{
    return (n / 2) * ((2 * a) + (n - 1) * d);
}