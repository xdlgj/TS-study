/**
 * 默认ts文件是不能被当作模块被引入的
    resolve: {
        extensions: ['.ts', '.js']
    }
 */
import { M } from './m1';
console.log(M);
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 456));
const obj = { name: "孙悟空", age: 33 };
obj.age = 18;
console.log(obj);
//ie中不支持Promise， 但是可以通过corejs进行相应的转换
console.log(Promise);
