/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Brand, brandSchema } from './brand';
import { MediaItem, mediaItemSchema } from './mediaItem';

/** Descriptor which specifies a first-party or third-party brand. */
export interface BrandSpec {
  /** System ID for a brand. Do not key against this: it is guaranteed to change. */
  id: string;
  /** Assigned ID for this brand. Immutable and reliable. */
  bid: string;
  /** OpenCannabis payload describing this brand. */
  brand: Brand;
  /** Whether this brand is owned by Cookies. */
  owned?: boolean;
  /** Media/asset icon for this brand. */
  icon?: MediaItem;
  /** Negative-mode icon for this brand. */
  negativeIcon?: MediaItem;
  /** Whether this brand is live. */
  live?: boolean;
  /** Sort weight of this brand. */
  sortWeight?: number;
}

export const brandSpecSchema: Schema<BrandSpec> = object({
  id: ['id', string()],
  bid: ['bid', string()],
  brand: ['brand', lazy(() => brandSchema)],
  owned: ['owned', optional(boolean())],
  icon: ['icon', optional(lazy(() => mediaItemSchema))],
  negativeIcon: ['negativeIcon', optional(lazy(() => mediaItemSchema))],
  live: ['live', optional(boolean())],
  sortWeight: ['sortWeight', optional(number())],
});
