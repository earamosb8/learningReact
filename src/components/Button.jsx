import React from 'react';
//componte que recibe propiedades
/*Las Props son la forma de enviar y 
recibir información en nuestros componentes. Son la forma de comunicar 
cada componente con el resto de la aplicación. 
Son muy parecidas a los parámetros y 
argumentos de las funciones en cualquier lenguaje de programación.*/
const Button = props =>{
    //otra forma de extraer las propiedades
    const {text} = props
    return(
        <div>
            <button type="button">{props.text}</button>
            <button type="button">{text}</button>
        </div>
    );
};



export default Button;