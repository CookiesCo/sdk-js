/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  FirstPartyBranding,
  firstPartyBrandingSchema,
} from './firstPartyBranding';

/** Branding information for a physical retail store. */
export interface StoreBranding {
  /** Specifies the first-party brand for a store. */
  firstParty: FirstPartyBranding;
}

export const storeBrandingSchema: Schema<StoreBranding> = object({
  firstParty: ['firstParty', lazy(() => firstPartyBrandingSchema)],
});
