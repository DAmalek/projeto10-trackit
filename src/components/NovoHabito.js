import React from "react"
import styled from "styled-components";

export default function NovoHabito({open}){
    if (!open){ return null;
    }
    
    return (
    <>
        <BoxStyle>
            <input></input>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <div>
                <span></span>
            </div>
        </BoxStyle>
    </>
    )
}

const BoxStyle = styled.div`
    width: 100%;
    height: 180px;
    background-color: white;

`
