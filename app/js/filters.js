(function() {

	'use strict';

	/* Filters */

	angular.module('wordCloud.filters', []).
	filter('interpolate', ['version',
		function(version) {
			return function(text) {
				return String(text).replace(/\%VERSION\%/mg, version);
			};
		}
	]);

})();