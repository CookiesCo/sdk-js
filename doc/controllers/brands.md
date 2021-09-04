# Brands

```ts
const brandsController = new BrandsController(client);
```

## Class Name

`BrandsController`

## Methods

* [List Brands](/doc/controllers/brands.md#list-brands)
* [Get Brand](/doc/controllers/brands.md#get-brand)


# List Brands

Retrieve a list of Cookies family brands.

```ts
async listBrands(
  requestOptions?: RequestOptions
): Promise<ApiResponse<BrandList>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BrandList`](/doc/models/brand-list.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await brandsController.listBrands();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Brand

Retrieve a single Cookies brand by its ID.

```ts
async getBrand(
  id: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BrandSpec>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Template, Required | ID of the brand to fetch. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BrandSpec`](/doc/models/brand-spec.md)

## Example Usage

```ts
const id = 'id0';
try {
  const { result, ...httpResponse } = await brandsController.getBrand(id);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

