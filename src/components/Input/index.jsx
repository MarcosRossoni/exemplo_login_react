import React from 'react';
import {InputStyles} from "./styles";

function Input({type, placeholder, value, onChange}) {
    return (
        <InputStyles
            type={type}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
        />
    );
}

export default Input;