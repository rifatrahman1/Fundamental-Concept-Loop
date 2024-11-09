/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */


let number = 81;
sum = 0;

while (number <= 131) {
    // console.log(number);

    if (number % 2 === 1) {
        sum = sum + number;
        // console.log('sum odd number',number, sum)
    }

    number++;
}


/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/


let num = 206;
sum = 0;

while (num <= 311) {
    console.log(num);

    if (num % 2 === 0){
        sum = sum + num;
        console.log('sum even number', num, sum)
    }

        num++;
}