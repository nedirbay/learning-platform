// import './assets/main.css'

import "animate.css";
import "@mdi/font/css/materialdesignicons.css";
import "@/styles/index.scss";
import "./index.css";
import "./assets/base.css";

import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import icon from "./components/icon.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import "sweetalert2/dist/sweetalert2.min.css";


const app = createApp(App);
app.use(i18n);


app.component("Icon", icon);

app.use(ElementPlus);

app.use(router);

app.mount("#app");
