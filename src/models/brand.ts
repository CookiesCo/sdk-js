/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { BrandAsset, brandAssetSchema } from './brandAsset';
import { Name, nameSchema } from './name';
import { Theme, themeSchema } from './theme';

/** OpenCannabis brand specification payload. */
export interface Brand {
  /** Naming information for a brand. */
  name: Name;
  /** Media/known assets for a brand. */
  media?: BrandAsset[];
  /** Theme information for a brand. */
  theme?: Theme;
  /** Slug assigned to this brand. */
  slug?: string;
  /** Full URL for this brand. */
  link?: string;
}

export const brandSchema: Schema<Brand> = object({
  name: ['name', lazy(() => nameSchema)],
  media: ['media', optional(array(lazy(() => brandAssetSchema)))],
  theme: ['theme', optional(lazy(() => themeSchema))],
  slug: ['slug', optional(string())],
  link: ['link', optional(string())],
});
