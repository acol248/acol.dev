import { render } from "preact";
import { App } from "./app.tsx";

// styles
import "./index.css";
import "./interface/variables.css";

render(<App />, document.getElementById("app")!);
