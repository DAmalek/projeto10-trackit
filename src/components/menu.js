import styled from "styled-components"

export default function Menu(){
    return (
        <Footer>
            <p>Hábitos</p>
            <div><h1>Hoje</h1></div>
            <p>Histórico</p>
        </Footer>
    )
}

const Footer = styled.div`
    width: 100%;
    height: 70px;
    background-color: white;
    position: fixed;
    bottom: 0;
    left:0;
    display:flex;
    justify-content: space-between;
    align-items:center;
    
p{
    margin: 0 14px;
    font-family: 'Lexend Deca', sans-serif;
    color: #52B6FF;
    font-size: 18px;
    font-weight: 400;
}
div{
    background-color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    color: white;
    width: 91px;
    height: 91px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position:absolute;
    bottom: 10px;
    left: 40%;

}

`