import React from "react";

export default function Fragmento(){
    return (
        //"<> conteúdo </>" também serve porém não da para receber uma propriedade
        <React.Fragment>
            <h2>Fragmento</h2> 
            <p>Cuidado com esse erro!</p>
        </React.Fragment>
    )

}