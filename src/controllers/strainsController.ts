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
import { Strain, strainSchema } from '../models/strain';
import { StrainList, strainListSchema } from '../models/strainList';
import { optional, string } from '../schema';
import { BaseController } from './baseController';

export class StrainsController extends BaseController {
  /**
   * Retrieve a list of Cookies signature strains.
   *
   * @param brand Brand to filter by.
   * @return Response from the API call
   */
  async listStrains(
    brand?: CookiesBrandEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<StrainList>> {
    const req = this.createRequest('GET', '/app/v1/strains');
    req.baseUrl('default');
    const mapped = req.prepareArgs({
      brand: [brand, optional(cookiesBrandEnumSchema)],
    });
    req.query('brand', mapped.brand);
    return req.callAsJson(strainListSchema, requestOptions);
  }

  /**
   * Retrieve a Cookies strain by its ID.
   *
   * @param id ID of the strain to fetch.
   * @return Response from the API call
   */
  async getStrain(
    id: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Strain>> {
    const req = this.createRequest('GET');
    req.baseUrl('default');
    const mapped = req.prepareArgs({ id: [id, string()] });
    req.appendTemplatePath`/app/v1/strains/${mapped.id}`;
    return req.callAsJson(strainSchema, requestOptions);
  }
}
