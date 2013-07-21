(function($) {
	$.fn.resizeToFit = function(options) {
		var settings = $.extend({
			lines: 1,
			maxFontSize: null
		}, options);

		if(settings.maxFontSize) settings.maxFontSize = stripPx(settings.maxFontSize);

		return this.each(function() {
			var cssStyle = window.getComputedStyle(this);
			var fontSize = stripPx(cssStyle['fontSize']);

			while((!settings.maxFontSize || fontSize <= settings.maxFontSize) &&
					Math.round(this.clientHeight / (stripPx(cssStyle['lineHeight']))) <= settings.lines) {
				this.style.fontSize = (++fontSize) + "px";
				cssStyle = window.getComputedStyle(this);
			}
			this.style.fontSize = (--fontSize) + "px";
		});
	};

	function stripPx(string) {
		return /\d+/.exec(string)[0];
	}
}(jQuery));
