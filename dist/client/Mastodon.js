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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Gateway_1 = require("../client/Gateway");
var linkHeader_1 = require("./linkHeader");
var Mastodon = /** @class */ (function (_super) {
    __extends(Mastodon, _super);
    function Mastodon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Generate an iterable of the pagination
     * @param id Path to the API, e.g. `timelines/pulbic`, `accounts/1/statuses` e.g.
     * @param params Query parameters
     * @return An async iterable of statuses, most recent ones first.
     */
    Mastodon.prototype.paginationGenerator = function (path, params) {
        return __asyncGenerator(this, arguments, function paginationGenerator_1() {
            var next, response, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        next = path;
                        _a.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 5];
                        return [4 /*yield*/, __await(this.get(next, params))];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, __await(response.data)];
                    case 3: return [4 /*yield*/, _a.sent()];
                    case 4:
                        result = _a.sent();
                        if (result === 'reset') {
                            next = path;
                        }
                        else {
                            next = linkHeader_1.getNextUrl(response.headers);
                            if (!next) {
                                return [3 /*break*/, 5];
                            }
                        }
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Starting home timeline and notification streaming
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-user
     */
    Mastodon.prototype.streamUser = function () {
        return this.stream(this.streamingUrl + "/api/v1/streaming", { stream: 'user' });
    };
    /**
     * Starting federated timeline streaming
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public
     */
    Mastodon.prototype.streamPublicTimeline = function () {
        return this.stream(this.streamingUrl + "/api/v1/streaming", { stream: 'public' });
    };
    /**
     * Starting local timeline streaming
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public-local
     */
    Mastodon.prototype.streamCommunityTimeline = function () {
        return this.stream(this.streamingUrl + "/api/v1/streaming", { stream: 'public:local' });
    };
    /**
     * Starting tag timeline streaming
     * @param id ID of the tag
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-tag-hashtag
     */
    Mastodon.prototype.streamTagTimeline = function (id) {
        return this.stream(this.streamingUrl + "/api/v1/streaming", { stream: 'hashtag', tag: id });
    };
    /**
     * Starting local tag timeline streaming
     * @param id ID of the tag
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-local-tag-hashtag
     */
    Mastodon.prototype.streamLocalTagTimeline = function (id) {
        return this.stream(this.streamingUrl + "/api/v1/streaming", { stream: 'hashtag:local', tag: id });
    };
    /**
     * Starting list timeline streaming
     * @param id ID of the list
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-list-list-list-id
     */
    Mastodon.prototype.streamListTimeline = function (id) {
        return this.stream(this.streamingUrl + "/api/v1/streaming", { stream: 'list', list: id });
    };
    /**
     * Starting direct timeline streaming
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-direct
     */
    Mastodon.prototype.streamDirectTimeline = function () {
        return this.stream(this.streamingUrl + "/api/v1/streaming", { stream: 'direct' });
    };
    /**
     * Fetch access token from authorization code
     * @param code code
     * @param client_id client_id of your app
     * @param client_secret client_secret of your app
     * @param redirect_uri redirect_uri of your app
     * @param grant_type grant_type
     * @see https://docs.joinmastodon.org/api/permissions/
     * @see https://docs.joinmastodon.org/api/authentication/
     */
    Mastodon.prototype.fetchAccessToken = function (code, client_id, client_secret, redirect_uri, grant_type) {
        if (grant_type === void 0) { grant_type = 'authorization_code'; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/oauth/token", { code: code, client_id: client_id, client_secret: client_secret, redirect_uri: redirect_uri, grant_type: grant_type })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Fetching an account
     * @param id ID of the account
     * @return Returns Account
     * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id
     */
    Mastodon.prototype.fetchAccount = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/accounts/" + id)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * User’s own account.
     * @return Returns Account with an extra source attribute.
     * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-verify-credentials
     */
    Mastodon.prototype.verfiyCredentials = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/accounts/verify_credentials")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Update user’s own account.
     * @param options Form data
     * @return Returns Account
     * @see https://docs.joinmastodon.org/api/rest/accounts/#patch-api-v1-accounts-update-credentials
     */
    Mastodon.prototype.updateCredentials = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.patch(this.url + "/api/v1/accounts/update_credentials", options, { headers: { 'Content-Type': 'multipart/form-data' } })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Accounts which follow the given account.
     * @param id ID of the target account
     * @param options Query paramerters
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-followers
     */
    Mastodon.prototype.fetchAccountFollowers = function (id, options) {
        return this.paginationGenerator(this.url + "/api/v1/accounts/" + id + "/followers", options);
    };
    /**
     * Accounts which the given account is following.
     * @param id ID of the target account
     * @param options Query parameters
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-following
     */
    Mastodon.prototype.fetchAccountFollowing = function (id, options) {
        return this.paginationGenerator(this.url + "/api/v1/accounts/" + id + "/following", options);
    };
    /**
     * An account’s statuses.
     * @param id ID of the target account
     * @param options Query parameters
     * @return Returns array of Status
     * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-statuses
     */
    Mastodon.prototype.fetchAccountStatuses = function (id, options) {
        return this.paginationGenerator(this.url + "/api/v1/accounts/" + id + "/statuses", options);
    };
    /**
     * Follow an account.
     * @param id ID of the target account
     * @param reblogs Whether the followed account’s reblogs will show up in the home timeline
     * @return Returns Relationship
     * @see https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-follow
     */
    Mastodon.prototype.followAccount = function (id, reblogs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/accounts/" + id + "/follow", { reblogs: reblogs })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Unfollow an account.
     * @param id ID of the target account
     * @return Returns Relationship
     * @see https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-unfollow
     */
    Mastodon.prototype.unfollowAccount = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/accounts/" + id + "/unfollow")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Relationship of the user to the given accounts in regards to following, blocking, muting, etc.
     * @param id Array of account IDs
     * @return Returns array of Relationship
     * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-relationships
     */
    Mastodon.prototype.fetchAccountRelationships = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/accounts/relationship", { id: id })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Search for matching accounts by username, domain and display name.
     * @param q What to search for
     * @param options Query parameters
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-search
     */
    Mastodon.prototype.searchAccounts = function (q, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/accounts/search", __assign({ q: q }, options))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Create a new application to obtain OAuth2 credentials.
     * @param client_name Name of your application
     * @param redirect_uris Where the user should be redirected after authorization
     * @param scopes Space separated list of scopes
     * @param website URL to the homepage of your app
     * @return Returns App with client_id and client_secret
     * @see https://docs.joinmastodon.org/api/rest/apps/#post-api-v1-apps
     */
    Mastodon.prototype.createApp = function (client_name, redirect_uris, scopes, website) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/apps", { client_name: client_name, redirect_uris: redirect_uris, scopes: scopes, website: website })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Confirm that the app’s OAuth2 credentials work.
     * @return Returns App
     * @see https://docs.joinmastodon.org/api/rest/apps/#get-api-v1-apps-verify-credentials
     */
    Mastodon.prototype.verifyAppCredential = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/apps/verify_credentials")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Accounts the user has blocked.
     * @param options Query parameters
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/blocks/#get-api-v1-blocks
     */
    Mastodon.prototype.fetchBlocks = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.paginationGenerator(this.url + "/api/v1/blocks", options)];
            });
        });
    };
    /**
     * Block an account
     * @param id ID of the target account
     * @return Returns Relationship
     * @see https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-block
     */
    Mastodon.prototype.blockAccount = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/accounts/" + id + "/block")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Unblock an account
     * @param id ID of the target account
     * @return Returns Relationship
     * @see https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-unblock
     */
    Mastodon.prototype.unblockAccount = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/accounts/" + id + "/unblock")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Custom emojis that are available on the server.
     * @return Returns array of Emoji
     * @see https://docs.joinmastodon.org/api/rest/custom-emojis/#get-api-v1-custom-emojis
     */
    Mastodon.prototype.fetchCustomEmojis = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/custom_emojis")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Domains the user has blocked.
     * @param options Query parameters
     * @return Returns array of string.
     * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#get-api-v1-domain-blocks
     */
    Mastodon.prototype.fetchDomainBlocks = function (options) {
        return this.paginationGenerator(this.url + "/api/v1/domain_blocks", options);
    };
    /**
     * Block a domain to hide all public posts from it, all notifications from it, and remove all followers from it.
     * @param domain Domain to block
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#post-api-v1-domain-blocks
     */
    Mastodon.prototype.blockDomain = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/domain_blocks", { domain: domain })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Remove a domain block.
     * @param domain Domain to unblock
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#delete-api-v1-domain-blocks
     */
    Mastodon.prototype.unblockDomain = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.delete(this.url + "/api/v1/domain_blocks", { domain: domain })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Accounts the user chose to endorse.
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/endorsements/#get-api-v1-endorsements
     */
    Mastodon.prototype.fetchEndorsements = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.paginationGenerator(this.url + "/api/v1/endorsements", options)];
            });
        });
    };
    /**
     * Endorse an account, i.e. choose to feature the account on the user’s public profile.
     * @param id ID of the target account
     * @return Returns Relationship
     * @see https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-pin
     */
    Mastodon.prototype.pinAccount = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/accounts/" + id + "/pin")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Unpin an account
     * @param id ID of the target account
     * @return Returns Relationship
     * @see https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-unpin
     */
    Mastodon.prototype.unpinAccount = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/accounts/" + id + "/unpin")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Statuses the user has favourited.
     * @param options Query parameters
     * @return Returns array of Status
     * @see https://docs.joinmastodon.org/api/rest/favourites/#get-api-v1-favourites
     */
    Mastodon.prototype.fetchFavouritedStatuses = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.paginationGenerator(this.url + "/api/v1/favourites", options)];
            });
        });
    };
    /**
     * Favourite a status.
     * @param id ID of the target status
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-favourite
     */
    Mastodon.prototype.favouriteStatus = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/statuses/" + id + "/favourite")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Undo the favourite of a status.
     * @param id ID of the target status
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-unfavourite
     */
    Mastodon.prototype.unfavouriteStatus = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/statuses/" + id + "/unfavourite")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Text filters the user has configured that potentially must be applied client-side.
     * @return An array of Filters
     * @see https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters
     */
    Mastodon.prototype.fetchFilters = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/filters")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Create a new filter.
     * @param phrase Keyword or phrase to filter
     * @param context Array of strings that means filtering context. each string is one of `home`, `notifications`, `public`, `thread`. At least one context must be specified
     * @param options Optional parameters
     * @return Returns Filter
     * @see https://docs.joinmastodon.org/api/rest/filters/#post-api-v1-filters
     */
    Mastodon.prototype.createFiler = function (phrase, context, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/filters", __assign({ phrase: phrase, context: context }, options))];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * A text filter.
     * @param id ID of the filter
     * @return Returns Filter
     * @see https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters-id
     */
    Mastodon.prototype.fetchFilter = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/filters/" + id)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Update a text filter.
     * @param id ID of the filter
     * @param options Optinal parameters
     * @return Returns Filter
     * @see https://docs.joinmastodon.org/api/rest/filters/#put-api-v1-filters-id
     */
    Mastodon.prototype.updateFilter = function (id, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.put(this.url + "/api/v1/filters/" + id, options)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Delete a text filter.
     * @param id ID of the filter
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/filters/#delete-api-v1-filters-id
     */
    Mastodon.prototype.removeFilter = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.delete(this.url + "/api/v1/filters/" + id)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Accounts that have requested to follow the user.
     * @param options Query parameters
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/follow-requests/#get-api-v1-follow-requests
     */
    Mastodon.prototype.fetchFollowRequests = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.paginationGenerator(this.url + "/api/v1/follow_requests", options)];
            });
        });
    };
    /**
     * Allow the account to follow the user.
     * @param id ID of the target account
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-authorize
     */
    Mastodon.prototype.authorizeFollowRequest = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/follow_requests/" + id + "/authorize")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Do not allow the account to follow the user.
     * @param id ID of the target account
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-reject
     */
    Mastodon.prototype.rejectFollowRequest = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/follow_requests/" + id + "/reject")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Accounts the user had past positive interactions with, but is not following yet.
     * @return An array of Accounts
     * @see https://docs.joinmastodon.org/api/rest/follow-suggestions/#get-api-v1-suggestions
     */
    Mastodon.prototype.fetchSuggestions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/suggestions")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Remove account from suggestions.
     * @param id ID of the target account
     * @return An array of Accounts
     * @see https://docs.joinmastodon.org/api/rest/follow-suggestions/#delete-api-v1-suggestions-account-id
     */
    Mastodon.prototype.removeSuggestion = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.delete(this.url + "/api/v1/suggestions/" + id)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Information about the server.
     * @return Returns Instance
     * @see https://docs.joinmastodon.org/api/rest/instances/#get-api-v1-instance
     */
    Mastodon.prototype.fetchInstance = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/instance")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Fetching peer instances
     * @return An array of peer instance's domain
     */
    Mastodon.prototype.fetchPeerInstances = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/instance/peers")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Fetching activities of current instance
     * @return An array of InstanceActivity
     */
    Mastodon.prototype.fetchInstanceActivity = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/instance/activity")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * User’s lists.
     * @return Returns array of List
     * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists
     */
    Mastodon.prototype.fetchLists = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/lists")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * User’s lists that a given account is part of.
     * @param id ID of the target list
     * @return Returns array of List
     * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-accounts-id-lists
     */
    Mastodon.prototype.fetchListByMembership = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/accounts/" + id + "/lists")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Accounts that are in a given list.
     * @param id ID of the target list
     * @param options Optional params
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id-accounts
     */
    Mastodon.prototype.fetchListAccounts = function (id, options) {
        return this.paginationGenerator(this.url + "/api/v1/list/" + id + "/accounts", options);
    };
    /**
     * A list
     * @param id ID of the targtet list
     * @return Returns List
     * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id
     */
    Mastodon.prototype.fetchList = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/lists/" + id)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Create a new list.
     * @param title The title of the list
     * @return Returns List
     * @see https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists
     */
    Mastodon.prototype.createList = function (title) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/lists", { title: title })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Update a list.
     * @param id ID of the target list
     * @param title The title of the list
     * @return Returns List
     * @see https://docs.joinmastodon.org/api/rest/lists/#put-api-v1-lists-id
     */
    Mastodon.prototype.updateList = function (id, title) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.put(this.url + "/api/v1/lists/" + id, { title: title })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Remove a list.
     * @param id ID of the target list
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id
     */
    Mastodon.prototype.removeList = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.delete(this.url + "/api/v1/lists/" + id)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Add accounts to a list.
     * @param id ID of the target list
     * @param account_ids Array of account IDs
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists-id-accounts
     */
    Mastodon.prototype.addAccountToList = function (id, account_ids) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/lists/" + id + "/accounts", { account_ids: account_ids })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Remove accounts from a list.
     * @param id ID of the target list
     * @param account_ids Array of account IDs
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id-accounts
     */
    Mastodon.prototype.removeAccountFromList = function (id, account_ids) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/lists/" + id + "/accounts", { account_ids: account_ids })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Upload a media attachment that can be used with a new status.
     * @param file Media to be uploaded (encoded using `multipart/form-data`)
     * @param options Form data
     * @return Returns Attachment
     * @see https://docs.joinmastodon.org/api/rest/media/#post-api-v1-media
     */
    Mastodon.prototype.uploadMediaAttachment = function (file, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/media", __assign({ file: file }, options), { headers: { 'Content-Type': 'multipart/form-data' } })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Update a media attachment. Can only be done before the media is attached to a status.
     * @param id ID of the target attachment
     * @param options Form data
     * @return Returns Returns Attachment
     * @see https://docs.joinmastodon.org/api/rest/media/#put-api-v1-media-id
     */
    Mastodon.prototype.updateMediaAttachment = function (id, options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.put(this.url + "/api/v1/media/" + id, options)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Accounts the user has muted.
     * @param options Query parameters
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/mutes/#get-api-v1-mutes
     */
    Mastodon.prototype.fetchMutes = function (options) {
        return this.paginationGenerator(this.url + "/api/v1/mutes", options);
    };
    /**
     * Mute an account.
     * @param id ID of the target account
     * @param notifications Whether the mute will mute notifications or not
     * @return Returns Relationship
     * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-mute
     */
    Mastodon.prototype.muteAccount = function (id, notifications) {
        if (notifications === void 0) { notifications = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/accounts/" + id + "/mute", { notifications: notifications })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Unmute an account
     * @param id ID of the target account
     * @return Returns Relationship
     * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-unmute
     */
    Mastodon.prototype.unmuteAccount = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/accounts/" + id + "/unmute")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Mute the conversation the status is part of, to no longer be notified about it.
     * @param id ID of the target account
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-mute
     */
    Mastodon.prototype.muteStatus = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/statuses/" + id + "/mute")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Unmute the conversation the status is part of.
     * @param id ID of the target account
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-unmute
     */
    Mastodon.prototype.unmuteStatus = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/statuses/" + id + "/unmute")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Notifications concerning the user.
     * @param options Query parameters
     * @return Returns array of Notification
     * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications
     */
    Mastodon.prototype.fetchNotifications = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/notifications", options)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Getting a single notification
     * @param id Notification ID
     * @return Returns Notification
     * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications-id
     */
    Mastodon.prototype.fetchNotification = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/notifications/" + id)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Delete all notifications from the server.
     * @return Returns an empty object.
     * @see https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-clear
     */
    Mastodon.prototype.clearNotifications = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/notifications/clear")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Delete a single notification from the server.
     * @param id Notification ID
     * @return Returns an empty object.
     * @see https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-dismiss
     */
    Mastodon.prototype.dissmissNotification = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/notifications/dismiss", { id: id })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Add a Web Push API subscription to receive notifications. See also: Web Push API
     * @param options Form data
     * @return Returns Push Subscription
     * @see https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription
     */
    Mastodon.prototype.addPushSubscription = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/push/subscription", options)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Push Subscription
     * @return Returns Push Subscription
     * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-push-subscription
     */
    Mastodon.prototype.fetchPushSubscription = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/push/subscription")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Update current Web Push API subscription. Only the `data` part can be updated, e.g. which types of notifications are desired. To change fundamentals, a new subscription must be created instead.
     * @param options Form data
     * @return Returns Push Subscription
     * @see https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription
     */
    Mastodon.prototype.updatePushSubscription = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.put(this.url + "/api/v1/push/subscription", options)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Remove the current Web Push API subscription.
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/notifications/#delete-api-v1-push-subscription
     */
    Mastodon.prototype.removePushSubscription = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.delete(this.url + "/api/v1/push/subscription")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Report an account.
     * @param account_id The ID of the account to report
     * @param status_ids The IDs of statuses to report as array
     * @param comment Reason for the report (up to 1,000 characters)
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/reports/#post-api-v1-reports
     */
    Mastodon.prototype.reportAccount = function (account_id, status_ids, comment) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/reports", { account_id: account_id, status_ids: status_ids, comment: comment })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Search for content in accounts, statuses and hashtags.
     * @param q The search query
     * @param resolve Attempt WebFinger look-up
     * @param version Version of Mastodon API (default: `'v2'`)
     * @return Returns Results
     * @see https://docs.joinmastodon.org/api/rest/search/#get-api-v2-search
     */
    Mastodon.prototype.search = function (q, resolve, version) {
        if (resolve === void 0) { resolve = false; }
        if (version === void 0) { version = 'v2'; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/" + version + "/search", { q: q, resolve: resolve })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Status
     * @param id ID of the target status
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id
     */
    Mastodon.prototype.fetchStatus = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/statuses/" + id)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * What the status replies to, and replies to it.
     * @param id ID of the target status
     * @return Returns Context
     * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-context
     */
    Mastodon.prototype.fetchStatusContext = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/statuses/" + id + "/context")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Link preview card for a status, if available.
     * @return Returns Card
     * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-card
     */
    Mastodon.prototype.fetchStatusCard = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/statuses/" + id + "/card")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Accounts that reblogged the status.
     * @param id ID of target status
     * @param options Query parameters
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-reblogged-by
     */
    Mastodon.prototype.fetchStatusRebloggedBy = function (id, options) {
        return this.paginationGenerator(this.url + "/api/v1/statuses/" + id + "/reblogged_by", options);
    };
    /**
     * Accounts that favourited the status.
     * @param id ID of target status
     * @param options Query parameters
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-favourited-by
     */
    Mastodon.prototype.fetchStatusFavouritedBy = function (id, options) {
        return this.paginationGenerator(this.url + "/api/v1/statuses/" + id + "/favourited_by", options);
    };
    /**
     * Publish a new status.
     * @param status The text of the status
     * @param options Optional parameter
     * @param idempotencyKey The Idempotency-Key of request header
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses
     */
    Mastodon.prototype.createStatus = function (status, options, idempotencyKey) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!idempotencyKey) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.post(this.url + "/api/v1/statuses", __assign({ status: status }, options), { headers: { 'Idempotency-Key': idempotencyKey } })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                    case 2: return [4 /*yield*/, this.post(this.url + "/api/v1/statuses", __assign({ status: status }, options))];
                    case 3: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Remove a status. The status may still be available a short while after the call.
     * @param id ID of the target status
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/statuses/#delete-api-v1-statuses-id
     */
    Mastodon.prototype.removeStatus = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.delete(this.url + "/api/v1/statuses/" + id)];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Reblog a status.
     * @param id ID of the target status
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-reblog
     */
    Mastodon.prototype.reblogStatus = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/statuses/" + id + "/reblog")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Undo the reblog of a status.
     * @param id ID of the target status
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unreblog
     */
    Mastodon.prototype.unreblogStatus = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/statuses/" + id + "/unreblog")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Pin user’s own status to user’s profile.
     * @param id ID of the target status
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-pin
     */
    Mastodon.prototype.pinStatus = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/statuses/" + id + "/pin")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Remove pinned status from user’s profile.
     * @param id ID of the target status
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unpin
     */
    Mastodon.prototype.unpinStatus = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/statuses/" + id + "/unpin")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Retrieving the home timeline
     * @param options Query parameters
     * @return An array of Statuses, most recent ones first.
     * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-home
     */
    Mastodon.prototype.fetchHomeTimeline = function (options) {
        return this.paginationGenerator(this.url + "/api/v1/timelines/home", options);
    };
    /**
     * Retrieving the community timeline (aka "Local timeline" in the UI)
     * @param options Query parameters
     * @return An iterable of Statuses, most recent ones first.
     * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public
     */
    Mastodon.prototype.fetchCommunityTimeline = function (options) {
        return this.paginationGenerator(this.url + "/api/v1/timelines/public", __assign({ local: true }, options));
    };
    /**
     * Retrieving the public timeline (aka "Federated timeline" in the UI)
     * @param options Query parameters
     * @return An iterable of Statuses, most recent ones first.
     * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public
     */
    Mastodon.prototype.fetchPublicTimeline = function (options) {
        return this.paginationGenerator(this.url + "/api/v1/timelines/public", options);
    };
    /**
     * Retrieving a tag timeline
     * @param id ID of the hashtag
     * @param options Query parameters
     * @return An iterable of Statuses, most recent ones first.
     * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-tag-hashtag
     */
    Mastodon.prototype.fetchTagTimeline = function (id, options) {
        return this.paginationGenerator(this.url + "/api/v1/timelines/tag/" + id, options);
    };
    /**
     * Retrieving a list timeline
     * @param id ID of the list
     * @param options Query parameters
     * @return An iterable of Statuses, most recent ones first.
     * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-list-list-id
     */
    Mastodon.prototype.fetchListTimeline = function (id, options) {
        return this.paginationGenerator(this.url + "/api/v1/timelines/list/" + id, options);
    };
    /**
     * Retrieving a direct timeline
     * @return An iterable of Statuses, most recent ones first.
     */
    Mastodon.prototype.fetchDirectTimeline = function (options) {
        // tslint:disable-next-line no-console
        console.warn('Direct timeline API has been deprecated. See https://github.com/tootsuite/mastodon/releases/tag/v2.6.0rc1');
        return this.paginationGenerator(this.url + "/api/v1/timelines/direct", options);
    };
    /**
     * Retrieving a conversation timeline
     * @return An array of Conversation
     */
    Mastodon.prototype.fetchConversations = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(this.url + "/api/v1/conversations")];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    /**
     * Following a remote user
     * @param uri `username@domain` of the person you want to follow
     * @return The local representation of the followed account, as an Account.
     * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user
     */
    Mastodon.prototype.followAccountByUsername = function (uri) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(this.url + "/api/v1/follows", { uri: uri })];
                    case 1: return [2 /*return*/, (_a.sent()).data];
                }
            });
        });
    };
    return Mastodon;
}(Gateway_1.Gateway));
exports.Mastodon = Mastodon;
//# sourceMappingURL=Mastodon.js.map