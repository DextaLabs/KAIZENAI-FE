import Help from "views/Help";
import Index from "views/Index.js";
import Performance from "views/Performance";
import Login from "views/auth/Login.js";

var routes = [
	{
		path: "/index",
		name: "Dashboard",
		icon: "ni ni-tv-2",
		component: Index,
		layout: "/admin",
	},
	{
		path: "/requirements",
		name: "Requirements",
		icon: "fa fa-list",
		component: Index,
		layout: "/admin",
	},
	{
		path: "/learning",
		name: "Learning",
		icon: "fa fa-chalkboard",
		component: Index,
		layout: "/admin",
	},
	{
		path: "/performance",
		name: "Performance",
		icon: "fas fa-tachometer-alt",
		component: Performance,
		layout: "/admin",
	},
	{
		path: "/help",
		name: "Help",
		icon: "fas fa-tachometer-alt",
		component: Help,
		isMenu: false,
		layout: "/admin",
	},
	{
		path: "/integrations",
		name: "Integrations",
		icon: "fa fa-list",
		component: Index,
		layout: "/admin",
	},
	{
		path: "/login",
		name: "Login",
		icon: "ni ni-key-25",
		component: Login,
		layout: "/auth",
		isMenu: false,
	},
];
export default routes;
