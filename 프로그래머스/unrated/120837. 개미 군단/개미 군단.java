class Solution {
    public int solution(int hp) {
        int answer = hp / 5; //hp 를 5로 나눈 값을 answer 에 저장함 (answer 에 누적)
        hp %= 5; //5로 나누고 난 후의 hp를 저장함 (hp에 누적)
        
        answer += hp / 3; //answer에 저장된 값중 3으로 나눈 값을 answer에 더해줌
        hp %= 3; //3으로 나누고 난 후의 남은 hp를 저장
        
        answer += hp / 1;  //answer에 저장된 값의 나머지를 1로 나눠준 후 더해줌
     
        return answer;
    }
}