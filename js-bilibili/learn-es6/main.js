// 1. 变量和常量
{
  let count = 100;
  count++;
}
// console.log(count);
// count 是局部变量，无法访问 print: Uncaught ReferenceError: count is not defined

// tips: 可以先都用常量申明，之后需要改变的再用 let 申明

// 2. 模版字符串
// 模板字面量是用反引号（`）分隔的字面量，允许多行字符串、带嵌入表达式的字符串插值和一种叫带标签的模板的特殊结构。

// （1）可以包含占位符 ${}，其中可以是任意的 JavaScript 表达式
// （2）可以包含多行字符串
const str1 = "bilibili";
const str2 = `hihihi ${str1}
  also print this
`;
console.log(str2); // hihihi ${str1}

// 3. 解构赋值
// 解构赋值语法是一种 Javascript 表达式。
// 可以将数组中的值或对象的属性取出，赋值给其他变量
const [a, b] = [1, 2];
console.log(a, b); // 1 2

// 解构数组
const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

// 4. Promise Aysnc Await
// 同步：代码按顺序执行，前一个任务结束后，后一个任务才能开始
// 异步：代码不按顺序执行，前一个任务结束后，后一个任务不一定开始

// 常见的异步任务有：定时任务、网络请求、事件监听、回调函数等 ajax
console.log("任务1: 。。。同步任务。。。");
console.log("任务2: 。。。同步任务。。。");
// 异步任务：和时间没关系，只要在同步任务执行完之后，就会执行异步任务
setTimeout(() => {
  console.log("任务3: 。。。异步任务。。。");
}, 1000);
console.log("任务4: 。。。同步任务。。。");
// 1243
// 如果有多个异步任务，造成多重嵌套，就会形成回调地狱
// promise 主要就是用于解决这种异步写法中的嵌套问题的 => 将这种嵌套结构，书写为一种更接近于同步的写法

// Promise 是一个类，用来传递异步操作的消息
// const p1 = new Promise((resolve, reject) => {});

// Promise 有三种状态：pending（进行中）、fulfilled（已成功）、rejected（已失败）
const myFirstPromise = new Promise((resolve, reject) => {
  // 当异步操作成功时，我们调用 resolve(...)，当其失败时，调用 reject(...)。
  // 在这个例子中，我们使用 setTimeout(...) 来模拟异步代码。
  // 在实际情况中，你可能会使用类似 XHR 或 HTML API 等。
  console.log("1231231231");
  setTimeout(() => {
    resolve("成功！"); // 耶！一切顺利！
  }, 2500);
});

myFirstPromise.then((successMessage) => {
  // successMessage 是我们在上面的 resolve(...) 函数中传入的任何内容。
  // 它不一定是字符串，但如果它只是一个成功的消息，那么它大概率是字符串。
  console.log(`耶！${successMessage}`);
});
