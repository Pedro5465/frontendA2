import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterAddress from "./routers";
import "./styles/colors.css";
import "./styles/normalize.css";

import "react-notifications/lib/notifications.css";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<RouterAddress />
	</StrictMode>
);
