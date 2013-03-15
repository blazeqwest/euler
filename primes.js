//* Problem statement:
//* The prime factors of 13195 are 5, 7, 13 and 29.
//* What is the largest prime factor of the number 600851475143 ?

var num = 600851475143;
var primes = [];
var j = 0;
for (var i = 2; i < num; i++){
    if(num % i === 0){
        primes[j] = i;
        j++;
        num /= i;
    }
}
primes[j] = num;
console.log(primes);
