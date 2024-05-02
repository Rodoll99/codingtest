function solution(myString, pat) {
    const arr =[]
    //반복문을 이용해
    for(i=0; i<myString.length; i++){
    //배열에 index0 부터 차근차근 하나씩 배열에 넣어줌(pat의 길이만큼)
    arr.push(myString.slice(i,i+pat.length))
    }
    //그 배열내에서 한 요소와 pat이 같으면 남기고 , 남긴 배열의 길이만큼 리턴함
    return arr.filter(v=> v===pat).length
    
}