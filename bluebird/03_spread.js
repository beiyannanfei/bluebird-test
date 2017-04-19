/**
 * Created by wyq on 16/12/26.
 * .spread
 */
"use strict";
var Promise = require("bluebird");

function promResolve(args) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1000, args);
	});
}

Promise.all([promResolve("AAA"), promResolve("BBB"), promResolve("CCC")]).spread((v1, v2, v3) => {
	console.log(v1, v2, v3);
});


