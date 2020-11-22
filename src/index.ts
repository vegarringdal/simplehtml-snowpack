import { applyPolyfill, ReflowStrategy } from "custom-elements-hmr-polyfill";

if (import.meta.env.MODE === 'development') {
  applyPolyfill(ReflowStrategy.NONE);
}

if (import.meta.hot) {
  import.meta.hot.accept();
  import("./elements/app-root").then(() => {
    document.body.innerHTML = "";
    document.body.innerHTML = "<app-root></app-root>";
  });
}
