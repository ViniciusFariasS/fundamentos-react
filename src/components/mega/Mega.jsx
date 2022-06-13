import React, { useState } from "react";
import './Mega.css';

export default props => {

    function gerarNumeros(quantidade) {
        const numeros = Array(quantidade)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2);

        return numeros;
    }

    function gerarNumeroNaoContido(min, max, array) {
        const numeroRandom = parseInt(Math.random() * (max + 1 - min) + min);

        return array.includes(numeroRandom) ?
            gerarNumeroNaoContido(min, max, array) : numeroRandom
    }

    const numerosIniciais = Array(props.quantidade || 6).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)
    const [quantidade, setQuantidade] = useState(props.qtde || 6)

    return (
        <div className="Mega">
            <h1>teste</h1>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Quantidade de números </label>
                <input
                    type="number"
                    value={quantidade}
                    onChange={
                        (e) => {
                            setQuantidade(+e.target.value)
                            setNumeros(gerarNumeros(+e.target.value))
                        }
                    }
                />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(quantidade))}>Gerar Números</button>
        </div>
    )
}