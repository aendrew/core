import { EventEmitter } from 'eventemitter3';
import { Conversation } from 'src/entities/Conversation';
import * as WebSocket from 'websocket';
import { Notification } from '../entities/Notification';
import { Status } from '../entities/Status';
interface EventTypes {
    /** Status posted */
    update: Status;
    /** Status deleted */
    delete: Status['id'];
    /** User's notification */
    notification: Notification;
    /** User's filter changed */
    filters_changed: undefined;
    /** Status added to a conversation */
    conversation: Conversation;
    /** WebSocket connected */
    connect: WebSocket.connection;
    /** WebSocket connection failed */
    connectFailed: Error;
}
export declare class EventHandler extends EventEmitter {
    /**
     * Starting stream with a specified channel
     * @param id URL of the websocket endpoint
     * @param token Access token
     */
    constructor(url: string, options: {
        [key: string]: string;
    });
    on<E extends keyof EventTypes, P = EventTypes[E]>(event: E, callback: (payload: P) => void): this;
}
export {};
