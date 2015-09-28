Ractive.events.tagsbeforeitemadd = function (node, fire) {
    var beforeItemAddHandler = function (event) {
        //event.preventDefault();
        fire({
            node: node,
            original: event
        });
    };

    $(node).on('beforeItemAdd', beforeItemAddHandler);

    return {
        teardown: function () {
            $(node).off('beforeItemAdd', beforeItemAddHandler);
        }
    }
};

Ractive.events.tagsitemadded = function (node, fire) {
    var itemAddedHandler = function (event) {
        //event.preventDefault();
        fire({
            node: node,
            original: event
        });
    };

    $(node).on('itemAdded', itemAddedHandler);

    return {
        teardown: function () {
            $(node).off('itemAdded', itemAddedHandler);
        }
    }
};

Ractive.events.tagsbeforeitemremove = function (node, fire) {
    var beforeItemRemoveHandler = function (event) {
        //event.preventDefault();
        fire({
            node: node,
            original: event
        });
    };

    $(node).on('beforeItemRemove', beforeItemRemoveHandler);

    return {
        teardown: function () {
            $(node).off('beforeItemRemove', beforeItemRemoveHandler);
        }
    }
};

Ractive.events.tagsitemremoved = function (node, fire) {
    var itemRemovedHandler = function (event) {
        //event.preventDefault();
        fire({
            node: node,
            original: event
        });
    };

    $(node).on('itemRemoved', itemRemovedHandler);

    return {
        teardown: function () {
            $(node).off('itemRemoved', itemRemovedHandler);
        }
    }
};