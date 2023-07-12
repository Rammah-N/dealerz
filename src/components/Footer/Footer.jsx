const Footer = () => {
	return (
		<footer className="px-20 py-10 bg-white">
			<div className="lg:flex justify-between ">
				<div className="flex gap-10">
					<div className="bg-secondary w-80  h-80"></div>
					<div className=" flex-col flex gap-8">
						<h3 className="text-primary font-bold">Dealerz.</h3>
						<h6 className="font-bold">Privacy Policy</h6>
						<h6 className="font-bold">Terms and Conditions</h6>
					</div>
				</div>
				<div className="flex gap-6 items-start">
					<a
						href="https://facebook.com"
						className="bg-primary px-4 py-3 rounded-3xl text-white">
						Yt
					</a>
					<a
						href="https://facebook.com"
						className="bg-primary px-4 py-3 rounded-3xl text-white">
						Fb
					</a>
					<a
						href="https://facebook.com"
						className="bg-primary px-4 py-3 rounded-3xl text-white">
						Tw
					</a>
					<a
						href="https://facebook.com"
						className="bg-primary px-4 py-3 rounded-3xl text-white">
						Ig
					</a>
				</div>
			</div>
			<p className="text-center text-sm">
				@2020 TanahAir Studio. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
