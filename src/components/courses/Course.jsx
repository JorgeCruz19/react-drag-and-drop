import { Draggable } from "react-beautiful-dnd";

const Course = ({course, index}) => {
  return (
    <Draggable key={course.id} draggableId={course.id} index={index}>
      {(draggableProvided) => (
        <li
          {...draggableProvided.draggableProps}
          ref={draggableProvided.innerRef}
          {...draggableProvided.dragHandleProps}
          className="course"
        >
          {course.name}
        </li>
      )}
    </Draggable>
  )
}

export default Course