import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`

display : flex;
flex-direction : column;
width : 307px;
width :19%;
height : auto;
margin : 1rem 0.5%;
`

const CardImage = styled.img.attrs((props) => ({
    src: props.src
}))`
width : 100% ;
height : 204px;

`

const CardRate = styled.div`
width :100%;
height : 1rem;
`
const CardDetail = styled.div`
width : 100%;
height : 3rem;
`




const CardInfo = ({ image, grade, information }) => {
    return (
        <>
            <CardWrapper>
                <CardImage src={image}>
                </CardImage>

                <CardRate>
                    {grade}
                </CardRate>
                <CardDetail>
                    {information}
                </CardDetail>
            </CardWrapper>

        </>
    )


}

export default CardInfo;