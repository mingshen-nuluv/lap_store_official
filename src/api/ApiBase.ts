import axios, { AxiosRequestConfig } from "axios";
import omitBy from "lodash/omitBy";
import isNil from "lodash/isNil";

export default class ApiBase {
    baseUrl: string;
    constructor() {
        this.baseUrl = "https://jsonplaceholder.typicode.com/";
    }

    httpPost(uri: any, data: any, options: any) {
        return this.httpRequest(uri, "POST", data, options);
    }

    httpPut(uri: any, data: any, options: any) {
        return this.httpRequest(uri, "PUT", data, options);
    }

    httpGet(uri: any, data: any, options: any) {
        return this.httpRequest(uri, "GET", data, options);
    }

    httpDelete(uri: any, options: any) {
        return this.httpRequest(uri, "DELETE", undefined, options);
    }

    httpRequest(uri: string, method: string, data: undefined, options: AxiosRequestConfig<any>) {
        return new Promise((resolve, reject) => {
            axios({
                method: method,
                url: this.baseUrl + uri,
                data: method !== "GET" ? data : omitBy(data, isNil),
                params: method === "GET" ? data || "" : "",
                withCredentials: true,
                ...options
            })
                .then((res) => {
                    resolve(res);
                })
                .catch((axiosError) => {
                    console.error(axiosError);
                    reject("SERVER_ERROR");
                });
        });
    }
}