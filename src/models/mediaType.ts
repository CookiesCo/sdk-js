/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Specifies type information for a media asset. */
export interface MediaType {
  /** Specifies an image format, as applicable. */
  imageType: string;
  /** Specifies the broad "kind" of media. */
  kind?: string;
}

export const mediaTypeSchema: Schema<MediaType> = object({
  imageType: ['imageType', string()],
  kind: ['kind', optional(string())],
});