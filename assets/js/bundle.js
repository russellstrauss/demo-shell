(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function() {
	
	var settings;
	
	return {
		
		settings: {
			
		},
		
		init: function() {
			
			settings = this.settings;
			
			this.bindUI();
		},
		
		bindUI: function() {
			
			$('.box').click(function() {
				$(this).toggleClass('open');
			});
						
		}
	}
}
},{}],2:[function(require,module,exports){
var Component = require('./components/component.js');
var Utilities = require('./utils.js');

(function () {
	
	$(document).ready(function() {
				
		Component().init();
		
		$(window).trigger('resize');
	
	});
	
})();
},{"./components/component.js":1,"./utils.js":3}],3:[function(require,module,exports){
(function () {
	
	var appSettings;
	
	window.utils = (function() {
		
		return {
			appSettings: {
				mobileMax: 767,
				tabletMin: 768,
				tabletMax: 991,
				desktopMin: 992,
				desktopLargeMin: 1200
			},
			
			mobile: function() {
				return window.innerWidth < appSettings.tabletMin;
			},
			
			tablet: function() {
				return (window.innerWidth > appSettings.mobileMax && window.innerWidth < appSettings.desktopMin);
			},
			
			debounce: function(func, wait, immediate) {
				var timeout;
				return function () {
					var context = this, args = arguments;
					var later = function () {
						timeout = null;
						if (!immediate) func.apply(context, args);
					};
					var callNow = immediate && !timeout;
					clearTimeout(timeout);
					timeout = setTimeout(later, wait);
					if (callNow) func.apply(context, args);
				};
			},
			
			isOnScreen: function(element) {

				var win = $(window);
				
				var viewport = {
					top: win.scrollTop(),
					left: win.scrollLeft()
				};
				viewport.right = viewport.left + win.width();
				viewport.bottom = viewport.top + win.height();

				var bounds = element.offset();
				bounds.right = bounds.left + element.outerWidth();
				bounds.bottom = bounds.top + element.outerHeight();

				return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

			},
			
			getBreakpoint: function() {
				if (window.innerWidth < appSettings.tabletMin) return 'mobile';
				else if (window.innerWidth < appSettings.desktopMin) return 'tablet';
				else return 'desktop';
			},
			
			secondsToMilliseconds: function(seconds) {
				return seconds * 1000;
			}
		}
	})();

	module.exports = window.utils;

})();
},{}]},{},[2]);
