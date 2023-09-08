import React, { useState } from 'react'
import tags from './tags.json'
import { styled } from 'styled-components'


const ContainerTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  
  p {
    width: 219px;
    color: #D9D9D9;
    font-size: 24px;
  }
`

const Filtros = styled.section`
  display: flex;
  align-items: center;
  gap: 24px;
  
  button {
    color: white;
    font-size: 24px;
    padding: 10px 8px;
    border-radius: 10px;
    background: rgba(217, 217, 217, 0.30);
    cursor: pointer;
    box-sizing: border-box;
    border: 2px solid transparent;
    &:hover {
      border-color: #C98CF1;
    }
  }
  @media screen and (max-width: 744px) {
    gap: 16px;
    button {
    }
  }
`

const Tags = ({ tagSelecionada }) => {



  return (
    <ContainerTags>
      <p>Busque por tags:</p>
      <Filtros>
        {tags.map(tag => <button onClick={() => {tagSelecionada(tag.id)}} key={tag.id}>{tag.titulo}</button>)}
      </Filtros>
    </ContainerTags>
  )
}

export default Tags