import { Suspense } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import Product from "./components/Product/Product";
import Gallery from "./pages/Gallery/Gallery";
import Cart from "./pages/Cart/Cart";
import { Redirect } from "react-router-dom";
import { Spin } from "antd";
import "./App.css";
function App() {
	return (
		<Router>
			<Suspense
				fallback={
					<div className="center">
						<Spin />
					</div>
				}>
				<div className="App">
					<Header />
					<Switch>
						<Route path="/shop">
							<Shop />
						</Route>
						<Route path="/products/:pid">
							<Product />
						</Route>
						<Route path="/gallery">
							<Gallery />
						</Route>
						<Route path="/cart">
							<Cart />
						</Route>
						<Route path="/" exact>
							<Home />
						</Route>
						<Redirect to="/" />
					</Switch>
					<Footer />
				</div>
			</Suspense>
		</Router>
	);
}

export default App;
