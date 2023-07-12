/* eslint-disable react/prop-types */
import heroImg from "../../assets/hero_bg.svg";
const Hero = (props) => {
	return (
		<main
			className="lg:flex md:flex w-full h-full py-40 bg-white"
			style={{
				background: `url(${heroImg})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}>
			<div className="flex-1"></div>
			<div className="flex-1">{props.children}</div>
		</main>
	);
};

export default Hero;
