import React from "react";
import DiretaFilho from "./DiretaFilho";

export default props =>{
    return (
        <div>
            <DiretaFilho nome="Vinicius" idade={25} nerd={true} ></DiretaFilho>
            <DiretaFilho nome="Matheus" idade={18} nerd={true} ></DiretaFilho>
        </div>
    )
}