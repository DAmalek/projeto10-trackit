import Header from "./header";
import Menu from "./menu";
import styled from "styled-components";
import NovoHabito from "./NovoHabito";
import React,{ useState } from "react";



export default function Habitos(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
            <Header />
            <Conteudo>
                <Container>
                    <AddHabito>
                        <p>Meus hábitos</p>
                        <div onClick={()=> setIsOpen(true)}>+</div>
                    </AddHabito>
                    <NovoHabito open={isOpen}/>
                    <TextoSemHab>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</TextoSemHab>
                </Container>
            </Conteudo>
            <Menu />
        </>
    )

}


const Conteudo = styled.div`
    
    height: 500px;
    font-family: 'Lexend Deca', sans-serif;
        color: #126BA5;
        display: flex;
    align-items: center;
    
    flex-direction: column;
    

`
const Container = styled.div`
    margin-top: 100px;
    max-width: 90%;
`

const AddHabito = styled.div`
    
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
p{
    
    font-size: 23px;
}
div{
    
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
const TextoSemHab = styled.p`

    margin-top: 30px;
    color: #666666;

`
