const templates = {

  python:
`a, b = map(int, input().split())
print(a + b)`,

  cpp:
`#include <iostream>
using namespace std;

int main() {

    int a, b;
    cin >> a >> b;

    cout << a + b;

    return 0;
}`,

  java:
`import java.util.*;

public class Main {

    public static void main(String[] args) {

        Scanner sc =
            new Scanner(System.in);

        int a = sc.nextInt();
        int b = sc.nextInt();

        System.out.println(a+b);
    }
}`,

  c:
`#include <stdio.h>

int main() {

    int a,b;

    scanf("%d %d",&a,&b);

    printf("%d",a+b);

    return 0;
}`
};

export default templates;