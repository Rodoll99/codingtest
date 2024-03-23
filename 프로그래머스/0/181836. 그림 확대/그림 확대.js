function solution(picture, k) {
    const tempArr = picture.map(x => x.split('').map(x1 => x1.repeat(k)).join(''));
    
    const newArr = [];
    for (let i=0; i<tempArr.length; i++) {
        for(let j=0;j<k; j++){
            newArr.push(tempArr[i]);
        }
    }
    
    return newArr;
}