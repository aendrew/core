"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var MastodonError_1 = require("./MastodonError");
var MastodonURLResolveError = /** @class */ (function (_super) {
    __extends(MastodonURLResolveError, _super);
    function MastodonURLResolveError(message) {
        return _super.call(this, 'MastodonURLResolveError', message) || this;
    }
    return MastodonURLResolveError;
}(MastodonError_1.MastodonError));
exports.MastodonURLResolveError = MastodonURLResolveError;
//# sourceMappingURL=MastodonURLResolveError.js.map