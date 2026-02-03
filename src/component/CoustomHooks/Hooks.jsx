import { useState } from "react"

const useInputFieldValue=filed =>{
    const [fieldValue , setFieldValue]=useState(filed);
    const handleSubmit=e=>{
        e.preventDefault();
        setFieldValue(e.target.value);
    }
    return [fieldValue,handleSubmit];
}
export default useInputFieldValue;