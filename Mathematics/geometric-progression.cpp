#include <iostream>
#include <cmath>

float nThTerm(int, float, int);
float sum(int, float, int);
using namespace std;

int main()
{

    int a, n;
    float cr;

    cout << "ENTER FIRST TERM : " << endl;
    cin >> a;

    cout << "ENTER COMMON RATIO : " << endl;
    cin >> cr;

    cout << " NUMBER OF TERMS? :" << endl;
    cin >> n;

    cout << a << endl;

    for (int i = 2; i <= n; i++)
    {
        cout << nThTerm(a, cr, i) << endl;
    }

    cout << "SUM OF THESE TERMS :" << sum(a, cr, n) << endl;

    return 0;
}

float nThTerm(int a, float cr, int n)
{
    return a * pow(cr, n);
}

float sum(int a, float cr, int n)
{
    return a * ((pow(cr, n) - 1) / (cr - 1));
}