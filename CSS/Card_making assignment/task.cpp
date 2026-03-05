#include<iostream>
#include<string>
#include<vector>

using namespace std;

int main()
{
    string color[]={"Red","Green","Blue","Yellow","Violet","Orange"};
    int n=5;

    for(int i=0;i<n;i++)
    {
        cout<<color[i][0]<<(color[i].length()*(i+1))<<" ";

    }

    return 0;

}
