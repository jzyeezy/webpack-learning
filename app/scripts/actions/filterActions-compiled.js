"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setFilter = setFilter;
/**
 * Created by Joyce on 12/6/2015.
 */
var SET_FILTER = exports.SET_FILTER = "SET_FILTER";

function setFilter(filter) {
    return {
        type: SET_FILTER,
        filter: filter
    };
}

exports.default = { setFilter: setFilter };

//# sourceMappingURL=filterActions-compiled.js.map