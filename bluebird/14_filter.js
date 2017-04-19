/**
 * Created by wyq on 16/12/27.
 * Promise.filter
 */
"use strict";
var Promise = require("bluebird");

function promResolve(args) {
	console.log("[%j] args: %j", new Date().toLocaleString(), args);
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1000, args * args);
	});
}

Promise.resolve([1, 2, 3, 4, 5]).filter(item => {
	console.log("item: %j", item);
	return promResolve(item).then(val => {
		console.log("val: %j", val);
		return val >= 9;
	});
}).then(val => {
	console.log("val: %j", val);
}).catch(err => {
	console.log("err: %j", err);
});

