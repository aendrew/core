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
var MastodonError = /** @class */ (function (_super) {
    __extends(MastodonError, _super);
    function MastodonError(name, message) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.message = message;
        return _this;
    }
    return MastodonError;
}(Error));
exports.MastodonError = MastodonError;
//# sourceMappingURL=MastodonError.js.map