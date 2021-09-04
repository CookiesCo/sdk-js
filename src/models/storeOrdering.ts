/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, Schema, string } from '../schema';

/** Describes order submission and menu information for a given Cookies store. */
export interface StoreOrdering {
  /** Ordering platform in use by a Cookies store. */
  platform: string;
  /** Ordering platform ID in use by a Cookies store (public). */
  storeId: string;
  /** Whether online ordering is enabled for a given Cookies store. */
  enabled: boolean;
}

export const storeOrderingSchema: Schema<StoreOrdering> = object({
  platform: ['platform', string()],
  storeId: ['storeId', string()],
  enabled: ['enabled', boolean()],
});
