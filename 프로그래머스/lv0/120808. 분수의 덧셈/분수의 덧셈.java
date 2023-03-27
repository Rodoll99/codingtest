class Solution {
    public int GCD(int num1, int num2){
        if (num1 % num2 == 0)
            return num2;
            return GCD(num2 , num1 % num2);
    }
    
    public int[] solution(int denum1, int num1, int denum2, int num2) {
        int[] answer;

        denum1 *= num2;
        denum2 *= num1;

        answer = new int[]{denum1 + denum2, num1 * num2};

        int GCD2 = GCD(answer[0], answer[1]);
        answer[0] /= GCD2;
        answer[1] /= GCD2;

        return answer;
    }
}
