/* eslint-disable react/prop-types */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TopItems = ({ items }) => {
	return (
		<div className="flex flex-col items-center gap-10">
			<h2>Top Items</h2>
			<p className="w-1/2 text-center">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam.
			</p>
			<Carousel
				showIndicators
				autoPlay
				centerMode
				centerSlidePercentage={30}
				dynamicHeight
				showThumbs={false}
				showStatus={false}
				infiniteLoop>
				{items?.map((item) => (
					<div key={item.id} className="w-full h-96 px-20 mb-20">
						<div className=" bg-gray h-full w-full rounded flex flex-col justify-end gap-2">
							<h5 className="font-bold">{item.title}</h5>
							<span className="text-body2 text-sm">{item.color}</span>
							<div className="mb-10">
								<span className="text-primary font-bold">{item.price}</span>
								<span className="text-body2">{item.discount}</span>
							</div>
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default TopItems;
