import React from 'react'
import Imagem from '../Galeria/Imagem'
import { styled } from 'styled-components'

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    border: 0;
    padding: 0;
    width: 1156px;
    display: flex;
    justify-content: center;

`

const BotaoFecharModal = styled.button`
    position: relative;
    top: 20px;
    right: 60px;
    background: none;
    border: none;
`

const ModalZoom = ({ foto, aoFechar, aoAlternarFavorito }) => {
    return (
        <>
            {foto &&
                <>
                    <Overlay />
                    <DialogEstilizado open={!!foto} onClose={aoFechar}>
                        <Imagem aoAlternarFavorito={aoAlternarFavorito} foto={foto} expandida={true} />
                        <form method="dialog">
                            <BotaoFecharModal formMethod="dialog" onClick={() => {aoFechar}}>
                                <img src="icones/fechar.png" alt="Icone de Fechar" />
                            </BotaoFecharModal>
                        </form>
                    </DialogEstilizado>


                </>
            }
        </>

    )
}

export default ModalZoom