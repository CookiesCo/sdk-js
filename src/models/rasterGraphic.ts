/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { MediaItem, mediaItemSchema } from './mediaItem';

/** Describes a rasterized asset which may carry variants with enhanced resolution. */
export interface RasterGraphic {
  /** Standard-size graphic asset. */
  standard?: MediaItem;
  /** Retina-size graphic asset. */
  retina?: MediaItem;
}

export const rasterGraphicSchema: Schema<RasterGraphic> = object({
  standard: ['standard', optional(lazy(() => mediaItemSchema))],
  retina: ['retina', optional(lazy(() => mediaItemSchema))],
});
