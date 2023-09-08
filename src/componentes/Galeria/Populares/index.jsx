import React from 'react'
import Titulo from '../../Titulo'
import { styled } from 'styled-components'


const ContainerPopular = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  img {
    width: 212px;
    border-radius: 20px;
  }
`
const BotaoPopulares = styled.button`
  background: none;
  border: 2px solid #C98CF1;
  border-radius: 10px;
  padding: 15px 30px;
  color: white;
  font-size: 28px;
  font-family: "GandhiSansBold";
`

const Populares = ({ populares }) => {
  return (
    <ContainerPopular>
      <Titulo $alinhamento="center" >Populares</Titulo>
      {populares.map(imgPop => (
        <img key={imgPop.id} src={imgPop.path} alt="" />
      ))}
      <BotaoPopulares>Ver mais</BotaoPopulares>
    </ContainerPopular>
  )
}

export default Populares