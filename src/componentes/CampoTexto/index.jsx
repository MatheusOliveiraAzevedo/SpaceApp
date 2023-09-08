import React from 'react'
import { styled } from 'styled-components'

const ImputEstilizado = styled.div`
position: relative;
    /* display: flex;
    width: 602px;
    max-width: 602px;
    max-height: 56px;
    justify-content: space-between;
    align-items: center;
    border: 2px solid white;
    border-radius: 10px;
    background: linear-gradient(#C98CF1, #7B78E5);
    padding: 0 10px;


    input {
        background-color: inherit;
        border: none;
    }

    input::placeholder {
        color: white;
    }

    img {
        max-width: 32px;
        max-height: 32px;
    } */
`

const CampoTextoEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    @media screen and (max-width: 744px) {
        width: 426px;
    }
`

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`;


const CampoTexto = ({ imagemProcurada }) => {
  return (
    <ImputEstilizado>
        <CampoTextoEstilizado onChange={(event) => {imagemProcurada(event.target.value)}} type="text" placeholder='O que você procura?' />
        <IconeLupa src="icones/search.png" alt="" />
    </ImputEstilizado>
  )
}

export default CampoTexto