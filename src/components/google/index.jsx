import { Btn, Icon, Text } from "./styles";
import icon8 from "../../assets/icon/icon8.png";

function GoogleComponent() {
	return (
		<Btn>
			<Icon src={icon8} alt="google" />
			<Text>Continuar com o Google</Text>
		</Btn>
	);
}

export default GoogleComponent;
