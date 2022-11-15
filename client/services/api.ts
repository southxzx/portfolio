import HOST from "../helpers/variables/host";
import { IResponse } from "../models/common";
require('isomorphic-fetch');

export interface configs {
  domain?: string | undefined;
  url: string;
  authorization?: string | undefined;
  header?: HeadersInit,
  params?: any;
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  options?: {
    json?: boolean;
    formData?: boolean;
    formUrlEncoded?: boolean;
    grantType?: boolean;
  };
  id?: number | string | undefined;
}

const UrlParamater = {
  encode: (data: object) => {
    if (!data || typeof data !== 'object') {
      return '';
    }
    return `?${Object.entries(data)
      .map((entry: any[]) => `${entry[0]}=${entry[1]}`)
      .join('&')}`;
  },
  encode2: (data: object) => {
    if (!data || typeof data !== 'object') {
      return '';
    }
    return `${Object.entries(data)
      .map((entry: any[]) => `${entry[0]}=${entry[1]}`)
      .join('&')}`;
  },
};

const callApi = async ({
  domain = HOST.DOMAIN,
  url,
  ...configs
}: configs) => {
  let header: HeadersInit = {
    "Content-Type": "application/json",
    "accessToken": '',
    "userkey": ''
  }

  if (configs.authorization && configs.authorization.length > 0) {
    header['Authorization'] = configs.authorization;
  }

  url = `${domain}/${url}`;

  if (configs.method === 'GET' && configs.params) {
    url += UrlParamater.encode(configs.params);
  }

  if (configs.method === 'DELETE' || configs.method === 'PUT') {
    if (configs.id) {
      url = `${url}/${configs.id}`;
    } else {
      url = url;
    }
  }

  if (
    configs.params &&
    (configs.method === 'POST' || configs.method === 'PUT' || configs.method === 'DELETE')
  ) {
    if (configs.options?.json) {
      configs.params = JSON.stringify(configs.params);
      header['Content-type'] = 'application/json';
    } else if (configs.options?.formData) {
      header['Content-type'] = 'multipart/form-data';
    } else {
      header['Content-type'] = 'application/x-www-form-urlencoded';
      if (configs.options?.grantType) {
        configs.params = UrlParamater.encode2(configs.params);
      } else {
        configs.params = Object.entries(configs.params).reduce((body, entry) => {
          body.push({ name: entry[0], data: entry[1] });
          return body;
        }, [] as any[]);
      }
    }
  }

  const init: RequestInit = {
    headers: configs.header,
    body: configs.params,
    method: configs.method
  }

  const res: IResponse = await fetch(url, init).then(function (response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })
    .then(function (data) {
      return data;
    });

  return res;
}

export default callApi;