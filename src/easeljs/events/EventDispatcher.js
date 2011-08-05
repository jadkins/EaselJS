/*
* EventDispatcher by Joseph Adkins - jpadkins. August 3, 2011
* Visit http://easeljs.com/ for documentation, updates and examples.
*
*
* Copyright (c) 2011 Joseph Adkins
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/


/**
* The Easel Javascript library provides a retained graphics mode for canvas 
* including a full, hierarchical display list, a core interaction model, and 
* helper classes to make working with Canvas much easier.
* @module EaselJS
**/
(function(window) {
	EventDispatcher = function() {
		this.initialize();
	}
	
	var p = EventDispatcher.prototype;
	
	p.initialize = function() {
		;
	}
	
	p.addEventListener = function ( eventName, callbackFunction, useCapture ) {
		document.addEventListener( eventName, callbackFunction, useCapture );
	}
	
	p.removeEventListener = function ( eventName, callbackFunction, useCapture ) {
		document.removeEventListener( eventName, callbackFunction, useCapture );
	}
	
	p.dispatchEvent = function ( eventObject ) {
		fireEvent( eventObject.event );
	}
	
	window.EventDispatcher = EventDispatcher;
} (window));
