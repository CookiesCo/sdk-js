/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for StoreTypeEnum
 */
export enum StoreTypeEnum {
  FIRSTPARTY = 'FIRST_PARTY',
  THIRDPARTY = 'THIRD_PARTY',
  NETWORK = 'NETWORK',
}

/**
 * Schema for StoreTypeEnum
 */
export const storeTypeEnumSchema: Schema<StoreTypeEnum> = stringEnum(StoreTypeEnum);
