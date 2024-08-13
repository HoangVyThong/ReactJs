import { useReducer } from "react";

const initialStudent = {
  id: 1,
  name: "Hoang Vy Thong",
  age: 20,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CLICK":
      return { age: 22, name: "Le Thi Phuong", id: 3 };
    default:
      return state;
  }
};

function LearnReducer() {
  const [student, dispatch] = useReducer(reducer, initialStudent);

  const handlerClick = () => {
    dispatch({ type: "CLICK", id: 2 });
  };
  return (
    <div>
      <button onClick={handlerClick}>Click</button>
      <h1>My name is {student.name}</h1>
      <h1>My age is {student.age}</h1>
    </div>
  );
}

export default LearnReducer;
