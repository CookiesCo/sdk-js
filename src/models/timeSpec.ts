/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

/** Specifies a place in time in relative terms to the start of a given day. */
export interface TimeSpec {
  /** Hours value for this time specification. */
  hours: number;
  /** Minutes value for this time specification. */
  minutes?: string;
}

export const timeSpecSchema: Schema<TimeSpec> = object({
  hours: ['hours', number()],
  minutes: ['minutes', optional(string())],
});
