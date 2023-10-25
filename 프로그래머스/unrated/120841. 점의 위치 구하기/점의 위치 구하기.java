class Solution {
    public int solution(int[] dot) {
        int answer = 0;
        
        if(dot[0]>0 && dot[1]>0){ 
            //조건문 -> dot[0] 은 주어진 매개변수의 첫번째 자리,
            //dot[1] 은 두번째 자리 
            //-> 첫번째자리가 0보다 큼과 동시에 두번째 자리가 0보다 크면 제 1사분면
            answer = 1;
        } else if(dot[0]<0 && dot[1]>0){
            answer = 2;
        } else if(dot[0]<0 && dot[1]<0){
            answer = 3;
        } else if(dot[0]>0 && dot[1]<0){
            answer = 4;
        }
        return answer;
    }
}