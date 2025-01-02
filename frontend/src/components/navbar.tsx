// react imports
import { Outlet } from "react-router-dom";

// css import
import 'bootstrap/dist/css/bootstrap.css';

function Navbar() {

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
				<div className="container-fluid">
					<a className="navbar-brand" href="#">Daniel Lov</a>
				</div>
			</nav>
			<Outlet />
		</div>
	);
};

export default Navbar
