import ReactDom from "react-dom";
import styled from 'styled-components';
import userImg from '../assets/BoboEsponja.png';


export default function Header(){
    return(
        <>
            <StyleHeader>
                <p>TrackIt</p>
                <img src={userImg} />


            </StyleHeader>
        </>
    )
}

const StyleHeader = styled.div`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display:flex;
    justify-content:space-between;
    position: fixed;
    top: 0;
    left: 0;

img{
    margin:14px;
}
p{
    font-family: 'Playball', cursive;
    font-size:39px;
    font-weight:400;
    color:white;
    margin:14px;
    
}

`
