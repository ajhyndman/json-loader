/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(source) {
	this.cacheable && this.cacheable();
	var value = typeof source === "string" ? JSON.parse(source) : source;
	this.value = [value];
	return "module.exports = " +
			JSON.stringify(value, undefined, "\t")
					.replace(/\u2028/g, '\\u2028')
					.replace(/\u2029/g, '\\u2029') +
			";";
}
