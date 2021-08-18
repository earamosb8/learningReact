import React from 'react';
//definiremos un estado
// el estado es un objeto al cual le podemos definir, variables, boleanos y funciones
// y vamos a poder acceder a ellas en el componente en el momento 
//en el que se inicializa
class Button2 extends React.Component{
    state = {
        count:0,
    }
    //evento onclick
    handleClick=()=>{
        //actulizamos el valor de estado
        //atravez del evento
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        return(
            <div>
                <h1>Manzanas: {this.state.count}</h1>
                <button type="button" onClick={this.handleClick}>Agregar</button>
            </div>
        )
    }
}

export default Button2;