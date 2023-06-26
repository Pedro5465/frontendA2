import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import HeaderComponent from "../../components/header";
import LogoComponent from "../../components/logo";

import { Container, BtnDropDown, BtnIconDropDown } from "./styles";

import NavBar from "./navBar";
import DropdownComponent from "../../components/dropdown";

import icon11 from "../../assets/icon/icon11.png";
import icon12 from "../../assets/icon/icon12.png";

function Panel() {
	const [activeDrop, setActiveDrop] = useState(false);

	return (
		<>
			<HeaderComponent>
				<LogoComponent
					src={
						"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wikimedia-logo.png/480px-Wikimedia-logo.png"
					}
				>
					E.E.B Gov Heriberto Hulse
				</LogoComponent>
				<BtnDropDown
					onClick={() =>
						setActiveDrop(
							!activeDrop
						)
					}
				>
					<BtnIconDropDown
						src={
							activeDrop
								? icon11
								: icon12
						}
					/>
				</BtnDropDown>
				{activeDrop && <DropdownComponent />}
			</HeaderComponent>
			<Container>
				<NavBar />
				<Outlet />
			</Container>
		</>
	);
}

export default Panel;
