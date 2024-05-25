//Part 1: Fizz Buzz
// Counter 1-100
for (let i = 1; i <= 100; i++) {
   //If a number is divisible by both 3 and 5, log “Fizz Buzz.”
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    //If a number is divisible by 3, log “Fizz.”
    } else if (i % 3 === 0) {
        console.log("Fizz");
   //If a number is divisible by 5, log “Buzz.”
    } else if (i % 5 === 0) {
        console.log("Buzz");
   //if a number is not divisible by either 3 or 5, log the number.
    } else {
        console.log(i);
    }
}

//Part 2: Prime Time
let n = 4; //Declare an arbitrary number, n.
let foundprime = false;

while (foundprime){
    n++;
    let isprime = true;

    if (n <=1) {
        isprime = false; //Prime number cannot be less than or equal to 1

    } else if (n<=3) {
        isprime = true //2 and 3 are prime numbers 
    } else if (n%2 ===0 || n%3 ===0){
        isprime = false; //if n is divisible by 2 or 3 prime = false
    } else {
        for (let i = 5; i*i <= n; i + 6){
            if (n%i===0 || n % ( i+2) === 0){
                isprime = false;
                break;
            }
        }
    }
    if (isprime){
        console.log(n);
        foundprime = true; // As soon as you find the prime number, log that number and exit the loop.

    }
}


