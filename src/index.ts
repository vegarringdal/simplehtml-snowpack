import { applyPolyfill, ReflowStrategy } from "custom-elements-hmr-polyfill";

if (import.meta.env.MODE === "development") {
  applyPolyfill(ReflowStrategy.NONE);
  if (import.meta.hot) {
    import.meta.hot.accept();
    import("./elements/app-root").then(() => {
      const tagname = document.body.firstElementChild?.tagName;
      const classnames = document.body.firstElementChild?.className;
      if (tagname) {
        document.body.innerHTML = "";
        document.body.innerHTML = `<${tagname} class="${classnames}"></${tagname}>`; /// little more dynamic
      }
    });
  } else {
  }
}

if (import.meta.env.MODE !== "development") {
  //import("./elements/app-root"); // why is this making hmr fail ?
}