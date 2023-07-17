import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        
            for(int i=1; i <= n; i++){
                // i는 1 부터 입력받은 수 n 까지 증가함
                for(int j = 1; j<=i ; j++){
                    //이중반복문 j는 i까지 증가함 
                    if(j<=i){
                        //j와 i가 같아지면 "*"출력
                         System.out.print("*");
                    }
                }
            System.out.println();
            }
    }
}