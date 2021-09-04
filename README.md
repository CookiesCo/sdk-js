
# Getting Started with Cookies API

## Introduction

Main Cookies application API, which provides endpoints for developers working with Cookies. Fetch canonical records relating to brands, stores, and strains.

## Installation

The following section explains how to use the Cookies APILib library in a new project.

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `xApikey` | `string` | Consumer API key issued by Cookies. |
| `environment` | Environment | The API environment. <br> **Default: `Environment.Sandbox`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `apikey` | `string` | Consumer API key issued by Cookies. |

The API client can be initialized as follows:

```ts
const client = new Client({
  xApikey: Liquid error: Value cannot be null. (Parameter 'input'),
  timeout: 0,
  environment: Environment.Sandbox
  apikey: 'apikey',
})
```

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| production | Production data and hosting environment. |
| sandbox | **Default** Testing and development environment. |

## Authorization

This API uses `Custom Query Parameter`.

## List of APIs

* [Stores](/doc/controllers/stores.md)
* [Strains](/doc/controllers/strains.md)
* [Brands](/doc/controllers/brands.md)

## Classes Documentation

* [ApiResponse](/doc/api-response.md)
* [ApiError](/doc/api-error.md)

