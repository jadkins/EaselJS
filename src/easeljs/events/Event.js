(function(window) {
	var Event = function( eventType, eventName, cancelable, useCapture ) {
		this.initialize( eventType, eventName, cancelable, useCapture );
		
	}
	
	var p = Event.prototype;
	
	p.event = null;

	p.initialize = function( eventName, cancelable, useCapture ) {
		if( document.createEvent ) {
			p.event = document.createEvent( "CustomEvent" );
			p.event.initCustomEvent( eventName, !useCapture, cancelable )
			p.event.eventName = eventName;
		}
		this.cancelable = cancelable;
		this.eventName = eventName;
		this.useCapture = useCapture;
	}
	
	p.clone = function() {
		var o = new Event( this.eventName, this.cancelable, this.useCapture);
		this.cloneProps(o);
		return o;
	}
	
})
