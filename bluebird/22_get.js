/**
 * Created by wyq on 16/12/27.
 * .get
 */

"use strict";
var Promise = require("bluebird");

Promise.resolve([1, 2, 3]).get(1).then(val => {
	console.log("val: %j", val);
}).catch(err => {
	console.log("err: %j", err);
});

Promise.resolve({a: 10, b: 20, c: 30}).get("a").then(val => {
	console.log("val: %j", val);
}).catch(err => {
	console.log("err: %j", err);
});

