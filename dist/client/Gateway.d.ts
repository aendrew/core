import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { EventHandler } from './EventHandler';
export declare class Gateway {
    /** Rest API URL of the instance */
    protected url: string;
    /** Streaming API URL of the instance */
    protected streamingUrl: string;
    /** API token of the user */
    protected token?: string;
    /**
     * @param options Optional params
     * @param options.url Rest API URL of the instance
     * @param options.streamingUrl Streaming API URL of the instance
     * @param options.token API token of the user
     */
    constructor(options: {
        url?: string;
        streamingUrl?: string;
        token?: string;
    });
    /**
     * Getting rest API URL of the instance
     * @return Rest API URL
     */
    getUrl: () => string;
    /**
     * Getting streaming API URL of the instance
     * @return Streaming API URL
     */
    getStreamingUrl: () => string;
    /**
     * Getting token of authenticated user
     * @return The token
     */
    getToken: () => string | undefined;
    /**
     * Setting rest API URL of the instance
     * @param url URL of the instance
     */
    setUrl(url: string): void;
    /**
     * Setting streaming API URL of the instance
     * @param url URL of the instance
     */
    setStreamingUrl(url: string): void;
    /**
     * Setting token of authenticated user
     * @param token Token of the user
     */
    setToken(token: string): void;
    /**
     * Fetch API wrapper function
     * @param options Axios options
     * @param parse Whether parse response before return
     * @return Parsed response object
     */
    protected request<T>(options: AxiosRequestConfig): Promise<AxiosResponse<T>>;
    /**
     * HTTP GET
     * @param url URL to request
     * @param params Query strings
     * @param options Fetch API options
     * @param parse Whether parse response before return
     */
    protected get<T>(url: string, params?: {}, options?: {}): Promise<AxiosResponse<T>>;
    /**
     * HTTP POST
     * @param url URL to request
     * @param body Payload
     * @param options Fetch API options
     * @param parse Whether parse response before return
     */
    protected post<T>(url: string, body?: {}, options?: {}): Promise<AxiosResponse<T>>;
    /**
     * HTTP PUT
     * @param url URL to request
     * @param body Payload
     * @param options Fetch API options
     * @param parse Whether parse response before return
     */
    protected put<T>(url: string, body?: {}, options?: {}): Promise<AxiosResponse<T>>;
    /**
     * HTTP DELETE
     * @param url URL to request
     * @param body Payload
     * @param options Fetch API options
     * @param parse Whether parse response before return
     */
    protected delete<T>(url: string, body?: {}, options?: {}): Promise<AxiosResponse<T>>;
    /**
     * HTTP PATCH
     * @param url URL to request
     * @param body Payload
     * @param options Fetch API options
     * @param parse Whether parse response before return
     */
    protected patch<T>(url: string, body?: {}, options?: {}): Promise<AxiosResponse<T>>;
    /**
     * Start streaming
     * @param id ID of the channel, e.g. `public`, `user`, `public/local` etc
     * @return Instance of EventEmitter
     */
    protected stream(url: string, params: {
        [key: string]: string;
    }): EventHandler;
}
