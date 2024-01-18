// 최댓값과 해당 값의 인덱스를 구해 반환함
const solution = array => [Math.max(...array), array.indexOf(Math.max(...array))]
// Math.max(...aray) -> 배열 내에서 가장 큰 수를 찾음
// indexOf -> 그 수의 인덱스번호를 찾아냄 