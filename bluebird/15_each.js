/**
 * Created by wyq on 16/12/27.
 * Promise.each
 */
"use strict";
var Promise = require("bluebird");

function promResolve(args) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1000, args || "success");
	});
}

Promise.all([promResolve(10), promResolve(21), promResolve(32)]).each((item, index, len) => {
	console.log("item: %j, index: %j, len: %j", item, index, len);
	return item * 2;
}).then(val => {
	console.log("val: %j", val);
}).catch(err => {
	console.log("err: %j", err);
});



