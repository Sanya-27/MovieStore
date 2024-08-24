import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const onRenderCallback = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) => {
  console.log("id:", id);
  console.log("phase:", phase);
  console.log("actualDuration:", actualDuration);
  console.log("baseDuration:", baseDuration);
  console.log("startTime:", startTime);
  console.log("commitTime:", commitTime);
  console.log("interactions:", interactions);
};
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Profiler id="movie" onRender={onRenderCallback}>
        <App />
      </Profiler>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
