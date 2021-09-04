/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { MediaItem, mediaItemSchema } from './mediaItem';

/** Describes a rasterized responsive graphic asset. */
export interface ResponsiveGraphic {
  /** Portrait-style asset. */
  portrait?: MediaItem;
  /** Landscape-style asset. */
  landscape?: MediaItem;
}

export const responsiveGraphicSchema: Schema<ResponsiveGraphic> = object({
  portrait: ['portrait', optional(lazy(() => mediaItemSchema))],
  landscape: ['landscape', optional(lazy(() => mediaItemSchema))],
});
