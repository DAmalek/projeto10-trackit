import Header from "./header";
import Menu from "./menu";
import styled from "styled-components";
import { useState } from "react";

export default function Habitos(){
    return(
        <>
            <Header />
            <Conteudo>
                <AddHabito>
                    <p>Meus hábitos</p>
                    <div>+</div>
                </AddHabito>
            </Conteudo>
            <Menu />
        </>
    )

}


const Conteudo = styled.div`
    margin-top: 100px;
    font-family: 'Lexend Deca', sans-serif;
    color: #126BA5;

`

const AddHabito = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
p{
    margin: 0 15px;
    font-size: 23px;
}
div{
    margin: 0 15px;
    font-size: 30px;
    background-color: #52B6FF;
    width: 37px;
    height: 35px;
    color:white;
    border-radius: 4.63636px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
}


`
