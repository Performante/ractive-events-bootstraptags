/*

	ractive-events-bootstraptags
	===========================================

	Version 0.1

	Small events plugin, that adds event functionality of Bootstrap Tags Input plugin.

	Events supported are beforeItemAdd, itemAdded, beforeItemRemove and itemRemoved.
	Corresponding events in ractive template are tagsbeforeitemadd, tagsitemadded, tagsbeforeitemremove and tagsitemremoved
	For example:
		<input name="tags" decorator="tagsinput" on-tagsintemadded="ItemAdded"/>

	Decorator "tagsinput" comes from decorator plugin: https://github.com/Performante/ractive-decorators-bootstraptags/

	==========================

	Troubleshooting: If you're using a module system in your app (AMD or
	something more nodey) then you may need to change the paths below,
	where it says `require( 'ractive' )` or `define([ 'ractive' ]...)`.

	==========================

	Usage: Include this file on your page below Ractive, e.g:

	    <script src='lib/ractive.js'></script>
	    <script src='lib/ractive-events-bootstraptags.js'></script>

	Or, if you're using a module loader, require this module:

	    // requiring the plugin will 'activate' it - no need to use
	    // the return value
	    require( 'ractive-events-bootstraptags' );

	<< more specific instructions for this plugin go here... >>

*/

(function(global, factory) {

	'use strict';

	// AMD environment
	if (typeof define === 'function' && define.amd) {
		define(['ractive', 'jquery'], factory);
	}

	// Common JS (i.e. node/browserify)
	else if (typeof module !== 'undefined' && module.exports && typeof require === 'function') {
		factory(require('ractive'), require('jquery'));
	}

	// browser global
	else if (global.Ractive && global.jQuery) {
		factory(global.Ractive, global.jQuery);
	} else {
		throw new Error('Could not find Ractive! It must be loaded before the ractive-events-ractive-events-bootstraptags plugin');
	}

}(typeof window !== 'undefined' ? window : this, function(Ractive, $) {

	'use strict';

	/* plugin code goes here */

	Ractive.events.tagsbeforeitemadd = function(node, fire) {
		var beforeItemAddHandler = function(event) {
			//event.preventDefault();
			fire({
				node: node,
				original: event
			});
		};

		$(node).on('beforeItemAdd', beforeItemAddHandler);

		return {
			teardown: function() {
				$(node).off('beforeItemAdd', beforeItemAddHandler);
			}
		};
	};

	Ractive.events.tagsitemadded = function(node, fire) {
		var itemAddedHandler = function(event) {
			//event.preventDefault();
			fire({
				node: node,
				original: event
			});
		};

		$(node).on('itemAdded', itemAddedHandler);

		return {
			teardown: function() {
				$(node).off('itemAdded', itemAddedHandler);
			}
		};
	};

	Ractive.events.tagsbeforeitemremove = function(node, fire) {
		var beforeItemRemoveHandler = function(event) {
			//event.preventDefault();
			fire({
				node: node,
				original: event
			});
		};

		$(node).on('beforeItemRemove', beforeItemRemoveHandler);

		return {
			teardown: function() {
				$(node).off('beforeItemRemove', beforeItemRemoveHandler);
			}
		};
	};

	Ractive.events.tagsitemremoved = function(node, fire) {
		var itemRemovedHandler = function(event) {
			//event.preventDefault();
			fire({
				node: node,
				original: event
			});
		};

		$(node).on('itemRemoved', itemRemovedHandler);

		return {
			teardown: function() {
				$(node).off('itemRemoved', itemRemovedHandler);
			}
		};
	};

}));