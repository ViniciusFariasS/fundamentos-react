import React from "react";

export default function Aleatorio(props) {

    //const [a, b] = [1, 2]; destruturing para array
    const { min, max } = props; //destruturing

    const aleatorio = parseInt(Math.random() * (max - min) + min);
    return (
        <div>
            <h1>Valor Aleatório</h1>
            O número aleatório gerado entre os números {min} e {max} foi o <strong>{aleatorio}</strong>
        </div>
    )
}