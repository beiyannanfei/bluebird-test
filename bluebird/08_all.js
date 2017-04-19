/**
 * Created by wyq on 16/12/27.
 * Promise.all
 */
"use strict";
var Promise = require("bluebird");

function promResolve(args) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1000, args || "success");
	});
}

var taskList = [];
for (let i = 0; i < 100; i++) {
	taskList.push(promResolve(i));
}

Promise.all(taskList).then(val => {
	console.log("val: %j", val);
}).catch(err => {
	console.log("err: %j", err);
});

