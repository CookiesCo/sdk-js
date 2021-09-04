/**
 * Cookies APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  CookiesBrandEnum,
  cookiesBrandEnumSchema,
} from '../models/cookiesBrandEnum';
import { Store, storeSchema } from '../models/store';
import { StoreList, storeListSchema } from '../models/storeList';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class StoresController extends BaseController {
  /**
   * Retrieve a list of Cookies stores, optionally filtered by 1st-party brand.
   *
   * @param brand Brand to filter by.
   * @return Response from the API call
   */
  async listStores(
    brand?: CookiesBrandEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<StoreList>> {
    const req = this.createRequest('GET', '/app/v1/stores');
    req.baseUrl('default');
    const mapped = req.prepareArgs({
      brand: [brand, optional(cookiesBrandEnumSchema)],
    });
    req.query('brand', mapped.brand);
    return req.callAsJson(storeListSchema, requestOptions);
  }

  /**
   * Retrieve a list of Cookies stores, optionally filtered by 1st-party brand.
   *
   * @param id ID of the store to fetch.
   * @return Response from the API call
   */
  async getStore(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Store>> {
    const req = this.createRequest('GET');
    req.baseUrl('default');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/app/v1/stores/${mapped.id}`;
    return req.callAsJson(storeSchema, requestOptions);
  }
}
