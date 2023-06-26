import { Dropdown, ListDrop } from "./styles";

function DropdownComponent() {
	return (
		<Dropdown>
			<ListDrop>Documentação</ListDrop>
			<ListDrop>Tutorial</ListDrop>
			<ListDrop>FAQ</ListDrop>
		</Dropdown>
	);
}

export default DropdownComponent;
