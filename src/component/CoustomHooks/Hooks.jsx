import { useState } from "react"

const useInputFieldValue=value=>{
    const [fieldvalue,setFiledValue]=useState(value);
    const handleField = e=>{
        setFiledValue(e.target.value)
    }
    return [fieldvalue,handleField];
}
export default useInputFieldValue;