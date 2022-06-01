import "./App.css";
import { useState, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { getAllCourses, updateCourses } from "./services/courses";
import { reorder } from "./utils/reorder";

import CourseList from "./components/courses/CourseList";
import Form from "./components/form/Form";

function App() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllCourses().then((courses) => {
      setCourses(courses)
      setIsLoading(false);
    })
  }, []);


  const handleOnDragEnd = async (result) => {
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

    const results = reorder(courses, source.index, destination.index);
    setCourses(results);
    await updateCourses(results);
  };

  return (
    <main className="app">
      <section className="form">
        <Form setCourses={setCourses} courses={courses} />
      </section>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <section className="drag-and-drop">
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <CourseList courses={courses} />
          </DragDropContext>
        </section>
      )}
    </main>
  );
}

export default App;
