import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

//_ serve para dizer que a função terá apenas um parametro
export default () => (
    <div>
        <h1>Fundamentos React </h1>
        <Card titulo="Desafio Aleatório">
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
            <Aleatorio min={1} max={60}/>
        </Card>

        <Fragmento />
        <ComParametro titulo="Segundo componente" aluno="João Silva" nota={5.7} />
        <Primeiro></Primeiro>
    </div>
);