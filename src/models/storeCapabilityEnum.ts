/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for StoreCapabilityEnum
 */
export enum StoreCapabilityEnum {
  PICKUP = 'PICKUP',
  DELIVERY = 'DELIVERY',
  CURBSIDE = 'CURBSIDE',
  LOYALTY = 'LOYALTY',
  DEBIT = 'DEBIT',
  MEDICAL = 'MEDICAL',
  ADULTUSE = 'ADULT_USE',
}

/**
 * Schema for StoreCapabilityEnum
 */
export const storeCapabilityEnumSchema: Schema<StoreCapabilityEnum> = stringEnum(StoreCapabilityEnum);
