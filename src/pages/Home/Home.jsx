import { Button } from "antd";
import Hero from "../../components/Hero/Hero";
import ItemsCollection from "../../components/ItemsCollection/ItemsCollection";
import TopItems from "../../components/TopItems/TopItems";
import logo1 from "../../assets/logo 1.svg";
import logo2 from "../../assets/logo 2.svg";
import logo3 from "../../assets/logo 3.svg";
import logo4 from "../../assets/logo 4.svg";
import logo5 from "../../assets/logo 5.svg";
import logo6 from "../../assets/logo 6.svg";
import { BsDot } from "react-icons/bs";
import Newsletter from "../../components/Newsletter/Newsletter";
import Testimonials from "../../components/Testimonials/Testimonials";
const Home = () => {
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

	return (
		<main>
			<Hero>
				<div className="flex flex-col justify-center items-start gap-8 pr-20">
					<h1 className="font-bold">
						Your Premium <br /> Sound, Unplugged!
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
					</p>
					<Button type="primary">Find Out More</Button>
				</div>
			</Hero>
			<ItemsCollection title="Our Premium Collection" />
			<TopItems items={dummyProducts} />
			<section className="my-40 px-20 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
				<div className="bg-gray w-full h-[40rem] rounded mx-auto"></div>
				<div className="w-full h-full flex flex-col gap-10 justify-center">
					<h2 className="font-bold">
						Story about <br /> Our Brand
					</h2>
					<p className="text-lg text-body2">
						Develop a website by finding a product identity that has value and
						branding to become a characteristic of a company. We will also
						facilitate the business marketing of these products with our SEO
						experts so that they become a ready-to-use website and help sell a
						product from the company Develop a website by finding a product
						identity that has value and branding to become a characteristic of a
						company. We will also facilitate the business marketing of these
						products with our SEO experts so that they become a ready-to-use
						website and help sell a product from the company
					</p>
					<span className="text-primary font-bold">Read Full Story</span>
				</div>
			</section>

			<section className="text-center px-20">
				<h2 className="font-bold">Our Achievements</h2>
				<ul className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 place-content-center place-items-center my-20 ">
					<li>
						<img src={logo1} />
					</li>
					<li>
						<img src={logo2} />
					</li>
					<li>
						<img src={logo3} />
					</li>
					<li>
						<img src={logo4} />
					</li>
					<li>
						<img src={logo5} />
					</li>
					<li>
						<img src={logo6} />
					</li>
				</ul>
			</section>

			<section className="px-20 my-20">
				<div className="flex justify-between items-end">
					<h2 className="font-bold">
						Get Better Insights <br /> from Our Articles
					</h2>
					<span className="text-primary font-bold">See More</span>
				</div>
				<ul className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-content-center place-items-center gap-6 mt-20">
					<li className="w-full flex flex-col gap-6">
						<div className="w-full h-96 bg-gray rounded"></div>
						<h4 className="font-bold">Best Summer Outfit Style</h4>
						<div className="flex items-center gap-2">
							<span className="font-bold">14 Feb</span>
							<BsDot size={20} />
							<span className="font-bold">Livina Style</span>
						</div>
						<p className="text-body2">
							Lorem Ipsum has been the industrys standard dummy text ever since
							the 1500s, when an unknown printer took a galley. Lorem Ipsum has
							been the industrys standard dummy text ever since the 1500s.
						</p>
						<span className="text-primary font-bold">See More</span>
					</li>
					<li className="w-full flex flex-col gap-6">
						<div className="w-full h-96 bg-gray rounded"></div>
						<h4 className="font-bold">Best Summer Outfit Style</h4>
						<div className="flex items-center gap-2">
							<span className="font-bold">14 Feb</span>
							<BsDot size={20} />
							<span className="font-bold">Livina Style</span>
						</div>
						<p className="text-body2">
							Lorem Ipsum has been the industrys standard dummy text ever since
							the 1500s, when an unknown printer took a galley. Lorem Ipsum has
							been the industrys standard dummy text ever since the 1500s.
						</p>
						<span className="text-primary font-bold">See More</span>
					</li>
					<li className="w-full flex flex-col gap-6">
						<div className="w-full h-96 bg-gray rounded"></div>
						<h4 className="font-bold">Best Summer Outfit Style</h4>
						<div className="flex items-center gap-2">
							<span className="font-bold">14 Feb</span>
							<BsDot size={20} />
							<span className="font-bold">Livina Style</span>
						</div>
						<p className="text-body2">
							Lorem Ipsum has been the industrys standard dummy text ever since
							the 1500s, when an unknown printer took a galley. Lorem Ipsum has
							been the industrys standard dummy text ever since the 1500s.
						</p>
						<span className="text-primary font-bold">See More</span>
					</li>
					<li className="w-full flex flex-col gap-6">
						<div className="w-full h-96 bg-gray rounded"></div>
						<h4 className="font-bold">Best Summer Outfit Style</h4>
						<div className="flex items-center gap-2">
							<span className="font-bold">14 Feb</span>
							<BsDot size={20} />
							<span className="font-bold">Livina Style</span>
						</div>
						<p className="text-body2">
							Lorem Ipsum has been the industrys standard dummy text ever since
							the 1500s, when an unknown printer took a galley. Lorem Ipsum has
							been the industrys standard dummy text ever since the 1500s.
						</p>
						<span className="text-primary font-bold">See More</span>
					</li>
				</ul>
			</section>

			<Newsletter />
			<Testimonials />
		</main>
	);
};

export default Home;
