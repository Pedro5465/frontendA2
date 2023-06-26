import { useState } from "react";

import {
	Container,
	Warning,
	LoadData,
	LoadOption,
	Option,
	LoadForm,
	SearchData,
	LoadBtn,
	LaodBtnIcon,
	InputUrl,
	InputFile,
	IconFile,
	Colums,
	Scroll,
} from "./styles";
import { Table, Form } from "react-bootstrap";

import Icon13 from "../../assets/icon/icon13.png";
import icon14 from "../../assets/icon/icon14.png";

import * as XLSX from "xlsx";

function DataPage() {
	const [option, setOption] = useState(0);
	const [columns, setColumns] = useState([]);
	const [rows, setRows] = useState([]);
	const [columnsSelected, setSelectedColumns] = useState([]);

	console.log(rows);

	function handleFileSelection(e) {
		const selectedFile = e.target.files[0];
		const extension = selectedFile.name.split(".").pop();

		if (extension.toLowerCase() === "xlsx") {
			console.log("Arquivo XLSX válido!");

			const reader = new FileReader();
			reader.onload = function (event) {
				const data = new Uint8Array(
					event.target.result
				);
				const workbook = XLSX.read(data, {
					type: "array",
				});

				// Acesso aos dados da planilha
				const sheetName =
					workbook.SheetNames[0];
				const worksheet =
					workbook.Sheets[sheetName];
				const jsonData =
					XLSX.utils.sheet_to_json(
						worksheet,
						{ header: 1 }
					);
				setColumns(jsonData[0]);
				const fil = jsonData.filter(
					(i) => i.length != 0
				);
				const dataTransform = [];
				fil.slice(1).forEach((row) => {
					const rowData = {};
					row.forEach(
						(
							cell,
							columnIndex
						) => {
							const columnName =
								jsonData[0][
									columnIndex
								];
							rowData[
								columnName
							] = cell;
						}
					);
					dataTransform.push(rowData);
				});
				setRows(dataTransform);
			};
			reader.readAsArrayBuffer(selectedFile);
		} else {
			console.log("Selecione um arquivo XLSX válido.");
		}
	}

	const handleCheckboxChange = (e, columnName) => {
		const isChecked = e.target.checked;
		if (isChecked) {
			setSelectedColumns((prevSelectedColumns) => [
				...prevSelectedColumns,
				columnName,
			]);
		} else {
			setSelectedColumns((prevSelectedColumns) =>
				prevSelectedColumns.filter(
					(col) => col !== columnName
				)
			);
		}
	};

	return (
		<Container>
			<Warning>
				Utilize a planilha pública salva no
				Google Sheets ou faça upload do arquivo
				para importar os dados dos alunos da sua
				escola.
			</Warning>
			<LoadData>
				<LoadOption>
					<Option
						onClick={() =>
							setOption(
								0
							)
						}
					>
						Link
					</Option>
					<Option
						onClick={() =>
							setOption(
								1
							)
						}
					>
						Local .xlsx
					</Option>
				</LoadOption>
				<LoadForm
					onSubmit={handleFileSelection}
				>
					<SearchData>
						{option === 0 ? (
							<InputUrl
								type="url"
								placeholder="Informe o endereço da planilha Google Sheets"
							/>
						) : (
							<InputFile>
								Procurar
								Planilha
								<IconFile
									src={
										icon14
									}
									alt="file"
								/>
								<input
									onChange={
										handleFileSelection
									}
									required
									id="load"
									type="file"
									accept=".xlsx"
									placeholder="Carregar Planilha"
								/>
							</InputFile>
						)}
					</SearchData>
					<LoadBtn>
						Carregar
						<LaodBtnIcon
							src={
								Icon13
							}
							alt="load"
						/>
					</LoadBtn>
				</LoadForm>
			</LoadData>
			<Colums>
				{columns.map((column, index) => (
					<div>
						<Form.Check
							type="checkbox"
							id={`checkbox-${index}`}
							label={
								column
							}
							onChange={(
								e
							) =>
								handleCheckboxChange(
									e,
									column
								)
							}
							checked={columnsSelected.includes(
								column
							)}
						/>
					</div>
				))}
			</Colums>
			<Scroll>
				<Table striped bordered hover>
					<thead>
						<tr>
							{columnsSelected.map(
								(
									th
								) => (
									<th>
										{
											th
										}
									</th>
								)
							)}
						</tr>
					</thead>
					<tbody>
						{rows.map(
							(
								row,
								rowIndex
							) => (
								<tr
									key={
										rowIndex
									}
								>
									{columnsSelected.map(
										(
											column,
											columnIndex
										) => (
											<td
												key={
													columnIndex
												}
											>
												{
													row[
														column
													]
												}
											</td>
										)
									)}
								</tr>
							)
						)}
					</tbody>
				</Table>
			</Scroll>
		</Container>
	);
}

export default DataPage;
