import { styled } from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
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
	display: flex;
	width: 100%;
`;
export const Section = styled.div`
	width: 100%;
	max-width: 400px;
	border: 5px solid #ddd;
	border-radius: 5px;
	height: 500px;
	margin: 5px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	overflow-y: auto;
`;
export const Input = styled.div``;
export const Icon = styled.img`
	width: 25px;
	margin-left: 10px;
`;
export const SaveBtn = styled.button`
	border: 0;
	width: 100%;
	background-color: #28a745;
	padding: 10px;
	font-size: 15px;
	color: #fff;
	border-radius: 5px;
	margin-top: 10%;
`;
export const UpdateBtn = styled.button``;
export const DeleteBtn = styled.button``;
