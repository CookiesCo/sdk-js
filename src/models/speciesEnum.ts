/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SpeciesEnum
 */
export enum SpeciesEnum {
  UNSPECIFIED = 'UNSPECIFIED',
  SATIVA = 'SATIVA',
  HYBRIDSATIVA = 'HYBRID_SATIVA',
  HYBRID = 'HYBRID',
  HYBRIDINDICA = 'HYBRID_INDICA',
  INDICA = 'INDICA',
}

/**
 * Schema for SpeciesEnum
 */
export const speciesEnumSchema: Schema<SpeciesEnum> = stringEnum(SpeciesEnum);
