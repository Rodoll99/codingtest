function solution(bandage, health, attacks) {
    //attacks 배열엔 공격해오는 시간과 , 데미지가 담겨있음.
    
    // bandage 배열의 세가지 요소를 각 각 time, recovery , bonusRecovery로 지정
    const [time , recovery , bonusRecovery] = bandage;
    // 현재 채력을 health 로 지정함
    let curHealth = health;
    // 최근의 공격 시간을 0으로 저장
    let curAttack = 0;
    //attacks배열을 순회함
    for (const [attackTime , damage] of attacks){
       
    //이전 공격시간과 현재 공격시간의 차이를 구한다.
    const timeGap = attackTime - curAttack -1;
    
    //공격시간의 차이가 붕대를 다 감는 시간보다 길다면 붕대를 다감는데에 성공한 것이므로
    //보너스 힐
    // 시간의 차이와 붕대를 감는 시간을 나눠 소수점을 버려 보너스 힐의 성공 횟수를 구함
    const successHeal = Math.floor(timeGap / time)
    
    //총회복량 계산 . 한후에 최신 체력 업데이트
    //시간의 차이 * 초당회복량 + 추가회복 성공 횟수 * 추가회복량 
    const totalRecovery = timeGap * recovery + successHeal * bonusRecovery;
    
    //현재 체력량에 총 회복량을 더해줌
    curHealth += totalRecovery;
    
    //회복량이 전체체력을 넘어간다면 체력은 그대로
    if(curHealth >= health)
        curHealth = health;

    //데미지를 현재 체력에서 빼줌
    curHealth -= damage;
    
    //체력이 0이하가 된다면 -1 반환
    if(curHealth <= 0 ){
        return -1 ;
    }
    //현재 공격시간을 업데이트 하고 다시 순환
    curAttack = attackTime;
    }
    return curHealth;
}