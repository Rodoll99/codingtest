class Solution {
    public int solution(int price) {
        int answer = 0;
            if(price >= 500000) {
                answer = (int)(price*0.8);
            }else if (price >= 300000) {
                answer = (int)(price*0.90);
            }else if (price >= 100000) {
                answer = (int)(price *0.95);
                //형변환 이용 소숫점을 없애줌
            }else {
                answer = price;
                // 다해당하지않을 경우 10만원 이하의 금액이므로 할인 x
            }
        //오류 -> 가격을 낮은순서부터 적용하니 바로 코드가 실행되어 50만원이 넘어도 5퍼센트밖에 할인되지 않았음. 
        //수정 -> 가격을 높은순서부터 적용해줌
        return answer;
    }
}