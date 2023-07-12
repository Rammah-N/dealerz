/* eslint-disable react/prop-types */
import { Button, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const ItemsCollection = ({title}) => {
	const [categories, setCategories] = useState(null);
	const [items, setItems] = useState(null);
	const [selectedFilter, setSelectedFilter] = useState("All Products");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const intiData = async () => {
			setLoading(true);
			let categories, items;
			if (!categories) {
				categories = await axios(
					"https://fakestoreapi.com/products/categories"
				);
				setCategories(["All Products"].concat(categories.data));
			}

			if (!selectedFilter || selectedFilter === "All Products") {
				items = await axios("https://fakestoreapi.com/products?limit=6");
			} else {
				items = await axios(
					`https://fakestoreapi.com/products/category/${selectedFilter}`
				);
			}

			setItems(items.data);
			setLoading(false);
		};
		intiData();
	}, [selectedFilter]);

	if (loading) {
		return (
			<div className="flex justify-center items-center py-20">
				<Spin size="large" />
			</div>
		);
	}

	return (
		<div className="my-20 px-20 flex flex-col items-center">
			<h2 className="text-center font-bold">{title}</h2>
			<ul className="flex gap-4  justify-between my-20 w-full">
				{categories?.map((category) => (
					<li
						key={category}
						onClick={() => setSelectedFilter(category)}
						className={`text-center w-full text-body2 font-bold text-lg cursor-pointer ${
							category === selectedFilter ? "text-primary" : null
						}`}>
						{category.toUpperCase()}
					</li>
				))}
			</ul>
			<ul className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 content-center w-full">
				{items?.map((item) => (
					<li
						key={item.id}
						className="bg-white p-4 flex flex-col gap-8 shadow rounded justify-between items-start">
						<img
							src={item.image}
							style={{ width: "100%", maxWidth: "150px", margin: "0 auto" }}
						/>
						<div className="flex flex-col gap-8">
							<span className="text-body2">{item.category}</span>
							<Link to={`/products/${item.id}`}>
								<h5 className="font-bold">{item.title}</h5>
							</Link>
							<div className="rounded-3xl bg-primary w-7 h-7 flex items-center justify-center">
								<Link to={`/products/${item.id}`}>
									<BsArrowRight color="#fff" />
								</Link>
							</div>
						</div>
					</li>
				))}
			</ul>
			<Button type="primary" className="mt-10 mx-auto">
				<Link to="/shop">Find Out More</Link>
			</Button>
		</div>
	);
};

export default ItemsCollection;
