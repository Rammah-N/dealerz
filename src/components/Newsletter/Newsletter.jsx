import { BsArrowRightCircle } from "react-icons/bs";

const Newsletter = () => {
	return (
		<section className="mx-20 text-center flex flex-col gap-10 items-center bg-white py-20 my-20 rounded-xl">
			<h2 className="font-bold">Join Our News Letters</h2>
			<p className="text-body2 text-center w-1/2 mx-auto">
				Leverage agile frameworks to provide a robust synopsis for high level
				overviews. Iterative approaches to corporate strategy foster
			</p>
			<div className="bg-lightgray flex w-1/2 h-14 justify-between px-5 py-2 rounded">
				<input
					placeholder="Insert your email here"
					className="border-0 bg-lightgray  w-full focus:outline-none"
				/>
				<div className="h-full bg-primary w-10 grid place-content-center rounded-lg">
					<BsArrowRightCircle color="#fff" size={20} />
				</div>
			</div>
		</section>
	);
};

export default Newsletter;
