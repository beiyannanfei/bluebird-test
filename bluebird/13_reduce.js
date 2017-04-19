/**
 * Created by wyq on 16/12/27.
 * Promise.reduce
 */
"use strict";
var Promise = require("bluebird");

function promResolve(args) {
	console.log("[%j] args: %j", new Date().toLocaleString(), args);
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1000, +args || "success");
	});
}

Promise.reduce(["10", "11", "12", "13"], function (total, addNum) {
	return promResolve(addNum).then(val => {
		return total + val;
	});
}, 1).then(total => {
	console.log("total: %j", total);
}).catch(err => {
	console.log("err: %j", err);
});




