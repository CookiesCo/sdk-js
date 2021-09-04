/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, boolean, lazy, object, Schema, string } from '../schema';
import { Contact, contactSchema } from './contact';
import { Hours, hoursSchema } from './hours';
import { Location, locationSchema } from './location';
import { Name, nameSchema } from './name';
import { StoreBranding, storeBrandingSchema } from './storeBranding';
import {
  StoreCapabilityEnum,
  storeCapabilityEnumSchema,
} from './storeCapabilityEnum';
import { StoreKey, storeKeySchema } from './storeKey';
import { StoreMedia, storeMediaSchema } from './storeMedia';
import { StoreOrdering, storeOrderingSchema } from './storeOrdering';
import { StoreSocial, storeSocialSchema } from './storeSocial';
import { StoreTypeEnum, storeTypeEnumSchema } from './storeTypeEnum';
import { StoreWeb, storeWebSchema } from './storeWeb';

/** Specifies a physical retail location owned or operated by Cookies, or partnering with Cookies to sell products made by Cookies. */
export interface Store {
  /** Describes unique key information for a retail store. */
  key: StoreKey;
  /** Specifies whether this retail location is live. */
  live: boolean;
  /** Specifies the unique URL slug for this store. */
  slug: string;
  /** Specifies naming and labeling information for a Cookies store. */
  name: Name;
  /** Specifies the type for a retail store. */
  type: StoreTypeEnum;
  /** Specifies location information for a retail store. */
  location: Location;
  /** Specifies contact information for a retail store. */
  contact: Contact;
  /** Specifies documented capabilities at a retail store. */
  capability: StoreCapabilityEnum[];
  /** Specifies regular and special hours for a retail store. */
  hours: Hours;
  /** Specifies social media accounts for a retail store. */
  social: StoreSocial;
  /** Specifies photography and other assets for a retail store. */
  media: StoreMedia;
  /** Specifies website and link information for a retail store. */
  web: StoreWeb;
  /** Specifies branding information for a retail store. */
  branding: StoreBranding;
  /** Specifies online ordering information for a retail store. */
  ordering: StoreOrdering;
}

export const storeSchema: Schema<Store> = object({
  key: ['key', lazy(() => storeKeySchema)],
  live: ['live', boolean()],
  slug: ['slug', string()],
  name: ['name', lazy(() => nameSchema)],
  type: ['type', storeTypeEnumSchema],
  location: ['location', lazy(() => locationSchema)],
  contact: ['contact', lazy(() => contactSchema)],
  capability: ['capability', array(storeCapabilityEnumSchema)],
  hours: ['hours', lazy(() => hoursSchema)],
  social: ['social', lazy(() => storeSocialSchema)],
  media: ['media', lazy(() => storeMediaSchema)],
  web: ['web', lazy(() => storeWebSchema)],
  branding: ['branding', lazy(() => storeBrandingSchema)],
  ordering: ['ordering', lazy(() => storeOrderingSchema)],
});