//* Even Fibonacci numbers
//* Problem 2
//* Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//* 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//* By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
var fib = function (restriction){
var i = 1;
var j=0;
var n = 0;
var a =[];
while (i<restriction || j<restriction) {
  j=j+i;
  if (j<restriction){
  a [n] = j;
  n++;
  }
  i=j+i;
  if (i<restriction){
  a [n] = i;
  n++;
  }
}
return a;
};

var evenFibSum = function(rest){
a=fib(rest);
console.log(a.length);
var sum = 0;
for (i=0; i<a.length; i++){
     if (a[i] %  2 ===0){sum = sum + a [i];}
}
return sum;
};

console.log(evenFibSum(4000000));
