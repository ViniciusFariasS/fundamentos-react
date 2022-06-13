import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaRepeticao from "./components/repeticao/TabelaRepeticao";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Mega from "./components/mega/Mega";

import Contador from "./components/contador/Contador";

import "./App.css";

//_ serve para dizer que a função terá apenas um parametro
export default () => (
    <div className="App">
        <h1>Fundamentos React </h1>
        <div className="Cards">
            <Card titulo="#13 - Desafio Megasena" color="#CC334F">
                <Mega quantidade={8}/>
            </Card>
            <Card titulo="#12 - Contador" color="#CC334F">
                <Contador numeroInicial={10}></Contador>
            </Card>
            <Card titulo="#11 - Componente Controlado" color="#DD5577">
                <Input></Input>
            </Card>
            <Card titulo="#10 - Comunicação Indireta" color="#EE87AA">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#09 - Comunicação Direta" color="#55DD4F">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="#08 - Renderização Condicional" color="#00DD55">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{ nome: 'Vini' }}/>
            </Card>
            <Card titulo="#07 - Exercicio Repetição" color="#FD0000">
                <TabelaRepeticao></TabelaRepeticao>
            </Card>
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