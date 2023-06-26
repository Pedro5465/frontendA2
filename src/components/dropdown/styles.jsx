import { styled } from "styled-components";

export const Dropdown = styled.ul`
	width: 100%;
	max-width: 150px;
	background-color: #f1f1f1;
	height: 150px;
	border-radius: 15px 0 15px 15px;
	position: absolute;
	top: 120%;
	right: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 1;
	padding: 10px;
	box-shadow: 1px 1px 3px 2px #f1f1f1;
`;

export const ListDrop = styled.li`
	font-size: 15px;
	width: 90%;
	border-bottom: 1px solid #a8a5a5;
	text-align: center;
	color: #000;
	list-style: none;
	margin-bottom: 15px;
	transition: 0.5s;
	cursor: pointer;
	line-height: 25px;
	&:hover {
		color: var(--primarycolor);
		border-color: var(--primarycolor);
	}
`;
