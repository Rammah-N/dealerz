import Hero from "../../components/Hero/Hero";
import ItemsCollection from "../../components/ItemsCollection/ItemsCollection";
import Newsletter from "../../components/Newsletter/Newsletter";
import Testimonials from "../../components/Testimonials/Testimonials";

const Gallery = () => {
	return (
		<div>
			<Hero>
				<div className="flex flex-col justify-center items-start gap-8 pr-20">
					<h1 className="font-bold">
						Our Gallery <br /> Your Dreams!
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
					</p>
				</div>
			</Hero>
			<ItemsCollection title="Our Gallery" />
      <Testimonials />
      <Newsletter />
		</div>
	);
};

export default Gallery;
