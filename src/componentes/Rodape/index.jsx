import { styled } from "styled-components"

const RodapeEstilizado = styled.footer`
    background-color: #04244F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 24px;

    section {
        ul {
            display: flex;
            align-items: center;
            gap: 35px;
            padding: 0;
            margin: 0;
        }

    }
    span {
        color: white;
        font-size: 16px;
    }
`

const IconeMidia = styled.li`
    list-style-type: none;
`

const Rodape = () => {
    return (
        <RodapeEstilizado>
            <section>
                <ul>
                    <IconeMidia>
                        <img src="imagens/sociais/facebook.svg" alt="" />
                    </IconeMidia>
                    <IconeMidia>
                        <img src="imagens/sociais/instagram.svg" alt="" />
                    </IconeMidia>
                    <IconeMidia>
                        <img src="imagens/sociais/twitter.svg" alt="" />
                    </IconeMidia>
                </ul>
            </section>
            <span>Desenvolvido por Alura.</span>
        </RodapeEstilizado>
    )
}

export default Rodape