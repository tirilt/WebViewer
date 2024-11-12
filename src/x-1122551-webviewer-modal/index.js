import { createCustomElement, actionTypes } from "@servicenow/ui-core";
const { COMPONENT_BOOTSTRAPPED } = actionTypes;
// import { createHttpEffect } from "@servicenow/ui-effect-http";

import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";
import WebViewer from '@pdftron/webviewer';


const view = () => {
	return (
		<div className="main">
			<div id = "viewer"></div>
		</div>
	);
};

createCustomElement("x-1122551-webviewer-modal", {
	renderer: { type: snabbdom },
	view,
	styles,
	actionHandlers: {
		[COMPONENT_BOOTSTRAPPED]: ({action: { payload: { host }, }, }) => {
			const viewerElement = host.shadowRoot.getElementById("viewer");

			WebViewer.WebComponent (
				{
					path: "/public",
					initialDoc: null,
					licenseKey: 'YOUR_LICENSE_KEY',
				},
				viewerElement
			).then(instance => {
				console.log('WebViewer initalized', instance);

			}).catch(error => {
				console.error('Error initializing WebViewer ', error);
			})



		},
	},
});



