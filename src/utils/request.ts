import axios from "axios";

import type { InternalAxiosRequestConfig } from "axios";

import { logoutApp } from "../helper";
import { ElMessage } from "element-plus";
import router from "../router";
// import { logoutApp } from "../helper";
import i18n from "@/i18n";

const t = (i18n.global as any).t;
export const baseURL =
  process.env.NODE_ENV === "production" ? `http://172.16.6.76:8000/api/` : "http://192.168.137.60:8000/api/";

export const baseMediaURL =
  process.env.NODE_ENV === "production" ? "" : `http://172.16.6.76:8000`;

const ServiceGenerate = () => {
  const service = axios.create({
    baseURL,
    timeout: 0,
  });
  service.interceptors.request.use(AuthConfig, ErrorHandler);
  service.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        for (const key of Object.keys(errors)) {
          setTimeout(() => {
            ElMessage({
              message: errors[key][0],
              type: "error",
              duration: 8000,
            });
          }, 0.5 * 1000);
        }
      } else if (error.response?.status === 403) {
        ElMessage({
          message: t("app.pageForbiden"),
          type: "error",
          duration: 5 * 1000,
        });
      } else if (error.response?.status === 401) {
        ElMessage({
          message: t("app.reLogin"),
          type: "error",
          duration: 5 * 1000,
        });
        logoutApp();
        await router.replace({ name: "login" });
      } else if (!axios?.isCancel(error)) {
        ElMessage({
          message: error?.response?.data?.message
            ? error?.response?.data?.message
            : "Ýalňyşlyk ýüze çykdy",
          type: "error",
          duration: 5 * 1000,
        });
      }
      return Promise.reject(error);
    }
  );
  return service;
};

const AuthConfig = (config: InternalAxiosRequestConfig) => {
  // Add X-Access-Token header to every request, you can add other custom headers here

  if (localStorage.getItem("token")) {
    config!.headers!["Authorization"] = `Bearer ${localStorage.getItem(
      "token"
    )}`;
  }

  // config!.headers!["language"] = `${localStorage.getItem("user-locale")}`;
  return config;
};

const ErrorHandler = (error: any) => {
  Promise.reject(error);
};

export default ServiceGenerate;

/* "build": "run-p type-check \"build-only {@}\" --", */
