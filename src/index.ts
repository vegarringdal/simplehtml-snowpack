import { applyPolyfill, ReflowStrategy } from "custom-elements-hmr-polyfill";

if (import.meta.env.MODE === "development") {
  applyPolyfill(ReflowStrategy.NONE);
  if (import.meta.hot) {
    import.meta.hot.accept();
  }
}

import("./elements/app-root").then(() => {
  if (document.body && import.meta) {

    const tagname = document.body.firstElementChild?.tagName;
    const classnames = document.body.firstElementChild?.className;
    document.body.innerHTML = "";
    document.body.innerHTML = `<${tagname} class="${classnames}"></${tagname}>`; /// little more dynamic

    // this is same as, just easier since chnage to classes in index html will be picked up bu code above
    //document.body.innerHTML = "";
    //document.body.innerHTML = `<app-root class="flex flex-col h-full"></app-root>`;

  }
});
