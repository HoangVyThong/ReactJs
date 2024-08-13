import { useState } from "react";

export default function useHandlerChange(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handlerChange = (e) => {
    const type = e.target.type;
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return { values, handlerChange };
}
