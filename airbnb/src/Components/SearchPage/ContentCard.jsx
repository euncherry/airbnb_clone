import React from 'react'
import CardInfo from './CardInfo'
import Data from "../../assets/dummy/romeList.json"
import styled from 'styled-components'


const ContentWrapper = styled.div`

height : auto;
width : 100%;
display : flex;
flex-wrap: wrap;
flex-diction : row;
`

const ContentCard = () => {
    console.log(Data[0])
    return (
        <>
            <ContentWrapper>
                {

                    Data.map((data) =>
                        <CardInfo grade={data.grade} image={data.image} information={data.information}></CardInfo>
                    )
                }
            </ContentWrapper>
        </>
    )
}
export default ContentCard;