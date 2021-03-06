import React from 'react';
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 1rem;
    color: #fff;
    max-width: 800px;
    margin-top: 10rem;

`

const Frase = ({frase}) => {
    return ( 

        <ContenedorFrase>
            <h1>{frase.quote}</h1>
            <p>{frase.author}</p>
        </ContenedorFrase>
     );
}
 
export default Frase;