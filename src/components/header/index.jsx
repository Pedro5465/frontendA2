import { Header } from "../../styles/globals";

function HeaderComponent({ children }) {
	return (
		<Header>
			<span>SAGE v.0.1</span>
			{children}
		</Header>
	);
}
export default HeaderComponent;
