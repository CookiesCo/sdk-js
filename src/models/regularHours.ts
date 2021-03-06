/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { HoursRange, hoursRangeSchema } from './hoursRange';

/** Describes regular store hours. */
export interface RegularHours {
  /** Days which a given regular hours rule applies to. */
  day: string[];
  /** Hours to apply on the specified days. */
  hours: HoursRange[];
}

export const regularHoursSchema: Schema<RegularHours> = object({
  day: ['day', array(string())],
  hours: ['hours', array(lazy(() => hoursRangeSchema))],
});
