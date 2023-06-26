import { Link } from "react-router-dom";

import { Card, CardHeader, CardMain, Container, NotAccount } from "./styles";

import GoogleComponent from "../../components/google";

import Icon9 from "../../assets/icon/icon9.png";
import Icon10 from "../../assets/icon/icon10.png";

import HeaderComponent from "../../components/header";

import LogoComponent from "../../components/logo";

function LoginPage() {
	return (
		<>
			<HeaderComponent>
				<LogoComponent src={Icon10}>
					Estado de Santa Catarina
				</LogoComponent>
			</HeaderComponent>
			<Container>
				<Card>
					<CardHeader>
						<span>
							Sistema
							Auxilar de
							Gerenciamento
							Escolar
						</span>
					</CardHeader>
					<CardMain>
						<img
							src={
								Icon9
							}
							alt="Login"
						/>
						<select
							name=""
							id=""
						>
							<option value="0">
								Administrador
							</option>
							<option value="0">
								Luiz
							</option>
							<option value="0">
								Ana
							</option>
						</select>
						<GoogleComponent />
						<NotAccount>
							Não possui
							autorização?
							<Link>
								Clique
								aqui!
							</Link>
						</NotAccount>
					</CardMain>
				</Card>
			</Container>
		</>
	);
}

export default LoginPage;
