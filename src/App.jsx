import { styled } from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import backgroundImage from './assets/banner.png'
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"
import fotos from './fotos.json'
import populares from './populares.json'
import { useEffect, useState } from "react"
import ModalZoom from "./componentes/ModalZoom"
import Rodape from "./componentes/Rodape"

const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;

  .body{
    display: flex;
  }

`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
display: flex;
flex-direction: column;
flex-grow: 1;
`

function App() {


  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  let [fotoSelecionada, setFotoSelecionada] = useState(null)
  let [filtradas, setFiltradas] = useState(fotosDaGaleria)
  let [imagemProcurada, setImagemProcurada] = useState("")

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !filtradas.favorita
      })
    }
    setFotosDaGaleria(filtradas.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }


  function SelecaoTag(tag) {   //no if abaixo, o "0" do primeiro comparativo, se refere a tag TODAS, por tanto, precisa reaparecer todas as imagens na tela, e resetar a TagSelecionada e Filtradas.
    if (tag === "0") {
      setFiltradas(fotosDaGaleria)
    } else { // no else abaixo, se refere quando a tag nao for todas("0"), entao precisa aparecer na tela as imagens correspondentes a tag selecionada, por tanto, é feito um filter que só vai mostrar as imagens que correspondem a tag e tagId(cadastrado em cada imagem no arquivo .JSON).
      setFiltradas(fotosDaGaleria.filter(filtro => filtro.tagId === tag))
    }
  }

  useEffect(() => {

    setFiltradas(fotosDaGaleria.filter(pesquisa => pesquisa.titulo.toLowerCase().includes(imagemProcurada.toLowerCase())))

    // no codigo acima, usei o filter para pegar somente o texto que contem no titulo das imagens. usei o includes para procurar se o que estou pesquisando contem nos titulos das imagens.
    // incluir também o toLowerCase() para colocar tanto o texto do titulo das imagens quando o texto pesquisado (imput) em minusculo, facilitando a pesquisa.

  }, [imagemProcurada])

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho imagemProcurada={pesquisa => { setImagemProcurada(pesquisa) }} />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              backgroundImage={backgroundImage}
              texto="A galeria mais completa de fotos do espaço!"
            />
            <Galeria
              populares={populares}
              aoFotoSelecionada={foto => setFotoSelecionada(foto)}
              fotos={filtradas}
              aoAlternarFavorito={aoAlternarFavorito}
              tagSelecionada={(tag) => SelecaoTag(tag)}
            />

          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        aoAlternarFavorito={aoAlternarFavorito}
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
      />
      <Rodape />
    </FundoGradiente>
  )
}

export default App
