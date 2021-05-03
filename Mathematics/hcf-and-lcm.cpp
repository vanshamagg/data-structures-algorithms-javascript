#include <iostream>
int hcf(int, int);
int lcm(int, int);

using namespace std;

int main()
{

    int a = 10, b = 90;
    cout << "HCF OF " << a << " AND " << b << " IS: " << hcf(a, b) << endl;
    cout << "LCM OF " << a << " AND " << b << " IS: " << lcm(a, b) << endl;
    
    return 0;
}

int hcf(int a, int b)
{
    if (a == 0)
        return b;

    return hcf(b % a, a);
}

int lcm(int a, int b) {
    //  a * b = HCF * LCM
    // -> LCM = (a * b) / HCF
    return (a * b)/hcf(a, b);
}