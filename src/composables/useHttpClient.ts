// src/composables/useHttpClient.ts

import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { ref, Ref, ComputedRef } from 'vue';

class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      // You can add other Axios configuration options here
    });
  }

  public async get<T>(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(url);
      return response.data;
    } catch (error) {
      this.handleRequestError(error);
      throw error;
    }
  }

  // Add other HTTP methods as needed

  private handleRequestError(error: AxiosError): void {
    // Handle and log the error as needed
    console.error('HTTP request error:', error.message);
  }
}

export function useHttpClient(baseURL: string): {
  get: <T>(url: string) => Promise<T>;
  // Add other HTTP methods as needed
} {
  const httpClient = new HttpClient(baseURL);

  const get = async <T>(url: string): Promise<T> => {
    try {
      const response = await httpClient.get<T>(url);
      return response;
    } catch (error) {
      // Handle error or rethrow if needed
      throw error;
    }
  };

  // Add other HTTP methods as needed

  return {
    get,
    // Add other HTTP methods as needed
  };
}
