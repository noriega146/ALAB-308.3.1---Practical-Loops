//Part 2: Prime Time
let n = 11; //Declare an arbitrary number, n.
let foundprime = false;

while (!foundprime){ // If foundprime is false !foundprime becomes true loop continues. if foundprime is true !foundprime becomes false and loop stops. 
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





