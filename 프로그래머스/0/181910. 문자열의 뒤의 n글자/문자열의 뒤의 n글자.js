function solution(str, n) {
    const st = [...str]
    const leng = str.length - n;
    //조건이 참일때에만 요소 남김 
    return st.filter((a,b) => b > leng-1).join('');
}