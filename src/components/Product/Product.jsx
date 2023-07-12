import { Button, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import { BiCart, BiHeart, BiMinus, BiPlus } from "react-icons/bi";
import TopItems from "../TopItems/TopItems";
const Product = () => {
	const { pid } = useParams();
	const dummyProducts = [
		{
			title: "Tracksuit Hyped",
			color: "Apple Cherry",
			price: "399$",
			discount: "499$",
			id: 1,
		},
		{
			title: "Tracksuit Hyped",
			color: "Apple Cherry",
			price: "399$",
			discount: "499$",
			id: 2,
		},
		{
			title: "Tracksuit Hyped",
			color: "Apple Cherry",
			price: "399$",
			discount: "499$",
			id: 3,
		},
		{
			title: "Tracksuit Hyped",
			color: "Apple Cherry",
			price: "399$",
			discount: "499$",
			id: 4,
		},
		{
			title: "Tracksuit Hyped",
			color: "Apple Cherry",
			price: "399$",
			discount: "499$",
			id: 5,
		},
		{
			title: "Tracksuit Hyped",
			color: "Apple Cherry",
			price: "399$",
			discount: "499$",
			id: 6,
		},
		{
			title: "Tracksuit Hyped",
			color: "Apple Cherry",
			price: "399$",
			discount: "499$",
			id: 7,
		},
		{
			title: "Tracksuit Hyped",
			color: "Apple Cherry",
			price: "399$",
			discount: "499$",
			id: 8,
		},
	];
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(false);
	const [quantity, setQuantity] = useState(0);
	const dummyReviews = [
		{
			name: "Alex Iwobi",
			date: new Date(),
			rate: 4.2,
			images: [1, 2, 3],
			content:
				"Thank you for the article that was made",
		},
		{
			name: "John Doe",
			date: new Date(),
			rate: 2.2,
			images: [1, 2, 3],
			content: "Not so cool dude",
		},
	];
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const response = await axios(`https://fakestoreapi.com/products/${pid}`);
			setProduct(response.data);
			setLoading(false);
		};
		fetchData();
	}, [pid]);

	if (loading) {
		return (
			<div className="flex justify-center items-center py-20">
				<Spin size="large" />
			</div>
		);
	}

	return (
		<main>
			{product && (
				<>
					<ul className="flex justify-start items-center gap-2 px-20">
						<li className="font-bold">Products</li>
						<AiOutlineRight size={20} />
						<li className="font-bold">{product?.category.toUpperCase()}</li>
						<AiOutlineRight size={20} />
						<li className="font-bold">{product?.title}</li>
					</ul>
					<section className="flex gap-20 my-20 px-20">
						<div>
							<img src={product?.image} className="w-full max-w-lg" />
							<div className="flex gap-5 justify-between mt-10">
								{[1, 2, 3].map((n) => (
									<img src={product?.image} key={n} className="w-20" />
								))}
							</div>
						</div>
						<div className="w-full flex flex-col gap-8 justify-center">
							<h1 className="font-bold">{product.title}</h1>
							<div className="flex gap-5">
								{Array(Math.floor(product.rating.rate))
									.fill()
									.map((n) => (
										<BsStarFill color="#F86338" key={n} size={30} />
									))}
							</div>
							<h2 className="font-bold text-primary">${product.price}</h2>
							<h5 className="font-bold">Product Details</h5>
							<p className="text-body1">{product.description}</p>
							<div className="flex justify-between">
								<span className="font-bold">Quantity</span>
								<div className="bg-white px-2 py-2 flex gap-8 rounded">
									<button
										onClick={() =>
											setQuantity((prevQ) => {
												if (prevQ === 0) {
													return prevQ;
												}
												return prevQ - 1;
											})
										}>
										<BiMinus />
									</button>
									<span>{quantity}</span>
									<button
										onClick={() =>
											setQuantity((prevQ) => {
												return prevQ + 1;
											})
										}>
										<BiPlus />
									</button>
								</div>
								<span className="font-bold text-primary">Add Note</span>
							</div>
							<div className="flex gap-5">
								<Button size="large" type="secondary">
									<div className="flex gap-6 items-center ">
										<span>Wishlist</span>
										<BiHeart size={20} color="#F86338" />
									</div>
								</Button>
								<Button size="large" type="primary">
									<div className="flex gap-6 items-center ">
										<span>Add to Cart</span>
										<BiCart size={20} color="#fff" />
									</div>
								</Button>
							</div>
						</div>
					</section>
					<section className="px-20">
						<h2 className="font-bold mb-10">Description</h2>
						<div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mb-20">
							<div className="w-full">
								<p className="text-body2 text-md mb-10">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum. <br /> Sed ut perspiciatis unde
									omnis iste natus error sit voluptatem accusantium doloremque
									laudantium, totam rem aperiam, eaque ipsa quae ab illo
									inventore veritatis et quasi architecto beatae vitae dicta
									sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
									aspernatur aut odit aut fugit, sed quia consequuntur magni
									dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
									quisquam est, qui dolorem ipsum quia dolor sit amet,
									consectetur, adipisci velit, sed quia non numquam eius modi
									tempora incidunt ut labore et dolore magnam aliquam quaerat
									voluptatem. Ut enim ad minima veniam, quis nostrum
									exercitationem ullam corporis suscipit laboriosam, nisi ut
									aliquid ex ea commodi consequatur? Quis autem vel eum iure
									reprehenderit qui in ea voluptate velit esse quam nihil
									molestiae consequatur, vel illum qui dolorem eum fugiat quo.
								</p>
								<div>
									<h2 className="font-bold my-10">Reviews (2) </h2>
									<ul className="flex flex-col gap-10">
										{dummyReviews.map((review) => (
											<li key={review.name} className="flex gap-10">
												<div className="w-20 h-20 rounded-full bg-secondary"></div>
												<div>
													<div className="flex justify-between items-center gap-5">
														<h5 className="font-bold">{review.name}</h5>
														<div className="flex gap-2 justify-start">
															{Array(Math.floor(review.rate))
																.fill()
																.map((n) => (
																	<BsStarFill
																		color="#F86338"
																		key={n}
																		size={15}
																	/>
																))}
														</div>
													</div>
													<p className="text-body2 my-4">
														{review.date.toLocaleDateString("en-us", {
															day: "numeric",
															month: "long",
															year: "numeric",
															hour: "2-digit",
															minute: "2-digit",
															hour12: true,
														})}
													</p>
													<div className="flex gap-2">
														{review.images.map((count) => (
															<div
																className="w-20 h-10 rounded bg-gray"
																key={count}></div>
														))}
													</div>
													<p className="mt-5">{review.content}</p>
												</div>
											</li>
										))}
									</ul>
								</div>
							</div>
							<div className="h-full w-full bg-gray rounded-md ml-10"></div>
						</div>
					</section>
					<div className="bg-white my-20 py-20">
						<TopItems items={dummyProducts} />
					</div>
				</>
			)}
		</main>
	);
};

export default Product;
