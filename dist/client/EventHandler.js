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
var eventemitter3_1 = require("eventemitter3");
var querystring = require("querystring");
var WebSocket = require("websocket");
var EventHandler = /** @class */ (function (_super) {
    __extends(EventHandler, _super);
    /**
     * Starting stream with a specified channel
     * @param id URL of the websocket endpoint
     * @param token Access token
     */
    function EventHandler(url, options) {
        var _this = _super.call(this) || this;
        var client = new WebSocket.client();
        client.connect(url + "?" + querystring.stringify(options));
        client.on('connect', function (connection) {
            connection.on('message', function (message) {
                if (message.type !== 'utf8' || !message.utf8Data) {
                    return;
                }
                var parsedMessage = JSON.parse(message.utf8Data);
                var event = parsedMessage.event;
                var payload = parsedMessage.payload;
                if (event === 'update' || event === 'notification') {
                    payload = JSON.parse(parsedMessage.payload);
                }
                _this.emit(event, payload);
            });
            _this.emit('connect', connection);
        });
        client.on('connectFailed', function (errorDescription) {
            _this.emit('connectFailed', errorDescription);
        });
        return _this;
    }
    EventHandler.prototype.on = function (event, callback) {
        return _super.prototype.on.call(this, event, callback);
    };
    return EventHandler;
}(eventemitter3_1.EventEmitter));
exports.EventHandler = EventHandler;
//# sourceMappingURL=EventHandler.js.map