
# Strain Media

Specifies media/assets attached to a Cookies strain.

## Structure

`StrainMedia`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `artwork` | [`DualFormatGraphic \| undefined`](/doc/models/dual-format-graphic.md) | Optional | Artwork imagery for a strain. |
| `head` | [`MediaItem \| undefined`](/doc/models/media-item.md) | Optional | Headshot images for a strain. |
| `packaging` | [`MediaItem \| undefined`](/doc/models/media-item.md) | Optional | Packaging photography for a strain. |
| `material` | [`MediaItem[] \| undefined`](/doc/models/media-item.md) | Optional | Material photography for a strain. |
| `lockup` | [`DualFormatGraphic \| undefined`](/doc/models/dual-format-graphic.md) | Optional | Lockup artwork for a strain. |
| `card` | [`MediaItem \| undefined`](/doc/models/media-item.md) | Optional | Card artwork for a strain. |
| `menu` | [`MediaItem \| undefined`](/doc/models/media-item.md) | Optional | Menu artwork for a strain. |
| `macro` | [`MediaItem[] \| undefined`](/doc/models/media-item.md) | Optional | Macro flower photography for a strain. |
| `cultivation` | [`MediaItem[] \| undefined`](/doc/models/media-item.md) | Optional | Late-stage cultivation photography for a strain. |
| `lifestyle` | [`MediaItem[] \| undefined`](/doc/models/media-item.md) | Optional | Lifestyle photography associated with a strain. |
| `tile` | [`MediaItem \| undefined`](/doc/models/media-item.md) | Optional | Tile graphic associated with a strain. |
| `masthead` | [`ResponsiveGraphic \| undefined`](/doc/models/responsive-graphic.md) | Optional | Masthead images associated with a strain. |

## Example (as JSON)

```json
{
  "artwork": null,
  "head": null,
  "packaging": null,
  "material": null,
  "lockup": null,
  "card": null,
  "menu": null,
  "macro": null,
  "cultivation": null,
  "lifestyle": null,
  "tile": null,
  "masthead": null
}
```

