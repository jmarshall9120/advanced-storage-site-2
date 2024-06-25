// setup amplify
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

// import this after install '@mdi/font' package
import "@mdi/font/css/materialdesignicons.min.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

Amplify.configure(outputs);

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({ ssr: true});
  app.vueApp.use(vuetify);
});
