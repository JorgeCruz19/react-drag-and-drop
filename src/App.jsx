import "./App.css";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialTasks = [
	{
		id: "1",
		text: "React.js",
	},
	{
		id: "2",
		text: "HTML/CSS",
	},
	{
		id: "3",
		text: "AWS",
	},
	{
		id: "4",
		text: "JavaScript",
	},
];

const reorder = (list, startIndex, endIndex) => {
	const result = [...list];
	const [removed] = result.splice(startIndex, 1);
	result.splice(endIndex, 0, removed);

	return result;
};

function App() {
	const [tasks, setTasks] = useState(initialTasks);
	const [id, setId] = useState("");
	const [course, setCourses] = useState("");

	const handleChangeCourse = (e) => {
		setCourses(e.target.value);
	};
	const handleChangeId = (e) => {
		setId(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (course == "" || id == "") {
			alert("Favor ingresar datos requeridos");
		}
		setTasks.push(...items, { id: id, text: course });
	};
	return (
		<main className="app">
			<section className="form">
				<form onSubmit={handleSubmit} autoComplete="off">
					<label htmlFor="id">Id:</label>
					<input
						id="id"
						type="text"
						name="id"
						value={id}
						onChange={handleChangeId}
						placeholder="Escriba el id del curso"
					/>
					<label htmlFor="course">Curso:</label>
					<input
						id="course"
						type="text"
						name="course"
						value={course}
						onChange={handleChangeCourse}
						placeholder="Escriba el nombre del curso"
					/>
					<button type="submit">Guardar</button>
				</form>
			</section>
			<section className="drag-and-drop">
				<DragDropContext
					onDragEnd={(result) => {
						const { source, destination } = result;
						if (!destination) {
							return;
						}
						if (
							source.index === destination.index &&
							source.droppableId === destination.droppableId
						) {
							return;
						}

						setTasks((prevTasks) =>
							reorder(prevTasks, source.index, destination.index)
						);
					}}
				>
					<Droppable droppableId="tasks">
						{(droppableProvided) => (
							<ul
								{...droppableProvided.droppableProps}
								ref={droppableProvided.innerRef}
								className="task-container"
							>
								{tasks.map((task, index) => (
									<Draggable key={task.id} draggableId={task.id} index={index}>
										{(draggableProvided) => (
											<li
												{...draggableProvided.draggableProps}
												ref={draggableProvided.innerRef}
												{...draggableProvided.dragHandleProps}
												className="task"
											>
												{task.text}
											</li>
										)}
									</Draggable>
								))}
								{droppableProvided.placeholder}
							</ul>
						)}
					</Droppable>
				</DragDropContext>
			</section>
		</main>
	);
}

export default App;
