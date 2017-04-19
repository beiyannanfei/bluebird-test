/**
 * Created by wyq on 16/12/27.
 * Promise.using
 */
"use strict";
var Promise = require("bluebird");

Promise.using(Promise.resolve(1), Promise.resolve(2), Promise.resolve(3), function (v1, v2, v3) {
	console.log(v1, v2, v3);
});





