function solution(id_pw, db) {
   const [id , pw] = id_pw;
    const map = new Map(db);
    return map.has(id) ? (map.get(id) === pw ? 'login' : 'wrong pw' ) : 'fail';
    // 삼항연산자 이용, has(key) 지정한 키가 Map 내부에 존재하는지 확인 후 true, false 로 반환
    // get(key): 지정한 키에 해당하는 값 반환 , 존재하지않을 경우 undefined
}