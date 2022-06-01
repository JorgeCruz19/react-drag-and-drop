import { useState } from "react";
import { insertCourse } from "../../services/courses";

const Form = ({ courses, setCourses }) => {
  
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeId = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name == "" || id == "") {
      alert("Favor ingresar datos requeridos");
      return;
    }
    let newCourses = [...courses, { id: id, name }];
    setCourses(newCourses);
    await insertCourse({ id, name });

    setId("");
    setName("");
  };

  return (
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
        value={name}
        onChange={handleChangeName}
        placeholder="Escriba el nombre del curso"
      />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default Form;
