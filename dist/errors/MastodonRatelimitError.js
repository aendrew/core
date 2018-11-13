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
var MastodonRatelimitError = /** @class */ (function (_super) {
    __extends(MastodonRatelimitError, _super);
    function MastodonRatelimitError(message) {
        return _super.call(this, 'MastodonRatelimitError', message) || this;
    }
    return MastodonRatelimitError;
}(MastodonError_1.MastodonError));
exports.MastodonRatelimitError = MastodonRatelimitError;
//# sourceMappingURL=MastodonRatelimitError.js.map