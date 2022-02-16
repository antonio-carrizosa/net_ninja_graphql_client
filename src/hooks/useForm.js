import { useState } from "react";

const useForm = (initialValues = {}) => {
  const [formValues, setFormValues] = useState(initialValues); 

  // const onChange = (e) => {
  // const {target} = e ;
  const handleOnChange = ({target}) => {
    const {name, value} = target;    
    setFormValues({
      ...formValues,
      [name]: value
    });        
  }

  return {formValues, handleOnChange};
};

export default useForm;
