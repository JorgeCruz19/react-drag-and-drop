import { Droppable } from "react-beautiful-dnd";
import Course from "./Course";
const CourseList = ({courses}) => {
  return (
    <Droppable droppableId="courses">
      {(droppableProvided) => (
        <ul
          {...droppableProvided.droppableProps}
          ref={droppableProvided.innerRef}
          className="course-container"
        >
          {courses.map((course, index) => (
            <Course key={course.id} course={course} index={index} />
          ))}
          {droppableProvided.placeholder}
        </ul>
      )}
    </Droppable>
  )
}

export default CourseList