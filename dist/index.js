"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./errors/MastodonError"));
__export(require("./errors/MastodonNotFoundError"));
__export(require("./errors/MastodonRatelimitError"));
__export(require("./errors/MastodonUnauthorizedError"));
__export(require("./errors/MastodonURLResolveError"));
var Mastodon_1 = require("./client/Mastodon");
exports.default = Mastodon_1.Mastodon;
//# sourceMappingURL=index.js.map