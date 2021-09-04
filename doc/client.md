
# Client Class Documentation

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

## Cookies API Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| stores | Gets StoresController |
| strains | Gets StrainsController |
| brands | Gets BrandsController |

