import React from 'react'
import styled from 'styled-components';


const FilterWrapper = styled.div`
padding-top : 1.2rem; 

display : flex;
align-items: center;
justify-content: space-between;
`
const FilterIndex = styled.div`
display : flex;
align-items: center;
justify-content: center;

`
const SearchWrapper = styled.div`
background-color: #FFFFFF;
border: 1px solid #DDDDDD;
border-radius: 24px;

color: #222222 ;
height : 2rem;
width : auto;
${props => (props.relative) ? 'display : none;' : 'display : flex;'};

min-width : 2rem;
padding : 0 1rem;
font-size : 0.8rem;
align-items: center;
justify-content: center;
&:hover {
    border : 1px solid black;
}
margin-right : 5px;

@media screen and (max-width: 744px) {
    ${props => (props.relative) ? 'display : flex;' : 'display : none;'};
}
`

const FilterMap = styled.div`
display : flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 950px) {
    display : none;
  }
`
const MapIcon = styled.div`
font-size : 0.8rem;
width : 7rem;
height : 2rem;
display : flex;
align-items: center;
justify-content: space-evenly;
&:hover {
    background-color :   #F7F7F7 ;
}
`

const ContentFilter = () => {
    return (
        <>
            <FilterWrapper>
                <FilterIndex>
                    <SearchWrapper>유연한 환불 정책</SearchWrapper>
                    <SearchWrapper>숙소 유형</SearchWrapper>
                    <SearchWrapper>요금</SearchWrapper>
                    <SearchWrapper>즉시 예약</SearchWrapper>
                    <SearchWrapper>필터 추가하기</SearchWrapper>
                    <SearchWrapper relative>필터</SearchWrapper>
                </FilterIndex>

                <FilterMap>
                    <MapIcon>
                        <i class="far fa-map"></i>
                        지도표시하기
                        </MapIcon>

                </FilterMap>
            </FilterWrapper>
        </>
    )
}
export default ContentFilter;