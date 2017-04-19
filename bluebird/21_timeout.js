/**
 * Created by wyq on 16/12/27.
 * timeout  当为阻塞函数时,在timeout的时间内返回则正确,否则报错(timeout)
 */
"use strict";
var Promise = require("bluebird");

function promResolve(args) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1000, args || "success");
	});
}

promResolve().timeout(1000).then(val => {
	console.log("val: %j", val);
}).catch(err => {
	console.log("err: %j", err.message);
});
