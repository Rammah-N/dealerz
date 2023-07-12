import axios from "axios";
import { BiHeart, BiSearch } from "react-icons/bi";
import { GoTriangleRight } from "react-icons/go";
import Hero from "../../components/Hero/Hero";
import { AiOutlineFilter } from "react-icons/ai";
import { Button, Slider, Spin } from "antd";
import { useCallback, useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import Newsletter from "../../components/Newsletter/Newsletter";
import { Link } from "react-router-dom";

const Shop = () => {
	const [priceRange, setPriceRange] = useState(0);
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);
	const [items, setItems] = useState([]);
	const [limit, setLimit] = useState(6);
	const [selectedFilter, setSelectedFilter] = useState("All Products");

	const handlePriceFilter = (value) => {
		setItems((prevItems) =>
			prevItems.filter((item) => parseInt(item.price) <= value)
		);
	};

	const fetchData = useCallback(async () => {
		setLoading(true);
		let categories, items;
		if (!categories) {
			categories = await axios("https://fakestoreapi.com/products/categories");
			setCategories(["All Products"].concat(categories.data));
		}

		if (!selectedFilter || selectedFilter.toLowerCase() === "all products") {
			items = await axios(`https://fakestoreapi.com/products?limit=${limit}`);
		} else {
			items = await axios(
				`https://fakestoreapi.com/products/category/${selectedFilter}`
			);
		}
		setItems(items.data);
		setLoading(false);
	}, [limit, selectedFilter]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	const handleSearch = (event) => {
		const value = event.target.value;

		if (!value) {
			fetchData();
		} else {
			console.log(items[0].title);
			const newItems = [...items].filter((item) =>
				item.title.toLowerCase().includes(value)
			);
			console.log(newItems);
			setItems(newItems);
		}
	};

	return (
		<main>
			<Hero>
				<div className="flex flex-col justify-center items-start gap-8 pr-20">
					<h1 className="font-bold">
						Home Shopping <br /> Your Choice!
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
					</p>
				</div>
			</Hero>
			<section className="flex my-20 px-20">
				<aside className="w-60">
					<div className="px-3 py-3 rounded flex justify-between bg-transparent border-solid border-2 border-title">
						<input
							className="border-0 focus:outline-none bg-transparent"
							placeholder="search"
							onChange={handleSearch}
						/>
						<button>
							<BiSearch color="#9A9AB0" size={20} />
						</button>
					</div>
					<div className="mt-10 flex justify-between">
						<h5 className="font-bold">Price</h5>
						<AiOutlineFilter size={25} />
					</div>
					<div className="mt-7">
						<Slider
							onChange={(value) => setPriceRange(value)}
							max={500}
							onAfterChange={handlePriceFilter}
						/>
						<div className="flex justify-between">
							<span>Range</span>
							<span className="font-bold">$0 - ${priceRange}</span>
						</div>
					</div>

					<div className="mt-12">
						<h5 className="font-bold">Product Categories</h5>
						<ul className="flex flex-col gap-6 mt-10">
							{categories.map((ctg) => (
								<li key={ctg} className="flex justify-between">
									<span
										className="font-bold text-md cursor-pointer"
										onClick={() => setSelectedFilter(ctg)}>
										{ctg.toUpperCase()}
									</span>
									<GoTriangleRight size={20} />
								</li>
							))}
						</ul>
					</div>

					<div className="mt-20">
						<h5 className="font-bold mb-10">Featured Products</h5>
						<ul className="flex flex-col gap-10">
							{items?.slice(0, 5).map((item) => (
								<li
									key={item.id}
									className="flex justify-between gap-4 items-center">
									<img src={item.image} className="w-20" />
									<div>
										<h6 className="font-bold">{item.title}</h6>
										<span className="text-primary mt-2">${item.price}</span>
									</div>
								</li>
							))}
						</ul>
					</div>
				</aside>
				<div className="w-full">
					{loading ? (
						<div className="flex justify-center items-center py-20 w-full">
							<Spin size="large" />
						</div>
					) : (
						<>
							{!loading && items.length === 0 ? (
								<h1 className="text-center">No Items Found</h1>
							) : (
								<ul className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full gap-5 ml-10">
									{items.map((item) => (
										<li
											key={item.id}
											className="bg-white rounded p-5 shadow flex flex-col items-center">
											<div className="flex justify-end w-full">
												<div className="bg-[#FFDDD3] p-2 rounded-lg">
													<BiHeart size={20} color="#F3692E" />
												</div>
											</div>
											<img src={item.image} className="w-full max-w-xs mb-5" />
											<Link to={`/products/${item.id}`}>
												<h6 className="font-bold text-center mt-auto mb-5">
													{item.title}
												</h6>
											</Link>
											<div className="flex gap-3">
												{Array(Math.floor(item.rating.rate))
													.fill()
													.map((n) => (
														<BsStarFill color="#F86338" key={n} />
													))}
											</div>
											<span className="text-body2 my-3">{item.category}</span>
											<span className="text-primary font-bold">
												${item.price}
											</span>
										</li>
									))}
								</ul>
							)}
							<div className="flex justify-center mt-10">
								<Button
									type="primary"
									onClick={() => setLimit((prevLimit) => prevLimit + 2)}
									loading={loading}>
									See More
								</Button>
							</div>
						</>
					)}
				</div>
			</section>
			<Newsletter />
		</main>
	);
};

export default Shop;
