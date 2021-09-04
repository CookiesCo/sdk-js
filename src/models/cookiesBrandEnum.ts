/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CookiesBrandEnum
 */
export enum CookiesBrandEnum {
  COOKIES = 'COOKIES',
  LEMONNADE = 'LEMONNADE',
}

/**
 * Schema for CookiesBrandEnum
 */
export const cookiesBrandEnumSchema: Schema<CookiesBrandEnum> = stringEnum(CookiesBrandEnum);