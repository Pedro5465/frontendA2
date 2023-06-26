import { styled, css } from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 40px;
	border: 2px solid #ddd;
	color: #212529;
	font-size: 15px;
	cursor: pointer;
	${(props) =>
		props.isDragging &&
		css`
			border: 2px dashed rgba(0, 0, 0, 0.2);
			padding-top: 31px;
			border-radius: 0;
			background: transparent;
			box-shadow: none;
			cursor: grabbing;
		`}
`;
