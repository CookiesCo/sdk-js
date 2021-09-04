/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { BrandSpec, brandSpecSchema } from './brandSpec';
import { Breeder, breederSchema } from './breeder';
import { MaterialInfo, materialInfoSchema } from './materialInfo';
import { Name, nameSchema } from './name';
import { SpeciesEnum, speciesEnumSchema } from './speciesEnum';
import { StrainMedia, strainMediaSchema } from './strainMedia';
import { StrainSocial, strainSocialSchema } from './strainSocial';
import { Theme, themeSchema } from './theme';

/** Describes a Cookies strain. */
export interface Strain {
  /** Unique ID assigned to this strain. */
  id: string;
  /** Unique URL slug assigned to this strain. */
  slug: string;
  /** Name of the strain. */
  name: Name;
  /** Brand info for the strain. */
  brand: BrandSpec;
  /** Species for the strain. */
  species: SpeciesEnum;
  /** Media assigned to a strain. */
  media: StrainMedia;
  /** Material info for a strain. */
  material: MaterialInfo;
  /** Breeder info for a strain. */
  breeder?: Breeder[];
  /** Whether a strain is visible. */
  visible?: boolean;
  /** Social information for a strain. */
  social?: StrainSocial;
  /** Whether a strain is featured. */
  featured?: boolean;
  /** Whether a strain is exclusive to Cookies. */
  exclusive?: boolean;
  /** Theme information for a strain. */
  theme?: Theme;
}

export const strainSchema: Schema<Strain> = object({
  id: ['id', string()],
  slug: ['slug', string()],
  name: ['name', lazy(() => nameSchema)],
  brand: ['brand', lazy(() => brandSpecSchema)],
  species: ['species', speciesEnumSchema],
  media: ['media', lazy(() => strainMediaSchema)],
  material: ['material', lazy(() => materialInfoSchema)],
  breeder: ['breeder', optional(array(lazy(() => breederSchema)))],
  visible: ['visible', optional(boolean())],
  social: ['social', optional(lazy(() => strainSocialSchema))],
  featured: ['featured', optional(boolean())],
  exclusive: ['exclusive', optional(boolean())],
  theme: ['theme', optional(lazy(() => themeSchema))],
});
