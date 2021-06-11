//1부터 50의 자연수 중 짝수를 구하는 함수/

let arr1 = Array.from({ length: 25 }, (_, i) => i + 1)
let arr2 = Array.from(arr1, x => x * 2)

function findEvenNum() {
    return arr2;
}