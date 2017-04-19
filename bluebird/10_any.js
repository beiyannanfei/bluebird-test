/**
 * Created by wyq on 16/12/27.
 * Promise.any
 */
"use strict";
var Promise = require("bluebird");

function promResolve(sec, args) {
	console.log("[%j] sec: %j, args: %j", new Date().toLocaleString(), sec, args);
	return new Promise((resolve, reject) => {
		setTimeout(resolve, sec || 1000, args || "success");
	});
}

Promise.any([promResolve(1000, "AAA"), promResolve(2000, "BBB"), promResolve(3000, "CCC")]).then(val => {
	console.log("[%j] val: %j", new Date().toLocaleString(), val);
}).catch(err => {
	console.log("err: %j", err);
});


