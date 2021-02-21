import React from 'react'
import styled from 'styled-components';


const SearchWrapper = styled.div`
background-color: #FFFFFF;
border: 1px solid #DDDDDD;
border-radius: 24px;
color: #222222 ;
height : 2.5rem;
width : auto;
display : flex;
align-items: center;
justify-content: center;
&:hover {
    box-shadow: 1px 1px 2px 1px  rgba(0, 0, 0, 0.15);
}
`


const SearchBtn = styled.div`
height : 2rem;
width : auto;
min-width : ${props => props.min};
font-size : 0.8rem;
font-weight : 600;
padding : 0 1rem;
display : flex;
align-items: center;
justify-content: center;
`
const SearchBorder = styled.div`
height : 1.5rem;
width : 1px;
background-color: #DDDDDD;
`
const SearchGuest = styled.div`
height : 2rem;
width : auto;

font-size : 0.8rem;

display : flex;
align-items: center;
justify-content: center;
`

const GuestAdd = styled.div`
font-size : 0.8rem;
min-width : 4rem;
padding : 0 1rem;
color : #717171;
`

const SearchIcon = styled.div`
height : 1.5rem;
width : 1.5rem;
font-size : 10px;
border-radius: 50%;
background-color: #FF385C ;
color : white;
display : flex;
align-items: center;
justify-content: center;
margin-right : 7px;
`

const Search = () => {
    return (
        <>
            <SearchWrapper >
                <SearchBtn min={'2rem'}>서울</SearchBtn>
                <SearchBorder></SearchBorder>

                <SearchBtn min={'4rem'} > 날짜 입력</SearchBtn>
                <SearchBorder></SearchBorder>

                <SearchGuest >
                    <GuestAdd>
                        게스트추가
                    </GuestAdd>
                    <SearchIcon>
                        <i className="fas fa-search"></i>
                    </SearchIcon>
                </SearchGuest>
                {/* <SearchIcon>
                    <i className="fas fa-search"></i>
                </SearchIcon> */}

            </SearchWrapper>
        </>
    )
}

export default Search;
