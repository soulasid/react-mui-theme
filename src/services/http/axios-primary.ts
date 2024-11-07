import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});
instance.defaults.headers.post['Content-Type'] = 'application/json';
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
let isRefreshing = false;
let failedQueue: {
  resolve: (value?: string) => void;
  reject: (reason?: unknown) => void;
}[] = [];
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config as AxiosRequestConfig;
    if (originalRequest?.url !== '/v1/admin/auth/login') {
      return Promise.reject(error);
    }
    if (!originalRequest._retry && error?.response?.status === 401) {
      originalRequest._retry = true;
      if (!isRefreshing) {
        try {
          isRefreshing = true;
          const data = await getNewRefreshToken();
          // setAccessToken(data.accessToken, data.refreshToken);
          failedQueue.forEach((req) => req.resolve(data.accessToken));
          failedQueue = [];
          originalRequest.headers!['Authorization'] =
            `Bearer ${data.accessToken}`;
          originalRequest._retry = true; // Prevent recursion
          return instance(originalRequest);
        } catch (error) {
          failedQueue.forEach((req) => req.reject(error));
          failedQueue = [];
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          return Promise.reject(error);
        } finally {
          isRefreshing = false; // Reset refreshing flag
        }
      }
      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve: (token) => {
            originalRequest.headers!['Authorization'] = `Bearer ${token}`;
            originalRequest._retry = true;
            resolve(instance(originalRequest));
          },
          reject: (err: unknown) => reject(err),
        });
      });
    }
    return Promise.reject(error);
  }
);

export default instance;
