import {AbortSignal as __AbortSignal__, BrowserHttpOptions as __HttpOptions__} from '@aws/types';

/**
 * <p>The input values for <code>CompleteVaultLock</code>.</p>
 */
export interface CompleteVaultLockInput {
    /**
     * <p>The <code>AccountId</code> value is the AWS account ID. This value must match the AWS account ID associated with the credentials used to sign the request. You can either specify an AWS account ID or optionally a single '<code>-</code>' (hyphen), in which case Amazon Glacier uses the AWS account ID associated with the credentials used to sign the request. If you specify your account ID, do not include any hyphens ('-') in the ID.</p>
     */
    accountId: string;

    /**
     * <p>The name of the vault.</p>
     */
    vaultName: string;

    /**
     * <p>The <code>lockId</code> value is the lock ID obtained from a <a>InitiateVaultLock</a> request.</p>
     */
    lockId: string;

    /**
     * The maximum number of times this operation should be retried. If set, this
     * value will override the `maxRetries` configuration set on the client for
     * this command.
     */
    $maxRetries?: number;

    /**
     * An object that may be queried to determine if the underlying operation
     * has been aborted.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
     */
    $abortSignal?: __AbortSignal__

    /**
     * Per-request HTTP configuration options. If set, any options specified will
     * override the corresponding HTTP option set on the client for this command.
     */
    $httpOptions?: __HttpOptions__
}