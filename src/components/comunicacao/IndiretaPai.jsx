import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {


    const [ nome, setNome ] = useState('?');
    const [ idade, setIdade ] = useState(0);
    const [ nerd, setNerd ] = useState(false);

    //Pai passa para o filho a função via props e em algum momento o filho vai devolver esta função, ou seja uma função callback, 
    //quando acontecer um evento no filho que vc chamar essa
    //função que foi passada via props

    function fornecerInformacoes(nome, idade, nerd) {
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
    }

    return (
        <div>
            <div>
                <span>{nome} </span>
                <span>{idade} </span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}