import React from 'react'
import { styled } from 'styled-components'

const CardEstilizado = styled.figure`
    display: flex;
    flex-direction: column;
    background-color: #001634;
    width: ${props => props.$expandida ? "90%" : "460px" };
    border-radius: 20px;
    color: white;
    margin: 0;
    padding: 0;
    overflow: hidden;
    `

const TituloCardImg = styled.h3`
    font-family: "GandhiSansBold";
    font-size: 20px;
    font-weight: 700;
    margin: 0;
`
const FonteCardImg = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin: 0;
`

const ImgEstilizada = styled.img`
    width: 100%;

`

const ContainerInfoImg = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 20px;
    `
const ContainerInfo = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0;
`

const ContainerBotoes = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

const Botao = styled.button`
    background: none;
    border: none;
    padding: 0;
`

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, aoAlternarFavorito }) => {

    let iconeFavorito = foto.favorita ? "icones/favorito-ativo.png" : "icones/favorito.png"

    // let iconeFavorito = "icones/favorito.png"

    // if (foto.favorita) {
    //     iconeFavorito = "icones/favorito-ativo.png"
    // }

  return (
    <CardEstilizado $expandida={expandida}>
        <ImgEstilizada src={foto.path} alt="" />
        <ContainerInfoImg>
            <TituloCardImg>{foto.titulo}</TituloCardImg>
            <ContainerInfo>
                <FonteCardImg>{foto.fonte}</FonteCardImg>
                <ContainerBotoes>
                    <Botao 
                        onClick={() => aoAlternarFavorito(foto)}
                    >
                        <img src={iconeFavorito} alt=""/>
                    </Botao>
                    {!expandida && <Botao aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                            <img src="icones/expandir.png" alt=""/>
                        </Botao>
                    }
                </ContainerBotoes>
            </ContainerInfo>
        </ContainerInfoImg>
    </CardEstilizado>
  )
}

export default Imagem