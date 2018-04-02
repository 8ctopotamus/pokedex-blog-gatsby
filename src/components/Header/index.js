import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Logo from '../../images/logo.svg'

const HeaderWrapper = styled.div`
  background: #0ba7fe;
  margin-bottom: 1.45rem;
  height: 70vh;
  overflow: hidden;
  position: relative;
  h1 {
    img {
      height: 80px;
    }
  }
`

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
`

const Header = ({data}) => {
  console.log(data)
  return(
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={Logo} alt="logo" />
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
    <Img
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%'
      }}
      sizes={data.background.sizes}
    />
  </HeaderWrapper>
)}

export default Header
