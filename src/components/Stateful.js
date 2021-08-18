import React, {Component} from React;
//conponente con estado maneja ciclo de vida
//eventos y estado
class Stateful extends Component{
    constructor(props){
        super(props);
        this.state = {
            hello: "hola mundo"
        }
    }

    render(){
        return(
            <h1>{this.state.hello}</h1>
        )
    }
};

export default Stateful;