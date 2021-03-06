/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** Specifies phone-based contact information. */
export interface Phone {
  /** E164-formatted phone number. */
  e164: string;
  /** National display format for the number. */
  display: string;
}

export const phoneSchema: Schema<Phone> = object({
  e164: ['e164', string()],
  display: ['display', string()],
});
