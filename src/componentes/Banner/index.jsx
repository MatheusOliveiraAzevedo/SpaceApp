import { styled } from "styled-components"
// import banner from '../../assets/banner.png'


const BannerEstilizado = styled.figure`
    background-image: ${props => `url(${props.$backgroundImage})`} ;
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`

const TextoBannerEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF;
    max-width: 300px;
    padding: 0 64px;
`

const Banner = ({ backgroundImage, texto }) => {

    return(
        <BannerEstilizado $backgroundImage={backgroundImage} >
            <TextoBannerEstilizado>{texto}</TextoBannerEstilizado>
        </BannerEstilizado>
    )
}

export default Banner