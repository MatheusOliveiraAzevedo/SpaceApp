import React, { useState } from 'react'
import Titulo from '../Titulo'
import Tags from './Tags'
import { styled } from 'styled-components'
import Populares from './Populares'
import Imagem from './Imagem'


const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ListaImagens = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    padding: 0;
`

const Galeria = ({ fotos = [], aoFotoSelecionada, populares, aoAlternarFavorito, tagSelecionada }) => {

    


  return (
    <>
        <Tags tagSelecionada={tagSelecionada} />
        <GaleriaContainer>
            <SecaoFluida>
                <Titulo>Navegue pela galeria</Titulo>
                <ListaImagens>
                    {fotos.map( foto => <Imagem 
                    aoZoomSolicitado={aoFotoSelecionada}
                    aoAlternarFavorito={aoAlternarFavorito}
                    key={foto.id}
                    foto={foto}/>)}
                </ListaImagens>
            </SecaoFluida>
            <Populares populares={populares}/>
        </GaleriaContainer>
    </>
  )
}

export default Galeria