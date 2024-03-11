//달을 구하는 코드
const addMonth = (dateString, month) => {
    let [year,mon,day] =dateString.split('.').map((v)=> Number(v)); 
    mon += month;
    day -= 1;
    if (day === 0){
        day = 28;
        mon -= 1;
    }
    if(mon>12) {
        const monCount = Math.floor(mon/12);
        mon = mon - 12 * monCount;
        year += monCount;
    }
    if(mon === 0){
        mon += 12;
        year -= 1;
    }
    return [year, mon , day];
}
function solution(today, terms, privacies) {
    var answer = [];
    //forEach -> 배열의 밸류를 하나씩 꺼내오는 함수
    privacies.forEach((v ,index) =>{
        //밸류의 띄어쓰기를 기준으로 첫번째 요소는 date / 두번째 요소는 term
        const [date , term] = v.split(" ")
        //termString에 find함수를 이용해 terms에서 innerTerm이라는 변수를할당하여 innerTerm의[0]번째가 term과 같을때에 terms를 공백기준으로 나눠 두번째 요소를 가져온다.
        const termString = Number(terms.find((innerTerm)=> {
            return (innerTerm[0] === term)
        }).split(" ")[1])
        //유효기간을 알았으니 privacies 의 달에 유효기간을 더한 후 today보다 값이 크면 약관이 만료된것임
        const [eYear , eMon , eDay] = addMonth(date,termString);
        const [year , mon , day] = today.split(".").map(v => Number(v));
        console.log([eYear, eMon , eDay])
        console.log([year , mon , day])
        let expired = false;
        if(year > eYear){
            expired = true;
        }
        if(year === eYear && mon > eMon){
            expired = true ;
        }
        if(year === eYear && mon === eMon && day > eDay){
            expired = true ;
        }
        if(expired) { 
            answer.push(index + 1);
        }
    })
    return answer;
}