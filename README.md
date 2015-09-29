# Ractive.js bootstraptags event plugin

*Find more Ractive.js plugins at [docs.ractivejs.org/latest/plugins](http://docs.ractivejs.org/latest/plugins)*

[See the demo here.](http://performante.github.io/ractive-decorators-bootstraptags/)

## Usage

Include this file on your page below Ractive, e.g:

```html
<script src='lib/ractive.js'></script>
<script src='lib/ractive-events-bootstraptags.js'></script>
```

Or, if you're using a module loader, require this module:

```js
// requiring the plugin will 'activate' it - no need to use the return value
require( 'ractive-events-bootstraptags' );
```

Small events plugin, that adds event functionality of [Bootstrap Tags Input](https://github.com/timschlechter/bootstrap-tagsinput) plugin.

Events supported are beforeItemAdd, itemAdded, beforeItemRemove and itemRemoved.
Corresponding events in ractive template are tagsbeforeitemadd, tagsitemadded, tagsbeforeitemremove and tagsitemremoved

For example:
'''html
<input name="tags" decorator="tagsinput" on-tagsintemadded="ItemAdded"/>
'''

Decorator "tagsinput" comes from [decorator plugin](https://github.com/Performante/ractive-decorators-bootstraptags/)



## License

Copyright (c) 2015 Mateusz Cyraniak. Licensed MIT

Created with the [Ractive.js plugin template](https://github.com/ractivejs/plugin-template) for Grunt.
