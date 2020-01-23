const arr = [1, 2, 3];
const arr1 = arr.slice();
const arr2 = arr.slice();

arr1.push(4, 5, 6);
arr2.unshift(4, 5, 6);

alert(`Input: 
    ${arr}
Output: 
    ${arr1}
    ${arr2}`);
