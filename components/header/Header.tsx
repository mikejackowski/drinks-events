import styled from 'styled-components'
import logo from '../../public/drink_assets/logo.png'
import Link from 'next/link'

const StyledHeader = styled.div`
  display: flex;
  align-content: center;
  width: 100%;
  height: 100px;
  background: rgb(219,181,97);
  background: linear-gradient(90deg, rgba(219,181,97,1) 20%, rgba(229,203,144,1) 100%);
  padding-bottom: 10px;
  box-sizing: border-box;
`

const HeaderTitle = styled.div`
  font-size: 16px;
  margin-left: 20px;
  align-self: center;
  font-size: 2.5em;
  font-family: 'Bangers', cursive;

  @media screen and (max-width: 535px) {
    font-size: 1.5em;
  }
`

const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
`

const Header: React.FC = () => (
  <StyledHeader>
    <Link href="/">
      <StyledLogo src={logo} alt="Drinks logo. It's a beer, duh."/>
    </Link>
    <HeaderTitle>The easiest way to organise drinks with your mates</HeaderTitle>
  </StyledHeader>
)

export default Header