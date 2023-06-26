import { useState } from "react";
import { Form } from "react-bootstrap";
import { Container, Warning, Content, Section, SaveBtn, Icon } from "./styles";
import Icon15 from "../../assets/icon/icon15.png";
import Card from "./card";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function RulesPage() {
	const [title, setTitle] = useState(null);
	const [description, setDescription] = useState(null);
	const [maxOccurrencePeriod, setMaxOccurrencePeriod] = useState(null);
	const [timeOccurrence, setTimeOccurrence] = useState(null);
	const [betweenOccurrence, setBetweenOccurrence] = useState(null);
	const [event, setEvent] = useState(null);
	const [level, setLevel] = useState(null);

	const handleSaveRule = (e) => {
		e.preventDefault();
		const body = {
			title: title,
			description: description,
			maximum_occurrence_period: maxOccurrencePeriod,
			time_occurrence: timeOccurrence,
			between_occurrence: betweenOccurrence,
			event: event,
			level: level,
		};
	};

	const list = [
		{ id: 1, title: "Uniforme" },
		{ id: 1, title: "Casa" },
		{ id: 1, title: "Carne" },
	];

	return (
		<Container>
			<Warning>Sistema de Regras da Escola.</Warning>
			<Content>
				<Section>
					<Form
						onSubmit={
							handleSaveRule
						}
					>
						<Form.Group className="mt-3">
							<Form.Text>
								Titulo
								da
								violação
							</Form.Text>
							<Form.Control
								value={
									title
								}
								onChange={(
									e
								) => {
									setTitle(
										e
											.target
											.value
									);
								}}
								required
								minLength={
									10
								}
								maxLength={
									250
								}
								type="text"
								placeholder="Ex: Uniforme"
							/>
						</Form.Group>
						<Form.Group className="mt-3">
							<Form.Text>
								Descrição
							</Form.Text>
							<Form.Control
								required
								minLength={
									10
								}
								value={
									description
								}
								onChange={(
									e
								) => {
									setDescription(
										e
											.target
											.value
									);
								}}
								placeholder="Ex: Aluno entrou sem uniforme escolar."
								as="textarea"
								rows={
									5
								}
							/>
						</Form.Group>
						<Form.Group className="mt-3">
							<Form.Text>
								Máximo
								de
								violação
								por
								período
								de
								tempo
							</Form.Text>
							<Form.Control
								required
								value={
									maxOccurrencePeriod
								}
								onChange={(
									e
								) =>
									setMaxOccurrencePeriod(
										e
											.target
											.value
									)
								}
								type="number"
								placeholder="Ex: 10"
								min={
									1
								}
							/>
						</Form.Group>
						<Form.Group className="mt-3">
							<Form.Text>
								Período
								de
								tempo
							</Form.Text>
							<Form.Select
								required
								value={
									timeOccurrence
								}
								onChange={(
									e
								) =>
									setTimeOccurrence(
										e
											.target
											.value
									)
								}
							>
								<option value="">
									Selecione
								</option>
								<option value="D">
									Dia
								</option>
								<option value="SM">
									Semana
								</option>
								<option value="M">
									Mês
								</option>
								<option value="B ">
									Bimestre
								</option>
								<option value="T">
									Trimestre
								</option>
								<option value="S">
									Semestre
								</option>
								<option value="A">
									Ano
								</option>
							</Form.Select>
						</Form.Group>
						<Form.Group className="mt-3">
							<Form.Text>
								Limite
								minímo
								entre
								violação
							</Form.Text>
							<Form.Control
								required
								value={
									betweenOccurrence
								}
								onChange={(
									e
								) =>
									setBetweenOccurrence(
										e
											.target
											.value
									)
								}
								type="number"
								placeholder="Ex: 15 Dias entre ocorrência"
								min={
									1
								}
							/>
						</Form.Group>
						<Form.Group className="mt-3">
							<Form.Text>
								Evento
							</Form.Text>
							<Form.Select
								required
								value={
									event
								}
								onChange={(
									e
								) =>
									setEvent(
										e
											.target
											.value
									)
								}
							>
								<option value="">
									Selecione
								</option>
								<option value="E">
									Entrada
								</option>
								<option value="S">
									Saída
								</option>
							</Form.Select>
						</Form.Group>
						<Form.Group className="mt-3">
							<Form.Text>
								Nível
								da
								regra
							</Form.Text>
							<Form.Select
								required
								value={
									level
								}
								onChange={(
									e
								) =>
									setLevel(
										e
											.target
											.value
									)
								}
							>
								<option value="">
									Selecione
								</option>
								<option value="A">
									Alto
								</option>
								<option value="M">
									Médio
								</option>
								<option value="B">
									Baixo
								</option>
							</Form.Select>
						</Form.Group>
						<SaveBtn>
							Salvar
							regra
							<Icon
								src={
									Icon15
								}
								alt="save"
							/>
						</SaveBtn>
					</Form>
				</Section>
				<DndProvider backend={HTML5Backend}>
					<Section>
						{list.map(
							(
								card
							) => (
								<Card
									key={
										card.id
									}
									title={card.title}
								/>
							)
						)}
					</Section>
					<Section></Section>
				</DndProvider>
			</Content>
		</Container>
	);
}

export default RulesPage;
