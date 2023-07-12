import { BiHeart, BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import Hero from "../../components/Hero/Hero";
import Newsletter from "../../components/Newsletter/Newsletter";
import TopItems from "../../components/TopItems/TopItems";
import { Button } from "antd";
const Cart = () => {
	const dummyProducts = [
		{
			title: "Tracksuit Hyped",
			color: "Apple Cherry",
			price: "399$",
			discount: "499$",
			id: 1,
			quantity: 2,
		},
		{
			title: "Tracksuit Hyped",
			color: "Apple Cherry",
			price: "399$",
			discount: "499$",
			id: 2,
			quantity: 4,
		},
		{
			title: "Tracksuit Hyped",
			color: "Apple Cherry",
			price: "399$",
			discount: "499$",
			id: 3,
			quantity: 7,
		},
		{
			title: "Tracksuit Hyped",
			color: "Apple Cherry",
			price: "399$",
			discount: "499$",
			id: 4,
			quantity: 3,
		},
		{
			title: "Tracksuit Hyped",
			color: "Apple Cherry",
			price: "399$",
			discount: "499$",
			id: 5,
			quantity: 9,
		},
		{
			title: "Tracksuit Hyped",
			color: "Apple Cherry",
			price: "399$",
			discount: "499$",
			id: 6,
			quantity: 11,
		},
		{
			title: "Tracksuit Hyped",
			color: "Apple Cherry",
			price: "399$",
			discount: "499$",
			id: 7,
			quantity: 3,
		},
		{
			title: "Tracksuit Hyped",
			color: "Apple Cherry",
			price: "399$",
			discount: "499$",
			id: 8,
			quantity: 4,
		},
	];

	return (
		<main>
			<Hero>
				<div className="flex flex-col justify-center items-start gap-8 pr-20">
					<h1 className="font-bold">
						Your Cart <br /> Our Goal!
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
					</p>
				</div>
			</Hero>
			<section className="px-20 my-20">
				<div className="flex gap-5">
					<span className="font-bold">1.Shopping Cart</span>
					<span className="font-bold text-body2">2.Checkout</span>
					<span className="font-bold text-body2">3.Order Succeeded</span>
				</div>
				<div className="my-10">
					<h2 className="font-bold">My Cart</h2>
					<div className="flex gap-10">
						<ul className="w-full mt-20 flex flex-col gap-10">
							{dummyProducts.slice(0, 3).map((product) => (
								<li key={product.id} className="flex gap-6">
									<div className="w-40 h-auto bg-gray rounded"></div>
									<div className="flex flex-col gap-6">
										<h5 className="font-bold">{product.title}</h5>
										<div className="flex justify-between">
											<span className="font-bold">Size : </span>
											<span>M</span>
										</div>
										<div className="flex justify-between gap-20 items-center w-full">
											<span className="font-bold">Quantity : </span>
											<div className="bg-transparent px-2 py-2 flex gap-8 rounded">
												<button>
													<BiMinus />
												</button>
												<span>{product.quantity}</span>
												<button>
													<BiPlus />
												</button>
											</div>
										</div>
										<div className="flex justify-between gap-10 items-center">
											<h1 className="font-bold text-primary">
												{product.price}
											</h1>
											<div className="flex gap-10">
												<Button type="secondary" size="large">
													<BiTrash color="#F86338" />
												</Button>
												<Button size="large" type="secondary">
													<div className="flex gap-6 items-center ">
														<span>Wishlist</span>
														<BiHeart size={20} color="#F86338" />
													</div>
												</Button>
											</div>
										</div>
									</div>
								</li>
							))}
						</ul>
						<div className="w-full">
							<div className="bg-white p-8 flex flex-col gap-8 items-start rounded-lg">
								<h5 className="font-bold">Have a coupon?</h5>
								<input
									placeholder="enter your email"
									className="py-2 pr-8 pl-2 border-solid border-[1px] w-full rounded-lg border-[#F86338]"
								/>
								<Button className="w-auto" type="primary">
									Apply
								</Button>
							</div>
							<div className="my-10">
								<h5 className="font-bold mb-10">Cart Total</h5>
								<div className="flex gap-16 mb-10">
									<span className="font-bold">Subtotal</span>
									<span>$150</span>
								</div>
								<div className="flex gap-16 mb-10 w-full">
									<span className="font-bold">Shipping</span>
									<div className="flex flex-col gap-8 w-full">
										<span>Free Shipping</span>
										<div className="flex justify-between w-full">
											<span className="">Shipping to Sydney</span>
											<span className="font-bold text-primary">Change</span>
										</div>
									</div>
								</div>
								<div className="flex gap-16 mb-10">
									<span className="font-bold">Total</span>

									<span className="font-bold">$350</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="bg-white my-20 py-20">
				<TopItems items={dummyProducts} />
			</div>
			<Newsletter />
		</main>
	);
};

export default Cart;
