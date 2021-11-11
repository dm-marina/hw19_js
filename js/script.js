// Task1
// const arr1= [1,2,3]
// const arr2=[4,5,6]
// console.log(arr1.concat(arr2));

// Task2
// const arr1 = [1,2,3]
// console.log( arr1.reverse());

// Task3
// const arr1=[1,2,3]
// arr1.push(4);
// arr1.push(5);
// arr1.push(6);
// console.log(arr1);

// Task4
// const arr1= [1,2,3]
// arr1.unshift(6);
// arr1.unshift(5);
// arr1.unshift(4);
// console.log(arr1);

// Task5
// const arr=  ['js', 'css', 'jq']
// console.log(arr.shift());

// Task6
// const arr =['js', 'css', 'jq'];
// console.log(arr.pop());

// Task7
// const arr=[1, 2, 3, 4, 5];
// let arr2=[];
// arr2.push(arr.slice(0,3));
// console.log(arr2);

// Task8
// const arr =[1, 2, 3, 4, 5];
// let arr2 =[];
// arr2.push(arr.slice(3,6));
// console.log(arr2);

// Task9
// const arr = [1, 2, 3, 4, 5]
// arr.splice(1,2);
// console.log(arr);

// Task10
// const arr = [1, 2, 3, 4, 5]
// let arr2=[]
// arr2.push(arr.slice(1,4))
// console.log(arr2);

// Task11
// const arr =[1, 2, 3, 4, 5]
// arr.splice(3,0,'a', 'b','c')
// console.log(arr)

// Task12
// const arr =[1, 2, 3, 4, 5]
// arr.splice(1,0, 'a', 'b')
// arr.splice(6,0,'c')
// arr.splice(8,0,'e')
// console.log(arr);

// Task13
// const arr =  [3, 4, 1, 2, 7]
// function compareArr(a, b){
//     if (a>b){
//         return 1;
//     }
//     if(a===b){
//         return 0;
//     }
//     if (a<b){
//         return -1
//     }
// }
// arr.sort(compareArr);
// console.log(arr);

// Task14
// const arr =[5, 6, 7, 8, 9]
// let result = arr.reduce((sum, current) => sum + current, 0);
// console.log(result);

// Task15
// const arr =  [5, 6, 7, 8, 9];
// let arr2 = [];
// arr.forEach(function(elem){
//     arr2.push(elem*elem);
// });
// console.log(arr2);

// Task16
// const arr=[1,-3, 5, 6,-7, 8, 9,-11];
// let arr2=[];
// arr.forEach(function(elem){
//     if(elem<0){
//         arr2.push(elem);
//     }
// });
// console.log(arr2);

// Task17
// const arr =[1,-3, 5, 6,-7, 8, 9,-11];
// let arr2 = [];
// arr.forEach(function(elem){
//     if(elem%2===0){
//         arr2.push(elem);
//     }
// });
// console.log(arr2);

// Task18
// const arr =  ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
// function findWord(elem){
//     if(elem.length>5){
//         return elem.length
//     }
// }
// let arr2 = arr.filter(findWord);
// console.log(arr2);

// Task19
// const arr =[1, 2, [3, 4], 5, [6, 7]];
// function onlyArr(elem){
//     if(Array.isArray){
//         return Array.isArray(elem);
//     }
// }
// let arr2= arr.filter(onlyArr);
// console.log(arr2);

// Task20
// const arr =[5,-3, 6,-5, 0,-7, 8, 9];
// function findNegative(elem){
//     if(elem <0){
//         return elem;
//     }
// }
// let arr2 = arr.filter(findNegative);
// console.log(arr2.length);