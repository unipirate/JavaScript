// let name = 'John';

// console.log(name);

// let sentence = 'He said "Hello"';

// console.log(name + sentence);

// fruit = prompt('What is your favorite fruit?');
//prompt会读取用户输入的值并返回这个值
 
// console.log(fruit);

// alert('Your favorite fruit is ' + fruit);
//alert会显示一个弹窗警告，包含括号内文字

let food = parseInt(prompt('食物花了多少钱？'));
let tipPer = parseInt(prompt('小费百分比是多少？')) / 100;
//parseInt会将字符串转换为整数
let tipAmount = food * tipPer;
let total = food + tipAmount;

console.log('小费金额是：' + tipAmount);
console.log('总金额是：' + total);