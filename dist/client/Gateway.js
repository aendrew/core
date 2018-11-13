"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var querystring = require("querystring");
var MastodonError_1 = require("../errors/MastodonError");
var MastodonNotFoundError_1 = require("../errors/MastodonNotFoundError");
var MastodonRatelimitError_1 = require("../errors/MastodonRatelimitError");
var MastodonUnauthorizedError_1 = require("../errors/MastodonUnauthorizedError");
var MastodonURLResolveError_1 = require("../errors/MastodonURLResolveError");
var EventHandler_1 = require("./EventHandler");
var Gateway = /** @class */ (function () {
    /**
     * @param options Optional params
     * @param options.url Rest API URL of the instance
     * @param options.streamingUrl Streaming API URL of the instance
     * @param options.token API token of the user
     */
    function Gateway(options) {
        var _this = this;
        /** Rest API URL of the instance */
        this.url = '';
        /** Streaming API URL of the instance */
        this.streamingUrl = '';
        /**
         * Getting rest API URL of the instance
         * @return Rest API URL
         */
        this.getUrl = function () { return _this.url; };
        /**
         * Getting streaming API URL of the instance
         * @return Streaming API URL
         */
        this.getStreamingUrl = function () { return _this.streamingUrl; };
        /**
         * Getting token of authenticated user
         * @return The token
         */
        this.getToken = function () { return _this.token; };
        if (options) {
            this.url = options.url || '';
            this.streamingUrl = options.streamingUrl || '';
            if (options.token) {
                this.token = options.token;
            }
        }
    }
    /**
     * Setting rest API URL of the instance
     * @param url URL of the instance
     */
    Gateway.prototype.setUrl = function (url) { this.url = url.replace(/\/$/, ''); };
    /**
     * Setting streaming API URL of the instance
     * @param url URL of the instance
     */
    Gateway.prototype.setStreamingUrl = function (url) { this.streamingUrl = url.replace(/\/$/, ''); };
    /**
     * Setting token of authenticated user
     * @param token Token of the user
     */
    Gateway.prototype.setToken = function (token) { this.token = token; };
    /**
     * Fetch API wrapper function
     * @param options Axios options
     * @param parse Whether parse response before return
     * @return Parsed response object
     */
    Gateway.prototype.request = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var error_1, status_1, errorMessage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!options.headers) {
                            options.headers = {};
                        }
                        if (!options.headers['Content-Type']) {
                            options.headers['Content-Type'] = 'application/json';
                        }
                        if (!this.url) {
                            throw new MastodonURLResolveError_1.MastodonURLResolveError('REST API URL has not been specified, Use Mastodon.setUrl to set your instance\'s URL');
                        }
                        if (this.token) {
                            options.headers.Authorization = "Bearer " + this.token;
                        }
                        options.transformResponse = [function (data) {
                                try {
                                    return JSON.parse(data);
                                }
                                catch (_a) {
                                    return data;
                                }
                            }];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1.default.request(options)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        error_1 = _a.sent();
                        status_1 = (error_1 && error_1.response).status;
                        errorMessage = (error_1 && error_1.response && error_1.response.data).error;
                        switch (status_1) {
                            case 401:
                                throw new MastodonUnauthorizedError_1.MastodonUnauthorizedError(errorMessage);
                            case 404:
                                throw new MastodonNotFoundError_1.MastodonNotFoundError(errorMessage);
                            case 429:
                                throw new MastodonRatelimitError_1.MastodonRatelimitError(errorMessage);
                            default:
                                throw new MastodonError_1.MastodonError('MastodonError', errorMessage || 'Unexpected error occurred');
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * HTTP GET
     * @param url URL to request
     * @param params Query strings
     * @param options Fetch API options
     * @param parse Whether parse response before return
     */
    Gateway.prototype.get = function (url, params, options) {
        if (params === void 0) { params = {}; }
        if (options === void 0) { options = {}; }
        return this.request(__assign({ method: 'GET', url: url + (Object.keys(params).length ? '?' + querystring.stringify(params) : '') }, options));
    };
    /**
     * HTTP POST
     * @param url URL to request
     * @param body Payload
     * @param options Fetch API options
     * @param parse Whether parse response before return
     */
    Gateway.prototype.post = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.request(__assign({ method: 'POST', url: url, data: JSON.stringify(body) }, options));
    };
    /**
     * HTTP PUT
     * @param url URL to request
     * @param body Payload
     * @param options Fetch API options
     * @param parse Whether parse response before return
     */
    Gateway.prototype.put = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.request(__assign({ method: 'PUT', url: url, data: JSON.stringify(body) }, options));
    };
    /**
     * HTTP DELETE
     * @param url URL to request
     * @param body Payload
     * @param options Fetch API options
     * @param parse Whether parse response before return
     */
    Gateway.prototype.delete = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.request(__assign({ method: 'DELETE', url: url, data: JSON.stringify(body) }, options));
    };
    /**
     * HTTP PATCH
     * @param url URL to request
     * @param body Payload
     * @param options Fetch API options
     * @param parse Whether parse response before return
     */
    Gateway.prototype.patch = function (url, body, options) {
        if (body === void 0) { body = {}; }
        if (options === void 0) { options = {}; }
        return this.request(__assign({ method: 'PATCH', url: url, data: JSON.stringify(body) }, options));
    };
    /**
     * Start streaming
     * @param id ID of the channel, e.g. `public`, `user`, `public/local` etc
     * @return Instance of EventEmitter
     */
    Gateway.prototype.stream = function (url, params) {
        if (!this.streamingUrl) {
            throw new MastodonURLResolveError_1.MastodonURLResolveError('Streaming API URL has not been specified, Use Mastodon.setStreamingUrl to set your instance\'s URL');
        }
        if (this.token) {
            params.access_token = this.token;
        }
        return new EventHandler_1.EventHandler(url, params);
    };
    return Gateway;
}());
exports.Gateway = Gateway;
//# sourceMappingURL=Gateway.js.map