const input = require('fs').readFileSync('/dev/stdin')
  .toString().trim().split('\n').map((v) => v.split(" ").map((v) => +v));

  //N은 배열의 길이 , K는 찾으려는 K번째 비교에서 추가된 값
const [[N, K], arr] = input;

function merge(left, right) {
  const result = [];
  let [i, j] = [0, 0];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {     // left와 right 요소끼리 비교
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
    count++;
    if (count === K) {
      target = result[result.length - 1];   // count와 K가 같다면, 마지막으로 추가해준 값 출력
    }
  }

  while (i < left.length) {
    result.push(left[i]);   // left에 남아있는 값을 추가
    i++;
    count++;
    if (count === K) {
      target = result[result.length - 1];
    }
  }

  while (j < right.length) {
    result.push(right[j]);  // right에 남아있는 값을 추가
    j++;
    count++;
    if (count === K) {
      target = result[result.length - 1];
    }
  }
  return result;

}


// 정렬되지 않은 배열 arr를 요소 1개만 가진 배열이 될 때까지 쪼개기
let count = 0;
let target;

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.ceil(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid, arr.length));

  return merge(left, right);
}

mergeSort(arr);
if (!target) {
  target = -1;
}
console.log(target);