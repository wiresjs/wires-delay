/**
 * Holds last time access
 * @type {Object}
 */
var delayedAccessCollection = {};

/**
 * Gives true or false flag after a particular interval
 * Configured to 10 second interval
 * We don't want our seo.service spammed
 * @return {[type]} [description]
 */
module.exports = function(key, interval) {
	var success = true;
	var interval = interval || 10000;
	var lastTimeCached = delayedAccessCollection[key]
	if (lastTimeCached) {
		success = new Date().getTime() - lastTimeCached > interval;
	}
	if (success) {
		delayedAccessCollection[key] = new Date().getTime();
	}
	return success;
}