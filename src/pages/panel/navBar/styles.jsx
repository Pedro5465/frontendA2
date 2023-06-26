import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
	background-color: var(--primarycolor);
	width: 150px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Link = styled(NavLink)`
	width: 100%;
	height: 100px;
	border-bottom: 1px solid #597c97;
	font-size: 15px;
	font-family: Arial, Helvetica, sans-serif;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: 0.5s;
	&:hover {
		opacity: 0.5;
	}
`;

export const Occurrence = styled.div`
	background: #007bff;
	width: 90%;
	height: 80px;
	border-radius: 10px;
	padding: 10px;
	margin: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Icon = styled.img`
	width: 30px;
	margin-bottom: 10px;
`;

export const Disconnect = styled.button`
	background: 0;
	color: #fff;
	border: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 100px;
	font-size: 15px;
	transition: 0.5s;
	&:hover {
		opacity: 0.5;
	}
`;

export const Scroll = styled.div`
	overflow-y: scroll;
	overflow-x: hidden;
	height: 80vh;
`;
