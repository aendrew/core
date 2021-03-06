import { Account } from './Account';
import { Status } from './Status';
import { Tag } from './Tag';
export interface Results<V extends 'v1' | 'v2'> {
    /** An array of matched Accounts */
    accounts: Account[];
    /** An array of matched Statuses */
    statuses: Status[];
    /** An array of matched hashtags, as strings */
    hashtags: V extends 'v1' ? string[] : V extends 'v2' ? Tag[] : never;
}
