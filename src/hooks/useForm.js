import React from "react";

export const useForm = (inputValues) => {
  const [values, setValues] = React.useState(inputValues);
  const [isFormEdited, setIsFormEdited] = React.useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setIsFormEdited(true);
  };

  const resetForm = () => {
    setValues(inputValues);
    setIsFormEdited(false);
  };



  return { values, handleChange, setValues, isFormEdited};
};