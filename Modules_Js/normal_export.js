import { name, age } from './person.js';

console.log(`Name is ${name}. I am ${age} years old`);

/*
Modules_Js>node normal_export.js
(node:9368) [MODULE_TYPELESS_PACKAGE_JSON] Warning: Module type of file:///J:/14_talk_back/3_React_Basics/React_Tutorial/Modules_Js/normal_export.js is not specified and it doesn't parse as CommonJS.
Reparsing as ES module because module syntax was detected. This incurs a performance overhead.
To eliminate this warning, add "type": "module" to J:\14_talk_back\package.json.
(Use `node --trace-warnings ...` to show where the warning was created)
Name is Doe. I am 30 years old

*/