(function($) {
	$.fn.designGrid = function(options) {
		var settings = {
			gridWidth: 50,
			gutterWidth: 10,
			outerPadding: 10,
			gridCount: 10,
			gridColor: '#000',
			dataKey: 'designGrid.gridVisible',
			gridClass: 'design-grid-displayed-line',
			keyCode: 71
		};
		
		if (options) $.extend(settings, options);
		
		if (this.size() > 0) {
			$(document).keydown((function(dgs, settings) {
				return function(e) {
					if (e.altKey && e.ctrlKey && e.keyCode == settings.keyCode) {
						if (!dgs.data(settings.dataKey)) {
							var b = $(document.body);
							var left = dgs.offset().left + settings.outerPadding;
							var width = dgs.innerWidth();
							var height = $(document).height();
							var colWidth = settings.gridWidth + settings.gutterWidth;
						
							for (var i = 0, j = settings.gridCount; i <= j; i++) {
								var nl = left + (i * colWidth);
								b.append($('<div>').css({
									'border-left': 'solid 1px ' + settings.gridColor,
									'border-right': 'solid 1px ' + settings.gridColor,
									width: settings.gutterWidth - 2,
									height: height,
									position: 'absolute',
									top: 0,
									left: nl - settings.gutterWidth,
									'z-index': 2000
								}).addClass(settings.gridClass));
							}
				
							dgs.data(settings.dataKey, true)
						} else {
							$('body > .' + settings.gridClass).remove();
							dgs.data(settings.dataKey, false)
						}
					}
				}
			})(this, settings));
		}
	}
})(jQuery);