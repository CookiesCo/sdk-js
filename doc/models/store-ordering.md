
# Store Ordering

Describes order submission and menu information for a given Cookies store.

## Structure

`StoreOrdering`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `platform` | `string` | Required | Ordering platform in use by a Cookies store. |
| `storeId` | `string` | Required | Ordering platform ID in use by a Cookies store (public). |
| `enabled` | `boolean` | Required | Whether online ordering is enabled for a given Cookies store. |

## Example (as JSON)

```json
{
  "platform": "DUTCHIE",
  "storeId": "Z6RTWRL9Dwgw7oPtp",
  "enabled": true
}
```

