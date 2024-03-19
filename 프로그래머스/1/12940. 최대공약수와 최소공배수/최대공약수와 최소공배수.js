function solution(n, m) {
    
    //공약수 구하기
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    //공배수 구하기
    const lcm = (a, b) => (a * b) / gcd(a, b);

    const minNum = Math.min(n, m);
    const maxNum = Math.max(n, m);
    
    const answer = [gcd(minNum, maxNum), lcm(minNum, maxNum)];
    return answer;
}
