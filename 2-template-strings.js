/*

- First, refactor the code below to use variables. Then,
- Refactor  to use Template Strings (backticks) instead on concatenation

 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

 */
let costOfApple2 = 10;
let costOfMango2 = 20;
let costOfBananas2 = 15;
let costOfPeaches2 = 20;

console.log(`One apple costs Rs.${costOfApple2}`);
console.log(`Two apples cost Rs. ${costOfApple2 * 2}`);
console.log(`A dozen apples cost Rs. ${costOfApple2* 12}`);
console.log(`Six apples cost Rs. ${costOfApple2 * 6}`);
console.log(`Ten apples cost Rs. ${costOfApple2 * 10}`);

console.log(`One mango costs Rs.${costOfMango2}`);
console.log(`Two mangoes cost Rs. ${costOfMango2 * 2}`);
console.log(`A dozen mangoes cost Rs. ${costOfMango2 * 12}`);
console.log(`Six mangoes cost Rs. ${costOfMango2 * 6}`);
console.log(`Ten mangoes cost Rs. ${costOfMango2 * 10}`);

console.log(`One banana costs Rs.${costOfBananas}`);
console.log(`Two bananas cost Rs. ${costOfBananas2* 2}`);
console.log(`A dozen bananas cost Rs.${costOfBananas2 * 12}`);
console.log(`Six bananas cost Rs. ${costOfBananas2 * 6}`);
console.log(`Ten bananas cost Rs. ${costOfBananas2 * 10}`);

console.log(`One peach costs Rs.${costOfPeaches2}`);
console.log(`Two peaches cost Rs. ${costOfPeaches2 * 2}`);
console.log(`A dozen peaches cost Rs.${costOfPeaches2 * 12}`);
console.log(`Six peaches cost Rs. ${costOfPeaches2* 6}`);
console.log(`Ten peaches cost Rs. ${costOfPeaches2 * 10}`);

console.log(`one banana, one peach, one apple and one mango together cost Rs. ${costOfBananas2 + costOfPeaches2 + costOfApple2 + costOfMango2}`);
