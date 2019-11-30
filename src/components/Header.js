import React from 'react';
import styled from 'styled-components';

const Header = () => {

    return (
        <Wrapper>
            <header className='App-header'>
                <img className='logo' src='https://res-5.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1435909643/liv6vlkrvucn35ubnhjp.png' alt='Clearscore' title='Clearscore'/>
            </header>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.App-header {
    background: #fff;
    min-height: 10vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    width: -webkit-fill-available;
    z-index: 2;
    box-shadow: 0 0.125rem 0.125rem 0 rgba(0,0,0,0.1);
    .logo {
        width: 120px;
    }
}
`

export default Header