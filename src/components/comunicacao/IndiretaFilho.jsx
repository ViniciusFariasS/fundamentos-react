import React from "react";

export default props => {
    const callback = props.quandoClicar;
    const min = 50;
    const max = 70;
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min;
    const gerarNerd = () => Math.random() > 0.5 

    return (
        <div>
            <div>
                filho
            </div>
            <button onClick={_ => callback('João', gerarIdade, gerarNerd)}> {/* posso substituir o "e" de evento por "_" pois não estou usando o evento pois simplesmente estou chamando uma função para passar os dados*/}
                Fornecer informações
            </button>
        </div>
    )
}