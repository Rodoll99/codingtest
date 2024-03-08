function solution(nums) {
    var answer = 0;
    //nums 에서 소수가 만들어지는 세가지의 수를 임의로 고름
    //그 경우의 수 만큼 result는 올라감
    
    //isPrime => 소수를 판별하게해줄수있는 공식
    //매개변수 숫자 n을 받음
    const isPrime = (n)=>{
        //Math.sqrt()은 n의 제곱근을 반환함
        for(let i = 2; i <= Math.sqrt(n); i++){
            //나머지가 0이라면 i로 나누어떨어지므로 소수가 아님 -> false;
            if(n % i === 0) return false;
        //아니라면 소수이므로 true
        }
        return true;
    }
    // 중복하여 더하면 안되므로 i + 1 , j+ 1을 해주어 각각의 요소를 더할 수 있게함
    for(let i = 0; i < nums.length; i ++){
        for(let j = i+1 ; j< nums.length; j ++){
            for(let k = j+1; k <nums.length; k ++){
                var sum = nums[i] + nums[j] + nums[k] ;
                //세가지를 더한 값 sum이 isPrime 함수에서 true가 된다면 answer 는 1씩 증가함
                if(isPrime(sum)){
                    answer ++ ;
                }
            }
        }
    }
    return answer;
}