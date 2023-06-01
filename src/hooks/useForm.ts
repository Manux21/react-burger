import React,{ ChangeEvent } from "react";


export const useForm = (inputValues: { [key: string]: string } = {}) => {
  const [values, setValues] = React.useState(inputValues);
  const [isFormEdited, setIsFormEdited] = React.useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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

