import { Input } from "antd";
import { BiPhone } from "react-icons/bi";
import { BsTruck } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import {
	AiOutlineHeart,
	AiOutlineShoppingCart,
	AiOutlineBell,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";

const { Search } = Input;

const Header = () => {
	const links = ["Shop", "Gallery", "About", "Blog"];
	return (
		<header className="header">
			<div className="top-header flex justify-between px-20 py-8 items-center  bg-white">
				<NavLink to="/">
					<h3 className="text-primary font-bold">Dealerz.</h3>
				</NavLink>
				<div className="flex gap-8">
					<div className="flex gap-2 content-center">
						<BiPhone size={20} />
						<p className="font-semibold ">Call center</p>
					</div>
					<div className="flex gap-2 content-center">
						<BsTruck size={20} />
						<p className="font-semibold ">Shipping & Returns</p>
					</div>
				</div>
			</div>
			<div className="bottom-header flex justify-between px-20 py-8 items-center gap-32">
				<div className="flex just-center gap-8">
					{links.map((link) => (
						<NavLink
							key={link}
							to={`/${link}`}
							className={(isActive) =>
								"nav-link font-semibold  " +
								(isActive ? "text-primary underline" : "")
							}>
							{link}
						</NavLink>
					))}
				</div>
				<Search />
				<div className="flex content-center gap-4">
					<NavLink to="/favs">
						<AiOutlineHeart size={30} />
					</NavLink>
					<NavLink to="/cart">
						<div className="relative">
							<div className="bg-primary text-white p-1 px-2 absolute rounded-3xl -top-4 -right-3 ">
								3
							</div>
							<AiOutlineShoppingCart size={30} />
						</div>
					</NavLink>
					<NavLink to="/user">
						<BsPerson size={30} />
					</NavLink>

					<AiOutlineBell size={30} />
				</div>
			</div>
		</header>
	);
};

export default Header;
