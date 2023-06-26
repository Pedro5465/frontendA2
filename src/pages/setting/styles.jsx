import { styled } from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 20px 5px 20px;
`;
export const Warning = styled.span`
	color: #212529;
	font-size: 20px;
	font-weight: bold;
	font-family: Arial, Helvetica, sans-serif;
`;

export const Content = styled.div`
	border: 1px solid #ddd;
	width: 100%;
	padding: 10px;
`;

export const Card = styled.div`
	border: 1px solid #ddd;
	margin: 5px;
	display: flex;
	align-items: center;
	border-radius: 5px;
`;

export const Delete = styled.button`
	background-color: #dc4d4d;
	padding: 5px;
	border: 0;
	border-radius: 5px;
	padding: 10px;
	margin: 5px;
	img {
		width: 35px;
	}
`;
