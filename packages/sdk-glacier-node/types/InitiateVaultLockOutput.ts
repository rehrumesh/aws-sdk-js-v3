import {ResponseMetadata as __ResponseMetadata__} from '@aws/types';

/**
 * <p>Contains the Amazon Glacier response to your request.</p>
 */
export interface InitiateVaultLockOutput {
    /**
     * <p>The lock ID, which is used to complete the vault locking process.</p>
     */
    lockId?: string;

    /**
     * Metadata about the response received, including the HTTP status code, HTTP
     * headers, and any request identifiers recognized by the SDK.
     */
    $metadata: __ResponseMetadata__;
}