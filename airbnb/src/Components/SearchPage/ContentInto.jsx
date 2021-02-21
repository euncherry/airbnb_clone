import React from 'react'
import styled from 'styled-components'

const ResultInfo = styled.div`
padding-top : 50px;
`

const ResultText = styled.div`
    font-size : ${props => props.size};
    font-weight :  ${props => props.weight} : null;
    ${props => (props.weight) ? `font-weight : 800;` : null}
`



const ContentIntro = ({ region, number }) => {
    return (
        <>
            <ResultInfo>
                <ResultText size={'0.8rem'}>
                    {number}개 이상의 숙소
            </ResultText>
                <ResultText weight size={'2rem'}>
                    {region}의 숙소
            </ResultText>
            </ResultInfo>
        </>
    )
}
export default ContentIntro;