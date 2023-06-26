import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

/**
 *
 *
 * Páginas
 *
 */
import LoginPage from "../pages/login";
import PanelPage from "../pages/panel";
import HomePage from "../pages/home";
import DataPage from "../pages/data";
import RulesPage from "../pages/rules";
import SettingPage from "../pages/setting";

function RouterAddress() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<LoginPage />
						}
					/>
					<Route
						path="/painel"
						element={
							<PanelPage />
						}
					>
						<Route
							path="inicio"
							element={
								<HomePage />
							}
						/>
						<Route
							path="dados"
							element={
								<DataPage />
							}
						/>
						<Route
							path="regras"
							element={
								<RulesPage />
							}
						/>
						<Route
							path="configuracao"
							element={
								<SettingPage />
							}
						/>
						<Route
							path="historico"
							element={
								<h1>
									Histórico
								</h1>
							}
						/>
						<Route
							path="ocorrencia"
							element={
								<h1>
									Ocorrencia
								</h1>
							}
						/>
					</Route>
					<Route
						path="*"
						element={
							<h1>
								Not
								Found
								404
								<Link to="/login">
									Encontrar
								</Link>
							</h1>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default RouterAddress;
