function solution(order) {
    const clap = [];
    const orderString = order.toString();
    const resultArray = orderString.split('').map(Number);
    
        for(let i = 0 ; i < resultArray.length; i ++){
           if(resultArray[i] === 3 || resultArray[i] === 6 || resultArray[i] === 9)             {
            clap.push(resultArray[i]);
            }
    }
    return clap.length;
}