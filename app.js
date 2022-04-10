//npm is global command,comes with node
//npm --version/npm -v

//local dependency
//npm i <packageName>

//global dependency
//npm i -g <packageName>

//package.json - filw which contains imp info about project.
//npm init (step by step)
//npm init -y(everything default)

const _  = require('lodash');
const items  = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);