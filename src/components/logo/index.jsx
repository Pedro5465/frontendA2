import { UserContainer, Img } from "./styles";

function LogoComponent({ src, children }) {
	return (
		<UserContainer>
			{children}
			<Img src={src} alt="icon" />
		</UserContainer>
	);
}
export default LogoComponent;
