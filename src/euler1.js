export function inputArray(input) {
  var arr = [];
  for (let i = 1; i <= input; i++) {
    if (i % 3===0 || i % 5 === 0 ) {
      arr.push(i);
    }
  }

  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;

};



export function arrayResult(arr) {
}




// export function divisible (inputArray){
//   if (input % 3===0 || input % 5 === 0 ){
//     return true;
//   }
// };
