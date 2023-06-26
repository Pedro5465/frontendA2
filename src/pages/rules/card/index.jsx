import { useDrag, useDrop } from "react-dnd";
import { Container } from "./styles";
import { useRef } from "react";

function Card({ title, index }) {
	const ref = useRef();

	const [{ isDragging }, dragRef] = useDrag({
		type: "CARD",
		index: index,
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	});

	const [collectedProps, drop] = useDrop({
		accept: "CARD",
		collect: (item, monitor) => {
			console.log(monitor);
		},
	});

	dragRef(drop(ref));

	return (
		<Container ref={dragRef} isDragging={isDragging}>
			{title}
		</Container>
	);
}
export default Card;
