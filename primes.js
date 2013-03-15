var num = prompt("number");
var primes = [];
var j = 0;
for (var i = 2; i < num; i++){
    if(num % i === 0){
        primes[j] = i;
        j++;
        num /= i;
    }
}
