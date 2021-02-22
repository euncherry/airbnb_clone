import React from 'react'

import ContentCard from './ContentCard';
import ContentFilter from './ContentFilter';
import ContentIntro from './ContentInto';
import styled from 'styled-components'

const ContentWrapper = styled.div`
padding :0 10rem ;

margin-top : 4rem;
height : auto;
z-index : 990;
`

const Content = () => {


    return (
        <>
            <ContentWrapper className='content'>
                <ContentIntro region={"서울"} number={"300"} ></ContentIntro>
                <ContentFilter></ContentFilter>
                <ContentCard></ContentCard>
            </ContentWrapper>
        </>
    )

}

export default Content;
