function solution(sizes) {
    var answer = 0;
    //일단한개는 무조건 제일 큰 친구로 해야함
    //가로든 세로든 제일 큰친구를 하나 구하고 , 그 값과 나머지 명함들의 가로 or 세로등을 곱했을때에
    //가로길이랑 세로길이를 따로 배열에 담아 그들중 가장 큰 값을 하나 구하고 만약 그 값이 세로라면 가로에서 가장큰값 을 구한 뒤에 , 그 값의 세로의 길이를 구하고 그 값이 만약 가로에 있는 길이들 중 보다 더 작은값이라면 그다음으로 큰 값을 구함
//     var width = [];
//     var height = [];
//     for(let i = 0 ; i < sizes.length ; i ++){
//         width.push(sizes[i][0])
//         height.push(sizes[i][1])
//     }
//     var heightMax = Math.max(...height)
//     var max = Math.max(...width,...height)
//     for(let x of sizes){
//         let [a,b] = x
//         if(a == max){
//             for(let i= 0; i <sizes.length; i++){
//                 if(sizes[i][1] == heightMax){
//                     console.log(sizes[i][0])
//                 }
//             }
//             console.log(x)
//         }else if(b == max){
//             console.log(x)
//         }
//     }
//     console.log(max)
//     return answer;
// }
    var small = []
    var big = []
    for(let x of sizes){
        let [a,b] = x
        if(a >= b){
            big.push(a)
            small.push(b)
        }else if(b >= a){
            big.push(b)
            small.push(a)
        }
    }
    return Math.max(...big) * Math.max(...small)
}