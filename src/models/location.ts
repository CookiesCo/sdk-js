/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { Address, addressSchema } from './address';
import { Geo, geoSchema } from './geo';

/** Describes physical location info. */
export interface Location {
  /** Street address. */
  address: Address;
  /** Geo point or boundary. */
  geo: Geo;
  /** Geo hash. */
  hash: string;
}

export const locationSchema: Schema<Location> = object({
  address: ['address', lazy(() => addressSchema)],
  geo: ['geo', lazy(() => geoSchema)],
  hash: ['hash', string()],
});
