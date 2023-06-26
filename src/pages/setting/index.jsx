import { useState } from "react";

import { Container, Warning, Content, Card, Delete } from "./styles";
import { Button, InputGroup, Table, Form } from "react-bootstrap";

function SettingPage() {
	const [state, setState] = useState(false);
	const [name, setName] = useState("");

	return (
		<Container>
			<Warning>Configurações do sistema</Warning>
			<Content>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>
								Usuários
							</th>
							<th>
								Deletar
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>
								Mariana
							</td>
							<td>
								<Button variant="danger">
									Deletar
								</Button>
							</td>
						</tr>
						<tr>
							<td>2</td>

							<td>
								Carlos
							</td>
							<td>
								<Button variant="danger">
									Deletar
								</Button>
							</td>
						</tr>
						<tr>
							<td>3</td>
							<td>
								João
							</td>
							<td>
								<Button variant="danger">
									Deletar
								</Button>
							</td>
						</tr>
					</tbody>
				</Table>
				{state && (
					<InputGroup className="mb-3">
						<Form.Control
							value={
								name
							}
							onChange={(
								e
							) =>
								setName(
									e
										.target
										.value
								)
							}
							placeholder="Nome do usuário"
							aria-label="Nome do usuário"
							aria-describedby="basic-addon2"
						/>
						<Button
							variant="outline-secondary"
							id="button-addon2"
						>
							Salvar
						</Button>
					</InputGroup>
				)}
				<Button
					onClick={() =>
						setState(!state)
					}
					className="w-100"
					variant="primary"
				>
					Adicionar
				</Button>
			</Content>
		</Container>
	);
}
export default SettingPage;
