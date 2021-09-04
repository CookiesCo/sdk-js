/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** Identifying key information for a media asset. */
export interface MediaKey {
  /** Unique ID for a known media asset. */
  id: string;
}

export const mediaKeySchema: Schema<MediaKey> = object({
  id: ['id', string()],
});