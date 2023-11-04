/*!

=========================================================
* DextaLabs Sass React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Dexta Sass (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Dexta Sass

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
// reactstrap components
import { Container, Row } from "reactstrap";

// core components

import routes from "routes.js";

const Auth = (props) => {
	const mainContent = React.useRef(null);
	const location = useLocation();

	React.useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
		mainContent.current.scrollTop = 0;
	}, [location]);

	const getRoutes = (routes) => {
		return routes.map((prop, key) => {
			if (prop.layout === "/auth") {
				return (
					<Route
						path={prop.layout + prop.path}
						component={prop.component}
						key={key}
					/>
				);
			} else {
				return null;
			}
		});
	};

	return (
		<>
			<div className="main-content" ref={mainContent}>
				<Container className="pb-5 d-flex flex-column auth-layout justify-content-center">
					<Row className="justify-content-center">
						<Switch>
							{getRoutes(routes)}
							<Redirect from="*" to="/auth/login" />
						</Switch>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default Auth;
