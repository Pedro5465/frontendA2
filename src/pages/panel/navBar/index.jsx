import { Nav, Link, Occurrence, Icon, Disconnect, Scroll } from "./styles";

import Icon1 from "../../../assets/icon/icon1.png";
import Icon2 from "../../../assets/icon/icon2.png";
import Icon3 from "../../../assets/icon/icon3.png";
import Icon4 from "../../../assets/icon/icon4.png";
import Icon5 from "../../../assets/icon/icon5.png";
import Icon6 from "../../../assets/icon/icon6.png";
import Icon7 from "../../../assets/icon/icon7.png";

function NavBar() {
	const handleIsActive = ({ isActive, isPending }) => {
		return {
			background: isActive ? "#1a2126" : "",
		};
	};
	return (
		<Scroll>
			<Nav>
				<Link
					to="inicio"
					style={handleIsActive}
				>
					<Icon
						src={Icon1}
						alt="Início"
					/>
					Início
				</Link>

				<Link to="dados" style={handleIsActive}>
					<Icon
						src={Icon2}
						alt="Dados"
					/>
					Dados
				</Link>
				<Link
					to="regras"
					style={handleIsActive}
				>
					<Icon
						src={Icon3}
						alt="Regras"
					/>
					Regras
				</Link>
				<Link
					to="configuracao"
					style={handleIsActive}
				>
					<Icon
						src={Icon4}
						alt="Configuração"
					/>
					Configuração
				</Link>
				<Link
					to="historico"
					style={handleIsActive}
				>
					<Icon
						src={Icon5}
						alt="Histórico"
					/>
					Histórico
				</Link>
				<Link to="ocorrencia">
					<Occurrence>
						<Icon
							src={
								Icon6
							}
							alt="Ocorrência"
						/>
						Ocorrência
					</Occurrence>
				</Link>
				<Disconnect>
					<Icon
						src={Icon7}
						alt="Desconecte-se"
					/>
					Desconecte-se
				</Disconnect>
			</Nav>
		</Scroll>
	);
}

export default NavBar;
