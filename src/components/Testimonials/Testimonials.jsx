import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
	const data = [
		{
			title: "Good Seller!",
			content:
				"I am very happy with the services provided, it is very helpful, starting from the insight that the company gave from the start that I did not understand what it was so I got knowledge and made my website look better",
			name: "Anna Saraspova",
			id: 1,
		},
		{
			title: "Good Seller!",
			content:
				"I am very happy with the services provided, it is very helpful, starting from the insight that the company gave from the start that I did not understand what it was so I got knowledge and made my website look better",
			name: "Anna Saraspova",
			id: 2,
		},
		{
			title: "Good Seller!",
			content:
				"I am very happy with the services provided, it is very helpful, starting from the insight that the company gave from the start that I did not understand what it was so I got knowledge and made my website look better",
			name: "Anna Saraspova",
			id: 3,
		},
		{
			title: "Good Seller!",
			content:
				"I am very happy with the services provided, it is very helpful, starting from the insight that the company gave from the start that I did not understand what it was so I got knowledge and made my website look better",
			name: "Anna Saraspova",
			id: 4,
		},
	];
	return (
		<section className="mx-20 bg-white py-10 mb-20 rounded">
			<Carousel
				showArrows
				autoPlay
				dynamicHeight
				showIndicators={false}
				showStatus={false}
				showThumbs={false}>
				{data.map((item) => (
					<div key={item.id} className="flex gap-5 px-20">
						<div className="w-full h-96 bg-gray rounded-lg"></div>
						<div className="w-full p-10 flex flex-col gap-5 items-start justify-center">
							<h2 className="font-bold text-primary">{item.title}</h2>
							<p className="text-body2 text-left">{item.content}</p>
							<h5 className="font-bold">{item.name}</h5>
							<span>Your beloved buyer</span>
						</div>
					</div>
				))}
			</Carousel>
		</section>
	);
};

export default Testimonials;
