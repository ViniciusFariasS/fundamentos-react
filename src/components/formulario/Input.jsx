import React, { useState } from "react";
import './Input.css';

export default props => {

    const [valor, setValor] = useState('Inicial')

    function quandoMudar(e) {
        setValor(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={valor} onChange={quandoMudar}></input>
                <input value={valor} readOnly></input> {/*readOnly para quando eu não quiser alterar o valor do campo*/}
                <input value={undefined}></input> {/*Componente não controlado pois não está vinculado a um estado*/}
            </div>
        </div>
    )
}