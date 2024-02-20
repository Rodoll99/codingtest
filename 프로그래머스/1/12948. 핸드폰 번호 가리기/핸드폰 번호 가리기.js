function solution(phone_number) {
    var answer = '';
    var numarr = [...phone_number];
    for(let i = 0; i < numarr.length-4; i ++){  
       numarr[i] = "*";
    }

    return numarr.join("");
}