import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";

import "./App.css";

//_ serve para dizer que a função terá apenas um parametro
export default () => (
    <div className="App">
        <h1>Fundamentos React </h1>
        <div className="Cards">

            <Card titulo="#06 - Repetição" color="#FF5534">
                <ListaAlunos></ListaAlunos>
            </Card>
            <Card titulo="#05 - Componente com filhos" color="#00C58D">
                <Familia sobrenome="Ferreira">
                    <FamiliaMembro nome="Pedro"></FamiliaMembro>
                    <FamiliaMembro nome="Ana"></FamiliaMembro>
                    <FamiliaMembro nome="Gustavo"></FamiliaMembro>
                </Familia>
            </Card>
            <Card titulo="#04 - Desafio Aleatório" color="#080">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card titulo="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card titulo="#02 - Com parâmetro" color="#E8B71A">
                <ComParametro titulo="Segundo componente" aluno="João Silva" nota={5.7} />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);