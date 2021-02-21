import React from 'react'
import Logo from './Logo';
import Search from './Search';
import UserInfo from './UserInfo';
import styled from 'styled-components'

const HeaderWrapper = styled.div`
height : 4rem;
background-color:  rgba(0, 0, 0, 0) ;
box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
display : flex;
align-items: center;
justify-content: space-between;
width  : auto;
padding :0 10rem;
margin : 0 auto;
position : fixed;
top : 0;
left : 0;
right : 0;
z-index : 1000;
`




const Header = ({ mode }) => {


    return (
        <>
            <HeaderWrapper className='HeaderWrapper' >

                <Logo></Logo>
                <Search></Search>
                <UserInfo></UserInfo>
            </HeaderWrapper>
        </>
    )

}

export default Header;
