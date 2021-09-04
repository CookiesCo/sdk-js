# Strains

```ts
const strainsController = new StrainsController(client);
```

## Class Name

`StrainsController`

## Methods

* [List Strains](/doc/controllers/strains.md#list-strains)
* [Get Strain](/doc/controllers/strains.md#get-strain)


# List Strains

Retrieve a list of Cookies signature strains.

```ts
async listStrains(
  brand?: CookiesBrandEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<StrainList>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brand` | [`CookiesBrandEnum \| undefined`](/doc/models/cookies-brand-enum.md) | Query, Optional | Brand to filter by. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`StrainList`](/doc/models/strain-list.md)

## Example Usage

```ts
const brand = 'LEMONNADE';
try {
  const { result, ...httpResponse } = await strainsController.listStrains(brand);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "strain": [
    {
      "id": "C6C20-0005",
      "slug": "cereal-milk",
      "name": {
        "primary": "Cereal Milk"
      },
      "brand": {
        "id": "2bqMdszNwnpdAk27sPVygO",
        "bid": "C6BI-00001",
        "brand": {
          "name": {
            "primary": "Cookies",
            "display": "Cookies"
          },
          "media": [
            {
              "raster": {
                "standard": {
                  "key": {
                    "id": "asset/1cd34f38d45fd1bb/original/CBite-Blue-on-White-No-Padding"
                  },
                  "uri": "https://a.c6cdn.net/o/id: \"asset/1cd34f38d45fd1bb/original/CBite-Blue-on-White-No-Padding\"\n"
                }
              }
            }
          ],
          "theme": {
            "primary": {
              "hex": "#00A0DC"
            },
            "secondary": {
              "hex": "#00A0DC"
            },
            "alert": {
              "hex": "#FEFEFE"
            }
          },
          "slug": "cookies",
          "link": "https://cookies.co"
        },
        "owned": true,
        "icon": {
          "key": {
            "id": "asset/1cd34f38d45fd1bb/original/CBite-Blue-on-White-No-Padding"
          },
          "type": {
            "imageType": "PNG"
          },
          "servingUri": "https://a.c6cdn.net/o/asset/1cd34f38d45fd1bb/original/CBite-Blue-on-White-No-Padding.png"
        },
        "negativeIcon": {
          "key": {
            "id": "asset/375b253864f96eb7/original/C-Bite-Logo-White"
          },
          "type": {
            "imageType": "PNG"
          },
          "servingUri": "https://a.c6cdn.net/o/asset/375b253864f96eb7/original/C-Bite-Logo-White.png"
        },
        "live": true
      },
      "species": "HYBRID_INDICA",
      "media": {
        "artwork": {
          "raster": {
            "key": {
              "id": "asset/7ba27d31d8d52815/original/qn2lvlstqgr3m129zchh"
            },
            "type": {
              "imageType": "PNG"
            },
            "servingUri": "https://a.c6cdn.net/o/asset/7ba27d31d8d52815/original/qn2lvlstqgr3m129zchh.png"
          }
        },
        "lockup": {
          "raster": {
            "key": {
              "id": "asset/213170c76b255777/original/hk8x3z3yi7m1wubcdhi5"
            },
            "type": {
              "imageType": "PNG"
            },
            "servingUri": "https://a.c6cdn.net/o/asset/213170c76b255777/original/hk8x3z3yi7m1wubcdhi5.png"
          }
        },
        "head": {
          "key": {
            "id": "asset/4823d1fce8eb087b/original/rmg6lliqbuug2gfjsobp"
          },
          "type": {
            "imageType": "JPG"
          },
          "servingUri": "https://a.c6cdn.net/o/asset/4823d1fce8eb087b/original/rmg6lliqbuug2gfjsobp.jpg"
        },
        "packaging": {
          "key": {
            "id": "asset/7be7ba10c5fd1a0e/original/yjttmo0gx5n52qhb9bxm"
          },
          "type": {
            "imageType": "PNG"
          },
          "servingUri": "https://a.c6cdn.net/o/asset/7be7ba10c5fd1a0e/original/yjttmo0gx5n52qhb9bxm.png"
        },
        "card": {
          "key": {
            "id": "asset/38f1a7fbe7ca7410/original/pbyxz78gcpuxov1la3my"
          },
          "type": {
            "imageType": "JPG"
          },
          "servingUri": "https://a.c6cdn.net/o/asset/38f1a7fbe7ca7410/original/pbyxz78gcpuxov1la3my.jpg"
        },
        "menu": {
          "key": {
            "id": "asset/33e81c07d5f477c5/original/zaxotcciy6nymdgg1b4z"
          },
          "type": {
            "imageType": "JPG"
          },
          "servingUri": "https://a.c6cdn.net/o/asset/33e81c07d5f477c5/original/zaxotcciy6nymdgg1b4z.jpg"
        },
        "macro": [
          {
            "key": {
              "id": "asset/4f8d9725a5902e5f/original/ns8vkc0yquteia6fcu84"
            },
            "type": {
              "imageType": "JPG"
            },
            "servingUri": "https://a.c6cdn.net/o/asset/4f8d9725a5902e5f/original/ns8vkc0yquteia6fcu84.jpg"
          }
        ],
        "material": [
          {
            "key": {
              "id": "asset/5f4d2cb53b815441/original/rquzm6a77foh7sieoa9u"
            },
            "type": {
              "imageType": "JPG"
            },
            "servingUri": "https://a.c6cdn.net/o/asset/5f4d2cb53b815441/original/rquzm6a77foh7sieoa9u.jpg"
          }
        ],
        "cultivation": [
          {
            "key": {
              "id": "asset/397b5467352f7831/original/fhtb2a9s3et4qwtjnsh8"
            },
            "type": {
              "imageType": "JPG"
            },
            "servingUri": "https://a.c6cdn.net/o/asset/397b5467352f7831/original/fhtb2a9s3et4qwtjnsh8.jpg"
          }
        ],
        "lifestyle": [
          {
            "key": {
              "id": "asset/612367a44510573a/original/znewtw6apjic0kmjp69w"
            },
            "type": {
              "imageType": "JPG"
            },
            "servingUri": "https://a.c6cdn.net/o/asset/612367a44510573a/original/znewtw6apjic0kmjp69w.jpg"
          },
          {
            "key": {
              "id": "asset/7f859e7a5b58c582/original/txiy0hwhewcygj5ogvpk"
            },
            "type": {
              "imageType": "JPG"
            },
            "servingUri": "https://a.c6cdn.net/o/asset/7f859e7a5b58c582/original/txiy0hwhewcygj5ogvpk.jpg"
          },
          {
            "key": {
              "id": "asset/32563c34950dc0f7/original/magcqmtf7njqhweixxeq"
            },
            "type": {
              "imageType": "JPG"
            },
            "servingUri": "https://a.c6cdn.net/o/asset/32563c34950dc0f7/original/magcqmtf7njqhweixxeq.jpg"
          },
          {
            "key": {
              "id": "asset/416fa1b24cfeb144/original/h0ct38i0mww35jb5la9z"
            },
            "type": {
              "imageType": "JPG"
            },
            "servingUri": "https://a.c6cdn.net/o/asset/416fa1b24cfeb144/original/h0ct38i0mww35jb5la9z.jpg"
          }
        ],
        "tile": {
          "key": {
            "id": "asset/213170c76b255777/original/hk8x3z3yi7m1wubcdhi5"
          },
          "type": {
            "imageType": "PNG"
          },
          "servingUri": "https://a.c6cdn.net/o/asset/213170c76b255777/original/hk8x3z3yi7m1wubcdhi5.png"
        }
      },
      "material": {
        "breeder": "Powerzzzup",
        "aroma": "Creamy, fruity with a hint of gas",
        "flavor": "Sweet sugar cream",
        "experience": "Relaxed body feel with a happy head high"
      },
      "featured": true,
      "exclusive": true,
      "visible": true,
      "breeder": [
        {
          "id": "6mtzG80SnE5mKfvI4KbkLV",
          "slug": "powerzzzup",
          "name": {
            "primary": "Powerzzzup"
          }
        }
      ],
      "social": {
        "reviewCount": 43,
        "reviewRating": 90
      }
    }
  ]
}
```


# Get Strain

Retrieve a Cookies strain by its ID.

```ts
async getStrain(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<Strain>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | ID of the strain to fetch. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Strain`](/doc/models/strain.md)

## Example Usage

```ts
const id = '"C6C20-0005"';
try {
  const { result, ...httpResponse } = await strainsController.getStrain(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response *(as JSON)*

```json
{
  "id": "C6C20-0005",
  "slug": "cereal-milk",
  "name": {
    "primary": "Cereal Milk"
  },
  "brand": {
    "id": "2bqMdszNwnpdAk27sPVygO",
    "bid": "C6BI-00001",
    "brand": {
      "name": {
        "primary": "Cookies",
        "display": "Cookies"
      },
      "media": [
        {
          "raster": {
            "standard": {
              "key": {
                "id": "asset/1cd34f38d45fd1bb/original/CBite-Blue-on-White-No-Padding"
              },
              "uri": "https://a.c6cdn.net/o/id: \"asset/1cd34f38d45fd1bb/original/CBite-Blue-on-White-No-Padding\"\n"
            }
          }
        }
      ],
      "theme": {
        "primary": {
          "hex": "#00A0DC"
        },
        "secondary": {
          "hex": "#00A0DC"
        },
        "alert": {
          "hex": "#FEFEFE"
        }
      },
      "slug": "cookies",
      "link": "https://cookies.co"
    },
    "owned": true,
    "icon": {
      "key": {
        "id": "asset/1cd34f38d45fd1bb/original/CBite-Blue-on-White-No-Padding"
      },
      "type": {
        "imageType": "PNG"
      },
      "servingUri": "https://a.c6cdn.net/o/asset/1cd34f38d45fd1bb/original/CBite-Blue-on-White-No-Padding.png"
    },
    "negativeIcon": {
      "key": {
        "id": "asset/375b253864f96eb7/original/C-Bite-Logo-White"
      },
      "type": {
        "imageType": "PNG"
      },
      "servingUri": "https://a.c6cdn.net/o/asset/375b253864f96eb7/original/C-Bite-Logo-White.png"
    },
    "live": true
  },
  "species": "HYBRID_INDICA",
  "media": {
    "artwork": {
      "raster": {
        "key": {
          "id": "asset/7ba27d31d8d52815/original/qn2lvlstqgr3m129zchh"
        },
        "type": {
          "imageType": "PNG"
        },
        "servingUri": "https://a.c6cdn.net/o/asset/7ba27d31d8d52815/original/qn2lvlstqgr3m129zchh.png"
      }
    },
    "lockup": {
      "raster": {
        "key": {
          "id": "asset/213170c76b255777/original/hk8x3z3yi7m1wubcdhi5"
        },
        "type": {
          "imageType": "PNG"
        },
        "servingUri": "https://a.c6cdn.net/o/asset/213170c76b255777/original/hk8x3z3yi7m1wubcdhi5.png"
      }
    },
    "head": {
      "key": {
        "id": "asset/4823d1fce8eb087b/original/rmg6lliqbuug2gfjsobp"
      },
      "type": {
        "imageType": "JPG"
      },
      "servingUri": "https://a.c6cdn.net/o/asset/4823d1fce8eb087b/original/rmg6lliqbuug2gfjsobp.jpg"
    },
    "packaging": {
      "key": {
        "id": "asset/7be7ba10c5fd1a0e/original/yjttmo0gx5n52qhb9bxm"
      },
      "type": {
        "imageType": "PNG"
      },
      "servingUri": "https://a.c6cdn.net/o/asset/7be7ba10c5fd1a0e/original/yjttmo0gx5n52qhb9bxm.png"
    },
    "card": {
      "key": {
        "id": "asset/38f1a7fbe7ca7410/original/pbyxz78gcpuxov1la3my"
      },
      "type": {
        "imageType": "JPG"
      },
      "servingUri": "https://a.c6cdn.net/o/asset/38f1a7fbe7ca7410/original/pbyxz78gcpuxov1la3my.jpg"
    },
    "menu": {
      "key": {
        "id": "asset/33e81c07d5f477c5/original/zaxotcciy6nymdgg1b4z"
      },
      "type": {
        "imageType": "JPG"
      },
      "servingUri": "https://a.c6cdn.net/o/asset/33e81c07d5f477c5/original/zaxotcciy6nymdgg1b4z.jpg"
    },
    "macro": [
      {
        "key": {
          "id": "asset/4f8d9725a5902e5f/original/ns8vkc0yquteia6fcu84"
        },
        "type": {
          "imageType": "JPG"
        },
        "servingUri": "https://a.c6cdn.net/o/asset/4f8d9725a5902e5f/original/ns8vkc0yquteia6fcu84.jpg"
      }
    ],
    "material": [
      {
        "key": {
          "id": "asset/5f4d2cb53b815441/original/rquzm6a77foh7sieoa9u"
        },
        "type": {
          "imageType": "JPG"
        },
        "servingUri": "https://a.c6cdn.net/o/asset/5f4d2cb53b815441/original/rquzm6a77foh7sieoa9u.jpg"
      }
    ],
    "cultivation": [
      {
        "key": {
          "id": "asset/397b5467352f7831/original/fhtb2a9s3et4qwtjnsh8"
        },
        "type": {
          "imageType": "JPG"
        },
        "servingUri": "https://a.c6cdn.net/o/asset/397b5467352f7831/original/fhtb2a9s3et4qwtjnsh8.jpg"
      }
    ],
    "lifestyle": [
      {
        "key": {
          "id": "asset/612367a44510573a/original/znewtw6apjic0kmjp69w"
        },
        "type": {
          "imageType": "JPG"
        },
        "servingUri": "https://a.c6cdn.net/o/asset/612367a44510573a/original/znewtw6apjic0kmjp69w.jpg"
      },
      {
        "key": {
          "id": "asset/7f859e7a5b58c582/original/txiy0hwhewcygj5ogvpk"
        },
        "type": {
          "imageType": "JPG"
        },
        "servingUri": "https://a.c6cdn.net/o/asset/7f859e7a5b58c582/original/txiy0hwhewcygj5ogvpk.jpg"
      },
      {
        "key": {
          "id": "asset/32563c34950dc0f7/original/magcqmtf7njqhweixxeq"
        },
        "type": {
          "imageType": "JPG"
        },
        "servingUri": "https://a.c6cdn.net/o/asset/32563c34950dc0f7/original/magcqmtf7njqhweixxeq.jpg"
      },
      {
        "key": {
          "id": "asset/416fa1b24cfeb144/original/h0ct38i0mww35jb5la9z"
        },
        "type": {
          "imageType": "JPG"
        },
        "servingUri": "https://a.c6cdn.net/o/asset/416fa1b24cfeb144/original/h0ct38i0mww35jb5la9z.jpg"
      }
    ],
    "tile": {
      "key": {
        "id": "asset/213170c76b255777/original/hk8x3z3yi7m1wubcdhi5"
      },
      "type": {
        "imageType": "PNG"
      },
      "servingUri": "https://a.c6cdn.net/o/asset/213170c76b255777/original/hk8x3z3yi7m1wubcdhi5.png"
    }
  },
  "material": {
    "breeder": "Powerzzzup",
    "aroma": "Creamy, fruity with a hint of gas",
    "flavor": "Sweet sugar cream",
    "experience": "Relaxed body feel with a happy head high"
  },
  "featured": true,
  "exclusive": true,
  "visible": true,
  "breeder": [
    {
      "id": "6mtzG80SnE5mKfvI4KbkLV",
      "slug": "powerzzzup",
      "name": {
        "primary": "Powerzzzup"
      }
    }
  ],
  "social": {
    "reviewCount": 43,
    "reviewRating": 90
  }
}
```
