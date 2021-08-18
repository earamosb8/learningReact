import React from 'react';

const HolaMundo = () =>{
    const Hello = '!HOla Mundo';
    const isTrue = true;
    //formas de hacer validaciones: linea 12 y 13
    return(
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso Escencial de React</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React" />
            {isTrue ? <h4>Esto es verdadero</h4> : <h5>Soy Falso</h5>}
            {isTrue && <h4>Soy verdadero</h4>}
        </div>
    );
};

export default HolaMundo;