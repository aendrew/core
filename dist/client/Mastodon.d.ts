import { Gateway } from '../client/Gateway';
import { EventHandler } from './EventHandler';
import * as Options from './options';
import { Account, AccountCredentials } from '../entities/Account';
import { Application, OAuth } from '../entities/Application';
import { Attachment } from '../entities/Attachment';
import { Card } from '../entities/Card';
import { Context } from '../entities/Context';
import { Conversation } from '../entities/Conversation';
import { Emoji } from '../entities/Emoji';
import { Filter, FilterContext } from '../entities/Filter';
import { Instance, InstanceActivity } from '../entities/Instance';
import { List } from '../entities/List';
import { Notification } from '../entities/Notification';
import { PushSubscription } from '../entities/PushSubscription';
import { Relationship } from '../entities/Relationship';
import { Results } from '../entities/Results';
import { Status } from '../entities/Status';
export declare class Mastodon extends Gateway {
    /**
     * Generate an iterable of the pagination
     * @param id Path to the API, e.g. `timelines/pulbic`, `accounts/1/statuses` e.g.
     * @param params Query parameters
     * @return An async iterable of statuses, most recent ones first.
     */
    protected paginationGenerator<T extends string[] | {
        id: string;
    }[]>(path: string, params?: any): AsyncIterableIterator<T>;
    /**
     * Starting home timeline and notification streaming
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-user
     */
    streamUser(): EventHandler;
    /**
     * Starting federated timeline streaming
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public
     */
    streamPublicTimeline(): EventHandler;
    /**
     * Starting local timeline streaming
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-public-local
     */
    streamCommunityTimeline(): EventHandler;
    /**
     * Starting tag timeline streaming
     * @param id ID of the tag
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-tag-hashtag
     */
    streamTagTimeline(id: string): EventHandler;
    /**
     * Starting local tag timeline streaming
     * @param id ID of the tag
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-hashtag-local-tag-hashtag
     */
    streamLocalTagTimeline(id: string): EventHandler;
    /**
     * Starting list timeline streaming
     * @param id ID of the list
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-list-list-list-id
     */
    streamListTimeline(id: string): EventHandler;
    /**
     * Starting direct timeline streaming
     * @return Instance of EventEmitter
     * @see https://docs.joinmastodon.org/api/streaming/#get-api-v1-streaming-direct
     */
    streamDirectTimeline(): EventHandler;
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
    fetchAccessToken(code: string, client_id: string, client_secret: string, redirect_uri: string, grant_type?: string): Promise<{
        access_token: string;
    }>;
    /**
     * Fetching an account
     * @param id ID of the account
     * @return Returns Account
     * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id
     */
    fetchAccount(id: string): Promise<Account>;
    /**
     * User’s own account.
     * @return Returns Account with an extra source attribute.
     * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-verify-credentials
     */
    verfiyCredentials(): Promise<AccountCredentials>;
    /**
     * Update user’s own account.
     * @param options Form data
     * @return Returns Account
     * @see https://docs.joinmastodon.org/api/rest/accounts/#patch-api-v1-accounts-update-credentials
     */
    updateCredentials(options?: Options.UpdateCredentials): Promise<AccountCredentials>;
    /**
     * Accounts which follow the given account.
     * @param id ID of the target account
     * @param options Query paramerters
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-followers
     */
    fetchAccountFollowers(id: string, options?: Options.Pagination): AsyncIterableIterator<string[] | {
        id: string;
    }[]>;
    /**
     * Accounts which the given account is following.
     * @param id ID of the target account
     * @param options Query parameters
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-following
     */
    fetchAccountFollowing(id: string, options?: Options.Pagination): AsyncIterableIterator<string[] | {
        id: string;
    }[]>;
    /**
     * An account’s statuses.
     * @param id ID of the target account
     * @param options Query parameters
     * @return Returns array of Status
     * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-id-statuses
     */
    fetchAccountStatuses(id: string, options?: Options.FetchAccountStatuses): AsyncIterableIterator<Status[]>;
    /**
     * Follow an account.
     * @param id ID of the target account
     * @param reblogs Whether the followed account’s reblogs will show up in the home timeline
     * @return Returns Relationship
     * @see https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-follow
     */
    followAccount(id: string, reblogs?: boolean): Promise<Relationship>;
    /**
     * Unfollow an account.
     * @param id ID of the target account
     * @return Returns Relationship
     * @see https://docs.joinmastodon.org/api/rest/accounts/#post-api-v1-accounts-id-unfollow
     */
    unfollowAccount(id: string): Promise<Relationship>;
    /**
     * Relationship of the user to the given accounts in regards to following, blocking, muting, etc.
     * @param id Array of account IDs
     * @return Returns array of Relationship
     * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-relationships
     */
    fetchAccountRelationships(id: string[]): Promise<Relationship[]>;
    /**
     * Search for matching accounts by username, domain and display name.
     * @param q What to search for
     * @param options Query parameters
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/accounts/#get-api-v1-accounts-search
     */
    searchAccounts(q: string, options?: Options.SearchAccounts): Promise<Account[]>;
    /**
     * Create a new application to obtain OAuth2 credentials.
     * @param client_name Name of your application
     * @param redirect_uris Where the user should be redirected after authorization
     * @param scopes Space separated list of scopes
     * @param website URL to the homepage of your app
     * @return Returns App with client_id and client_secret
     * @see https://docs.joinmastodon.org/api/rest/apps/#post-api-v1-apps
     */
    createApp(client_name: string, redirect_uris: string, scopes: string, website?: string): Promise<OAuth>;
    /**
     * Confirm that the app’s OAuth2 credentials work.
     * @return Returns App
     * @see https://docs.joinmastodon.org/api/rest/apps/#get-api-v1-apps-verify-credentials
     */
    verifyAppCredential(): Promise<Application>;
    /**
     * Accounts the user has blocked.
     * @param options Query parameters
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/blocks/#get-api-v1-blocks
     */
    fetchBlocks(options?: Options.Pagination): Promise<AsyncIterableIterator<Account[]>>;
    /**
     * Block an account
     * @param id ID of the target account
     * @return Returns Relationship
     * @see https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-block
     */
    blockAccount(id: string): Promise<Relationship>;
    /**
     * Unblock an account
     * @param id ID of the target account
     * @return Returns Relationship
     * @see https://docs.joinmastodon.org/api/rest/blocks/#post-api-v1-accounts-id-unblock
     */
    unblockAccount(id: string): Promise<Relationship>;
    /**
     * Custom emojis that are available on the server.
     * @return Returns array of Emoji
     * @see https://docs.joinmastodon.org/api/rest/custom-emojis/#get-api-v1-custom-emojis
     */
    fetchCustomEmojis(): Promise<Emoji[]>;
    /**
     * Domains the user has blocked.
     * @param options Query parameters
     * @return Returns array of string.
     * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#get-api-v1-domain-blocks
     */
    fetchDomainBlocks(options?: Options.Pagination): AsyncIterableIterator<string[]>;
    /**
     * Block a domain to hide all public posts from it, all notifications from it, and remove all followers from it.
     * @param domain Domain to block
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#post-api-v1-domain-blocks
     */
    blockDomain(domain: string): Promise<void>;
    /**
     * Remove a domain block.
     * @param domain Domain to unblock
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/domain-blocks/#delete-api-v1-domain-blocks
     */
    unblockDomain(domain: string): Promise<void>;
    /**
     * Accounts the user chose to endorse.
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/endorsements/#get-api-v1-endorsements
     */
    fetchEndorsements(options?: Options.Pagination): Promise<AsyncIterableIterator<Account[]>>;
    /**
     * Endorse an account, i.e. choose to feature the account on the user’s public profile.
     * @param id ID of the target account
     * @return Returns Relationship
     * @see https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-pin
     */
    pinAccount(id: string): Promise<Relationship>;
    /**
     * Unpin an account
     * @param id ID of the target account
     * @return Returns Relationship
     * @see https://docs.joinmastodon.org/api/rest/endorsements/#post-api-v1-accounts-id-unpin
     */
    unpinAccount(id: string): Promise<Relationship>;
    /**
     * Statuses the user has favourited.
     * @param options Query parameters
     * @return Returns array of Status
     * @see https://docs.joinmastodon.org/api/rest/favourites/#get-api-v1-favourites
     */
    fetchFavouritedStatuses(options?: Options.Pagination): Promise<AsyncIterableIterator<Status[]>>;
    /**
     * Favourite a status.
     * @param id ID of the target status
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-favourite
     */
    favouriteStatus(id: string): Promise<Status>;
    /**
     * Undo the favourite of a status.
     * @param id ID of the target status
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/favourites/#post-api-v1-statuses-id-unfavourite
     */
    unfavouriteStatus(id: string): Promise<Status>;
    /**
     * Text filters the user has configured that potentially must be applied client-side.
     * @return An array of Filters
     * @see https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters
     */
    fetchFilters(): Promise<Filter[]>;
    /**
     * Create a new filter.
     * @param phrase Keyword or phrase to filter
     * @param context Array of strings that means filtering context. each string is one of `home`, `notifications`, `public`, `thread`. At least one context must be specified
     * @param options Optional parameters
     * @return Returns Filter
     * @see https://docs.joinmastodon.org/api/rest/filters/#post-api-v1-filters
     */
    createFiler(phrase: string, context: FilterContext, options?: Options.CreateFilter): Promise<Filter>;
    /**
     * A text filter.
     * @param id ID of the filter
     * @return Returns Filter
     * @see https://docs.joinmastodon.org/api/rest/filters/#get-api-v1-filters-id
     */
    fetchFilter(id: string): Promise<Filter>;
    /**
     * Update a text filter.
     * @param id ID of the filter
     * @param options Optinal parameters
     * @return Returns Filter
     * @see https://docs.joinmastodon.org/api/rest/filters/#put-api-v1-filters-id
     */
    updateFilter(id: string, options?: Options.UpdateFilter): Promise<Filter>;
    /**
     * Delete a text filter.
     * @param id ID of the filter
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/filters/#delete-api-v1-filters-id
     */
    removeFilter(id: string): Promise<void>;
    /**
     * Accounts that have requested to follow the user.
     * @param options Query parameters
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/follow-requests/#get-api-v1-follow-requests
     */
    fetchFollowRequests(options?: Options.Pagination): Promise<AsyncIterableIterator<Account[]>>;
    /**
     * Allow the account to follow the user.
     * @param id ID of the target account
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-authorize
     */
    authorizeFollowRequest(id: string): Promise<void>;
    /**
     * Do not allow the account to follow the user.
     * @param id ID of the target account
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/follow-requests/#post-api-v1-follow-requests-id-reject
     */
    rejectFollowRequest(id: string): Promise<void>;
    /**
     * Accounts the user had past positive interactions with, but is not following yet.
     * @return An array of Accounts
     * @see https://docs.joinmastodon.org/api/rest/follow-suggestions/#get-api-v1-suggestions
     */
    fetchSuggestions(): Promise<Account[]>;
    /**
     * Remove account from suggestions.
     * @param id ID of the target account
     * @return An array of Accounts
     * @see https://docs.joinmastodon.org/api/rest/follow-suggestions/#delete-api-v1-suggestions-account-id
     */
    removeSuggestion(id: string): Promise<void>;
    /**
     * Information about the server.
     * @return Returns Instance
     * @see https://docs.joinmastodon.org/api/rest/instances/#get-api-v1-instance
     */
    fetchInstance(): Promise<Instance>;
    /**
     * Fetching peer instances
     * @return An array of peer instance's domain
     */
    fetchPeerInstances(): Promise<string[]>;
    /**
     * Fetching activities of current instance
     * @return An array of InstanceActivity
     */
    fetchInstanceActivity(): Promise<InstanceActivity[]>;
    /**
     * User’s lists.
     * @return Returns array of List
     * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists
     */
    fetchLists(): Promise<List[]>;
    /**
     * User’s lists that a given account is part of.
     * @param id ID of the target list
     * @return Returns array of List
     * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-accounts-id-lists
     */
    fetchListByMembership(id: string): Promise<List[]>;
    /**
     * Accounts that are in a given list.
     * @param id ID of the target list
     * @param options Optional params
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id-accounts
     */
    fetchListAccounts(id: string, options: Options.Pagination): AsyncIterableIterator<Account[]>;
    /**
     * A list
     * @param id ID of the targtet list
     * @return Returns List
     * @see https://docs.joinmastodon.org/api/rest/lists/#get-api-v1-lists-id
     */
    fetchList(id: string): Promise<List>;
    /**
     * Create a new list.
     * @param title The title of the list
     * @return Returns List
     * @see https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists
     */
    createList(title: string): Promise<List>;
    /**
     * Update a list.
     * @param id ID of the target list
     * @param title The title of the list
     * @return Returns List
     * @see https://docs.joinmastodon.org/api/rest/lists/#put-api-v1-lists-id
     */
    updateList(id: string, title: string): Promise<List>;
    /**
     * Remove a list.
     * @param id ID of the target list
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id
     */
    removeList(id: string): Promise<void>;
    /**
     * Add accounts to a list.
     * @param id ID of the target list
     * @param account_ids Array of account IDs
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/lists/#post-api-v1-lists-id-accounts
     */
    addAccountToList(id: string, account_ids: string[]): Promise<void>;
    /**
     * Remove accounts from a list.
     * @param id ID of the target list
     * @param account_ids Array of account IDs
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/lists/#delete-api-v1-lists-id-accounts
     */
    removeAccountFromList(id: string, account_ids: string[]): Promise<void>;
    /**
     * Upload a media attachment that can be used with a new status.
     * @param file Media to be uploaded (encoded using `multipart/form-data`)
     * @param options Form data
     * @return Returns Attachment
     * @see https://docs.joinmastodon.org/api/rest/media/#post-api-v1-media
     */
    uploadMediaAttachment(file: File, options?: Options.UploadMedia): Promise<Attachment>;
    /**
     * Update a media attachment. Can only be done before the media is attached to a status.
     * @param id ID of the target attachment
     * @param options Form data
     * @return Returns Returns Attachment
     * @see https://docs.joinmastodon.org/api/rest/media/#put-api-v1-media-id
     */
    updateMediaAttachment(id: string, options?: Options.UpdateMedia): Promise<Attachment>;
    /**
     * Accounts the user has muted.
     * @param options Query parameters
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/mutes/#get-api-v1-mutes
     */
    fetchMutes(options?: Options.Pagination): AsyncIterableIterator<Account[]>;
    /**
     * Mute an account.
     * @param id ID of the target account
     * @param notifications Whether the mute will mute notifications or not
     * @return Returns Relationship
     * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-mute
     */
    muteAccount(id: string, notifications?: boolean): Promise<Relationship>;
    /**
     * Unmute an account
     * @param id ID of the target account
     * @return Returns Relationship
     * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-accounts-id-unmute
     */
    unmuteAccount(id: string): Promise<Relationship>;
    /**
     * Mute the conversation the status is part of, to no longer be notified about it.
     * @param id ID of the target account
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-mute
     */
    muteStatus(id: string): Promise<Status>;
    /**
     * Unmute the conversation the status is part of.
     * @param id ID of the target account
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/mutes/#post-api-v1-status-id-unmute
     */
    unmuteStatus(id: string): Promise<Status>;
    /**
     * Notifications concerning the user.
     * @param options Query parameters
     * @return Returns array of Notification
     * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications
     */
    fetchNotifications(options?: Options.FetchNotifications): Promise<Notification[]>;
    /**
     * Getting a single notification
     * @param id Notification ID
     * @return Returns Notification
     * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-notifications-id
     */
    fetchNotification(id: string): Promise<Notification>;
    /**
     * Delete all notifications from the server.
     * @return Returns an empty object.
     * @see https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-clear
     */
    clearNotifications(): Promise<void>;
    /**
     * Delete a single notification from the server.
     * @param id Notification ID
     * @return Returns an empty object.
     * @see https://docs.joinmastodon.org/api/rest/notifications/#post-api-v1-notifications-dismiss
     */
    dissmissNotification(id: string): Promise<void>;
    /**
     * Add a Web Push API subscription to receive notifications. See also: Web Push API
     * @param options Form data
     * @return Returns Push Subscription
     * @see https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription
     */
    addPushSubscription(options: Options.AddPushSubscription): Promise<PushSubscription>;
    /**
     * Push Subscription
     * @return Returns Push Subscription
     * @see https://docs.joinmastodon.org/api/rest/notifications/#get-api-v1-push-subscription
     */
    fetchPushSubscription(): Promise<PushSubscription>;
    /**
     * Update current Web Push API subscription. Only the `data` part can be updated, e.g. which types of notifications are desired. To change fundamentals, a new subscription must be created instead.
     * @param options Form data
     * @return Returns Push Subscription
     * @see https://docs.joinmastodon.org/api/rest/notifications/#put-api-v1-push-subscription
     */
    updatePushSubscription(options: Options.UpdatePushSubscription): Promise<PushSubscription>;
    /**
     * Remove the current Web Push API subscription.
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/notifications/#delete-api-v1-push-subscription
     */
    removePushSubscription(): Promise<void>;
    /**
     * Report an account.
     * @param account_id The ID of the account to report
     * @param status_ids The IDs of statuses to report as array
     * @param comment Reason for the report (up to 1,000 characters)
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/reports/#post-api-v1-reports
     */
    reportAccount(account_id: string, status_ids?: string[] | null, comment?: string | null): Promise<void>;
    /**
     * Search for content in accounts, statuses and hashtags.
     * @param q The search query
     * @param resolve Attempt WebFinger look-up
     * @param version Version of Mastodon API (default: `'v2'`)
     * @return Returns Results
     * @see https://docs.joinmastodon.org/api/rest/search/#get-api-v2-search
     */
    search<V extends 'v1' | 'v2' = 'v2'>(q: string, resolve?: boolean, version?: V): Promise<Results<V>>;
    /**
     * Status
     * @param id ID of the target status
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id
     */
    fetchStatus(id: string): Promise<Status>;
    /**
     * What the status replies to, and replies to it.
     * @param id ID of the target status
     * @return Returns Context
     * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-context
     */
    fetchStatusContext(id: string): Promise<Context>;
    /**
     * Link preview card for a status, if available.
     * @return Returns Card
     * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-card
     */
    fetchStatusCard(id: string): Promise<Card>;
    /**
     * Accounts that reblogged the status.
     * @param id ID of target status
     * @param options Query parameters
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-reblogged-by
     */
    fetchStatusRebloggedBy(id: string, options?: Options.Pagination): AsyncIterableIterator<Account[]>;
    /**
     * Accounts that favourited the status.
     * @param id ID of target status
     * @param options Query parameters
     * @return Returns array of Account
     * @see https://docs.joinmastodon.org/api/rest/statuses/#get-api-v1-statuses-id-favourited-by
     */
    fetchStatusFavouritedBy(id: string, options?: Options.Pagination): AsyncIterableIterator<Account[]>;
    /**
     * Publish a new status.
     * @param status The text of the status
     * @param options Optional parameter
     * @param idempotencyKey The Idempotency-Key of request header
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses
     */
    createStatus(status: string, options?: Options.CreateStatus, idempotencyKey?: string): Promise<{}>;
    /**
     * Remove a status. The status may still be available a short while after the call.
     * @param id ID of the target status
     * @return An empty object
     * @see https://docs.joinmastodon.org/api/rest/statuses/#delete-api-v1-statuses-id
     */
    removeStatus(id: string): Promise<void>;
    /**
     * Reblog a status.
     * @param id ID of the target status
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-reblog
     */
    reblogStatus(id: string): Promise<Status>;
    /**
     * Undo the reblog of a status.
     * @param id ID of the target status
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unreblog
     */
    unreblogStatus(id: string): Promise<Status>;
    /**
     * Pin user’s own status to user’s profile.
     * @param id ID of the target status
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-pin
     */
    pinStatus(id: string): Promise<Status>;
    /**
     * Remove pinned status from user’s profile.
     * @param id ID of the target status
     * @return Returns Status
     * @see https://docs.joinmastodon.org/api/rest/statuses/#post-api-v1-statuses-id-unpin
     */
    unpinStatus(id: string): Promise<Status>;
    /**
     * Retrieving the home timeline
     * @param options Query parameters
     * @return An array of Statuses, most recent ones first.
     * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-home
     */
    fetchHomeTimeline(options?: Options.FetchTimeline): AsyncIterableIterator<Status[]>;
    /**
     * Retrieving the community timeline (aka "Local timeline" in the UI)
     * @param options Query parameters
     * @return An iterable of Statuses, most recent ones first.
     * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public
     */
    fetchCommunityTimeline(options?: Options.FetchTimeline): AsyncIterableIterator<Status[]>;
    /**
     * Retrieving the public timeline (aka "Federated timeline" in the UI)
     * @param options Query parameters
     * @return An iterable of Statuses, most recent ones first.
     * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-public
     */
    fetchPublicTimeline(options?: Options.FetchTimeline): AsyncIterableIterator<Status[]>;
    /**
     * Retrieving a tag timeline
     * @param id ID of the hashtag
     * @param options Query parameters
     * @return An iterable of Statuses, most recent ones first.
     * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-tag-hashtag
     */
    fetchTagTimeline(id: string, options?: Options.FetchTimeline): AsyncIterableIterator<Status[]>;
    /**
     * Retrieving a list timeline
     * @param id ID of the list
     * @param options Query parameters
     * @return An iterable of Statuses, most recent ones first.
     * @see https://docs.joinmastodon.org/api/rest/timelines/#get-api-v1-timelines-list-list-id
     */
    fetchListTimeline(id: string, options?: Options.FetchTimeline): AsyncIterableIterator<Status[]>;
    /**
     * Retrieving a direct timeline
     * @return An iterable of Statuses, most recent ones first.
     */
    fetchDirectTimeline(options?: Options.FetchTimeline): AsyncIterableIterator<Status[]>;
    /**
     * Retrieving a conversation timeline
     * @return An array of Conversation
     */
    fetchConversations(): Promise<Conversation[]>;
    /**
     * Following a remote user
     * @param uri `username@domain` of the person you want to follow
     * @return The local representation of the followed account, as an Account.
     * @see https://github.com/tootsuite/documentation/blob/master/Using-the-API/API.md#following-a-remote-user
     */
    followAccountByUsername(uri: string): Promise<Account>;
}
