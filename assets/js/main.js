var Component = require('./components/component.js');
var Utilities = require('./utils.js');

(function () {
	
	$(document).ready(function() {
				
		Component().init();
		
		$(window).trigger('resize');
	
	});
	
})();