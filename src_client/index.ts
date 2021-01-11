

// how can I treeshake this away ?
import { applyPolyfill, ReflowStrategy } from "custom-elements-hmr-polyfill";
applyPolyfill(ReflowStrategy.NONE);

import("./app-root").then(() => {
  // rebuild app
  document.body.innerHTML = "<app-root></app-root>";
});
