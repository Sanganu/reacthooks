import React, { useState } from "react";

const useAcceptInput = (fieldStartValue) => {
    const [value, setFieldValue] = useState(fieldStartValue)

    const handleInput = {
        value,
        onChange: ({ target }) => setFieldValue(target.value)
    }
    const clearField = () => {
        setFieldValue(fieldStartValue)
    }
    return [ value, handleInput, clearField ]
}


export default useAcceptInput;