const arr = [1, 2, 3, 4, 5];
const arr1 = arr.slice();
const arr3 = arr.slice();
const arr4 = arr.slice();
let arr2 = arr.slice();

arr1.splice(1, 2);
arr2 = arr2.splice(1,3);
arr3.splice(3, 0, 'a', 'b', 'c');
arr4.splice(5, 0, 'e');
arr4.splice(4, 0, 'c');
arr4.splice(1, 0, 'a', 'b');

alert(`Input: 
    ${arr}
Output: 
    ${arr1}
    ${arr2}
    ${arr3}
    ${arr4}`);
