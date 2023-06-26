import { styled } from "styled-components";

export const Container = styled.div`
	width: 100%;
	padding: 20px 20px 5px 20px;
`;

export const Warning = styled.span`
	color: #212529;
	font-size: 20px;
	font-weight: bold;
	font-family: Arial, Helvetica, sans-serif;
`;
export const LoadData = styled.div`
	margin-top: 50px;
	width: 100%;
`;

export const LoadOption = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
	max-width: 300px;
`;
export const Option = styled.button`
	width: 100%;
	background: 0;
	border: 0;
	border-bottom: 2px solid #ced4da;
	transition: 0.5s;
	font-size: 15px;
	&:hover {
		border-color: var(--primarycolor);
	}
	&:focus {
		border-color: green;
	}
`;
export const SearchData = styled.div`
	width: 100%;
	height: 50px;
	border: 1px solid #ced4da;
	margin-top: 10px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const LoadBtn = styled.button`
	margin-top: 10px;
	max-width: 120px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: #28a745;
	padding: 10px;
	border-radius: 5px;
	color: #fff;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: bold;
	border: 0;
	transition: 0.5s;
	&:hover {
		opacity: 0.5;
	}
`;
export const LaodBtnIcon = styled.img`
	width: 20px;
`;

export const InputUrl = styled.input`
	border: 0;
	width: 100%;
	outline: 0;
	padding: 10px;
`;

export const InputFile = styled.label`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80%;
	color: #0b465a;
	font-family: Arial, Helvetica, sans-serif;
	font-weight: bold;
	border: 2px dotted #0b465a;
	input {
		display: none;
	}
`;

export const LoadForm = styled.form``;
export const IconFile = styled.img`
	width: 35px;
`;
export const Colums = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	width: 100%;
	max-width: 1200px;
	margin-top: 20px;
	margin-top: 20px;
	div {
		flex-basis: 10px; /* Tamanho base dos itens */
		min-width: 200px; /* Largura mínima para quebra de linha */
	}
`;

export const Scroll = styled.div`
	height: 300px;
	width: 100%;
	overflow: scroll;
	position: absolute;
`;
