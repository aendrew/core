import { MastodonError } from './MastodonError';
export declare class MastodonRatelimitError extends MastodonError {
    constructor(message: string);
}
