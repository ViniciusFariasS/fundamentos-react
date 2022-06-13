import React from "react";
import produtos from "../../data/produtos";

import "./TabelaRepeticao.css"

export default (props) => {

    const produtosJSX = produtos.map((produto, i) => {
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : ''}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2)} </td>
            </tr>
        )
    })
    return (
        <div className="TabelaProdutos">
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Nome</td>
                        <td>Preço</td>
                    </tr>
                </thead>
                <tbody>
                    {produtosJSX}
                </tbody>
            </table>
        </div>
    )
}