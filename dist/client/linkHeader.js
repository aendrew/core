"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkHeader = require("http-link-header");
exports.getNextUrl = function (headers) {
    var link = headers.get('Link') || '';
    var refs = LinkHeader.parse(link).refs.filter(function (ref) { return ref.rel === 'next'; });
    return refs.length > 0
        ? refs[0].uri
        : null;
};
//# sourceMappingURL=linkHeader.js.map