/**
 * Created by wyq on 16/12/27.
 * Promise.some
 */
"use strict";
var Promise = require("bluebird");

function promResolve(sec, args) {
	console.log("[%j] sec: %j, args: %j", new Date().toLocaleString(), sec, args);
	return new Promise((resolve, reject) => {
		setTimeout(resolve, sec || 1000, args || "success");
	});
}

Promise.some([
	promResolve(1000, "AAA"),
	promResolve(2000, "BBB"),
	promResolve(3000, "CCC"),
	promResolve(4000, "DDD")], 3).spread((first, second, third) => {
	console.log(first, second, third);
}).catch(err => {
	console.log("err: %j", err);
});


