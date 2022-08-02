import React, { useState } from "react";

const useAcceptInput = (fieldValue) => {
    const [fieldValue, setFieldValue] = useState(fieldValue)

    const handleInput = {
        value,
        onchange: ({ target }) => setFieldValue(target.value)
    }
    const clearField = () => {
        setFieldValue(fieldValue)
    }
    return { fieldValue, handleInput, clearField }
}


export default useAcceptInput;