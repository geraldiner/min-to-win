import React from "react";
import { RedocStandalone } from "redoc";
import Spec from "../utils/spec.json";

const ApiDoc = () => {
	return (
		<main>
			<RedocStandalone
				spec={Spec}
				options={{
					nativeScrollbars: true,
				}}
			/>
		</main>
	);
};

export default ApiDoc;
