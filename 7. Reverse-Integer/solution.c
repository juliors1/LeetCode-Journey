#include <limits.h>
#include <stdio.h>
int reverse(int x)
{
    long reverse = 0;
    while (x != 0)
    {
        int num = x % 10;
        reverse = reverse * 10 + num;

        if (reverse > INT_MAX || reverse < INT_MIN)
        {
            return 0;
        }

        x /= 10;
    }

    return (int)reverse;
}

int main(int argc, char const *argv[])
{
    printf("%d\n", reverse(123));
}
