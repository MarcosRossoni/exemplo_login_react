import React from 'react';
import {ButtonStyles} from "./styles";

function Button({Text, onClick, Type = 'button'}) {
    return (
        <ButtonStyles
            onClick={onClick}
            type={Type}
        >
            {Text}
        </ButtonStyles>
    );
}

export default Button;