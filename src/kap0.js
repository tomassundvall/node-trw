console.log(`1%15:\t${1%15}\t${!(1%15)}`);
console.log(`5%15:\t${5%15}\t${!(5%15)}`);
console.log(`15%15:\t${15%15}\t${!(15%15)}`);

const list = [];
for (let i = 1; i <= 100; i++) {
    if (!(i % 15)) {
        list.push('FizzBuzz');
    }
    else if (!(i % 5)) {
        list.push('Buzz');
    }
    else if (!(i % 3)) {
        list.push('Fizz');
    }
    else {
        list.push(i);
    }
}

console.log("Solution 1");
console.log(list);

const list2 = [...Array(100).keys()]
    .map(n => n + 1)
    .map(n => n % 15 ? n : 'FizzBuzz')
    .map(n => isNaN(n) || n % 5 ? n : 'Buzz')
    .map(n => isNaN(n) || n % 3 ? n : 'Fizz');

console.log("Solution 2");
console.log(list2);