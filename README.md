[jquery.designGrid](http://github.com/mbrio/jquery.designGrid)
===================================================

Requirements
------------
* The current version of jquery.designGrid was developed using [jQuery](http://jquery.com) 1.5.2.

Introduction
------------
jquery.designGrid is a library that displays a grid over a web page.

With the default `keyCode` configuration, once the designGrid method has been called, you can hide and show the grid by holding down CTRL + ALT + G

Usage
-----
	jQuery.fn.designGrid(params)

Parameters
----------
* `@params` = The design grid parameters
	* `gridWidth` = The width of a single grid column without the gutter, the default is 50
	* `gutterWidth` = The width of the gutter between each grid column, the default is 10
	* `offset` = The padding on the outside of the content area, the default is 10
	* `gridCount` = The number of grid columns to display, the default is 10
	* `gridColor` = The color of the grid lines, the default is #000
	* `dataKey` = The key to use when storing information on the data-* attribute, the default is 'designGrid.gridVisible'
	* `gridClass` = The class to use on the grid divs, the default is 'design-grid-displayed-line'
	* `keyCode` = The key to press in order to display the grid, this number must be a value that is passed by the `keypress` event, along with this key you will also have to hold down CTRL + ALT, the default is 71 or 'g'
	
Example
-------
	$(".main-container").designGrid({
		gridWidth: 40,
		gutterWidth: 20,
		offset: 20,
		gridCount: 16
	});