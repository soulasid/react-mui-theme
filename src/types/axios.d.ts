import type { AxiosRequestConfig as Config } from 'axios';
declare module 'axios' {
  export interface AxiosRequestConfig extends Config {
    raw?: boolean;
    silent?: boolean;
    _retry?: boolean;
  }
}
